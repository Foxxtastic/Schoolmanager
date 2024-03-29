import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { TeacherListPage } from './TeacherListPage';
import { TeacherCreatePage } from './TeacherCreatePage';
import { pageSize } from '../../config';
import TeacherUpdatePage from './TeacherUpdatePage';
import { getTeacherMajors, teacherCreate } from '../../helpers/fetchFunctions';
import { useFetch } from '../../hooks/useFetch';

export function TeacherManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getMajors = useCallback(() => {
        return getTeacherMajors(setIsLoading);
    }, []);

    const getAllSchools = useCallback(() => {
        setIsLoading(true);

        return fetchApi('/api/school/')
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false)
            });
    }, [fetchApi]);

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/teacher?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}&schoolId=${schoolId ?? ''}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const getDataById = useCallback((idToUpdate) => {
        setIsLoading(true);
        return fetchApi(`/api/teacher/${idToUpdate}`)
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    throw new Error(jsonResponse.error.message);
                }
                setError(undefined);
                return jsonResponse;
            })
            .catch((err) => {
                setError({ message: err.message });
                throw err;
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const handleTeacherUpdate = (idToUpdate, teacher) => {
        setIsLoading(true);

        return fetchApi(`/api/teacher/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(teacher)
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

    const handleTeacherCreate = (newItem) => {
        return teacherCreate(newItem, setIsLoading, setError);
    }

    const handleTeacherDelete = (idToDelete) => {
        setIsLoading(true);

        return fetchApi(`/api/teacher/${idToDelete}`, {
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
            <Route path="/teachers" exact>
                <TeacherListPage
                    error={error}
                    isLoading={isLoading}
                    getAllSchools={getAllSchools}
                    afterSelectSchool={getData}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    onDelete={handleTeacherDelete}
                    onUpdate={handleTeacherUpdate} />
            </Route>
            <Route path="/teachers/create">
                <TeacherCreatePage
                    getMajors={getMajors}
                    error={error}
                    isLoading={isLoading}
                    onTeacherCreate={handleTeacherCreate}
                    afterCreate={() => {
                        history.push("/teachers");
                    }}
                />
            </Route>
            <Route path="/teachers/:id/update">
                <TeacherUpdatePage
                    getMajors={getMajors}
                    error={error}
                    isLoading={isLoading}
                    getDataById={getDataById}
                    onUpdate={handleTeacherUpdate}
                    afterUpdate={() => history.push("/teachers")}
                />
            </Route>
        </Switch>
    )
}