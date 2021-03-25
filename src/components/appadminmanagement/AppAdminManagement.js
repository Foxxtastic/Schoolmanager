import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pageSize } from '../../config';
import { history } from '../../history';
import { useFetch } from '../../hooks/useFetch';
import { AppAdminListPage } from './AppAdminListPage';
import { AppAdminCreatePage } from './AppAdminCreatePage';

export function AppAdminManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/appadmin?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const handleAppAdminUpdate = (idToUpdate, major) => {
        setIsLoading(true);
        return fetchApi(`/api/appadmin/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(major)
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

    const handleAppAdminCreate = (newItem) => {
        setIsLoading(true);
        return fetchApi('/api/appadmin', {
            method: 'POST',
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

    const handleAppAdminDelete = (idToDelete) => {
        setIsLoading(true);

        return fetchApi(`/api/appadmin/${idToDelete}`, {
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
            <Route path="/appadmins" exact>
                <AppAdminListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    afterCreate={getData}
                    onDelete={handleAppAdminDelete}
                    onUpdate={handleAppAdminUpdate}
                    onCreate={handleAppAdminCreate} />
            </Route>
            <Route path="/appadmins/create" exact>
                <AppAdminCreatePage
                    error={error}
                    isLoading={isLoading}
                    onCreate={handleAppAdminCreate}
                    afterUpdate={() => history.push("/appadmins")}
                />
            </Route>
        </Switch>
    )
}