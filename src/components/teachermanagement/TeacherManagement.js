import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { TeacherListPage } from './TeacherListPage';
import { TeacherCreatePage } from './TeacherCreatePage';
import { pageSize } from '../../config';

export function TeacherManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const getMajors = useCallback(() => {
        setIsLoading(true);
        return fetch('/api/major')
            .then(res => res.json())
            .finally(() =>
                setIsLoading(false));
    }, []);

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetch(`/api/teacher?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleTeacherUpdate = (idToUpdate, teacher) => {
        setIsLoading(true);

        return fetch(`/api/teacher/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
        setIsLoading(true);
        return fetch('/api/teacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
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
    }

    const handleTeacherDelete = (idToDelete) => {
        setIsLoading(true);

        return fetch(`/api/teacher/${idToDelete}`, {
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
        </Switch>
    )
}