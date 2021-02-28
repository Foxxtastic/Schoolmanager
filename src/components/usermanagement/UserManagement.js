import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { UserListPage } from './UserListPage';
import { UserCreatePage } from './UserCreatePage';
import { userCreate } from '../../helpers/fetchFunctions';
import UserUpdatePage from './UserUpdatePage';
import { pageSize } from '../../config';
import { useFetch } from '../../hooks/useFetch';

export function UserManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/user?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const getDataById = useCallback((idToUpdate) => {
        setIsLoading(true);
        return fetchApi(`/api/user/${idToUpdate}`)
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

    const handleUserUpdate = (idToUpdate, user) => {
        setIsLoading(true);
        return fetchApi(`/api/user/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(user)
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

    const handleUserCreate = (newItem) => {
        return userCreate(newItem, setIsLoading, setError);
    }

    const handleUserDelete = (idToDelete) => {
        setIsLoading(true);
        return fetchApi(`/api/user/${idToDelete}`, {
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
            <Route path="/users" exact>
                <UserListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    onDelete={handleUserDelete}
                    onUpdate={handleUserUpdate} />
            </Route>
            <Route path="/users/create">
                <UserCreatePage
                    isLoading={isLoading}
                    onCreate={handleUserCreate}
                    afterCreate={() => history.push("/users")}
                />
            </Route>
            <Route path="/users/:id/update">
                <UserUpdatePage
                    error={error}
                    isLoading={isLoading}
                    getDataById={getDataById}
                    onUpdate={handleUserUpdate}
                    afterUpdate={() => history.push("/users")}
                />
            </Route>
        </Switch>
    )
}