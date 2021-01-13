import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { UserListPage } from './UserListPage';
import { UserCreatePage } from './UserCreatePage';
import { pageSize } from '../../config';

export function UserManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        return fetch(`/api/user?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleUserUpdate = (idToUpdate, user) => {
        setIsLoading(true);

        return fetch(`/api/user/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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
        setIsLoading(true);

        return fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleUserDelete = (idToDelete) => {
        setIsLoading(true);

        return fetch(`/api/user/${idToDelete}`, {
            method: 'DELETE'
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
        </Switch>
    )
}