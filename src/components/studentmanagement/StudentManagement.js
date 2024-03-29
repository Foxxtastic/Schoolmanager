import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { StudentListPage } from './StudentListPage';
import { StudentCreatePage } from './StudentCreatePage';
import { studentCreate } from '../../helpers/fetchFunctions';
import { pageSize } from '../../config';
import { useFetch } from '../../hooks/useFetch';

export function StudentManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/student?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}&schoolId=${schoolId ?? ''}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const getAllSchools = useCallback(() => {
        setIsLoading(true);

        return fetchApi('/api/school/')
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false)
            });
    }, [fetchApi]);

    const handleStudentUpdate = (idToUpdate, person) => {
        setIsLoading(true);

        return fetchApi(`/api/student/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    setError({ message: jsonResponse.error.message, rowidx: idToUpdate });
                    return;
                }

                setError(undefined);
            })
            .catch((err) => {
                setError({ message: err.message, rowidx: idToUpdate })
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleStudentCreate = (newItem) => {
        return studentCreate(newItem, isLoading, setError);
    }

    const handleStudentDelete = (idToDelete) => {
        setIsLoading(true);

        return fetchApi(`/api/student/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    setError({ message: jsonResponse.error.message, rowidx: idToDelete });
                    return;
                }
                setError(undefined);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <Switch>
            <Route path="/students" exact>
                <StudentListPage
                    error={error}
                    isLoading={isLoading}
                    getAllSchools={getAllSchools}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    afterSelectSchool={getData}
                    onDelete={handleStudentDelete}
                    onUpdate={handleStudentUpdate} />
            </Route>
            <Route path="/students/create">
                <StudentCreatePage
                    error={error}
                    isLoading={isLoading}
                    onStudentCreate={handleStudentCreate}
                    afterCreate={() => {
                        history.push("/students");
                    }}
                />
            </Route>
        </Switch>
    )
}