import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { PersonListPage } from './PersonListPage';
import { PersonCreatePage } from './PersonCreatePage';
import { pageSize } from '../../config';

export function PersonManagement(props) {
    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        return fetch(`/api/person?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .then(listResponse => {
                setIsLoading(false);
                return listResponse;
            });
    }, []);

    const handlePersonUpdate = (idToUpdate, person) => {
        setIsLoading(true);

        return fetch(`/api/person/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        })
            .then(res => res.json())
            .then(() => setIsLoading(false));
    }

    const handlePersonCreate = (newItem) => {
        setIsLoading(true);

        return fetch('/api/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(() => setIsLoading(false));
    }

    const handlePersonDelete = (idToDelete) => {
        setIsLoading(true);

        return fetch(`/api/person/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(() => setIsLoading(false));
    }

    return (
        <Switch>
            <Route path="/persons" exact>
                <PersonListPage
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    onDelete={handlePersonDelete}
                    onUpdate={handlePersonUpdate} />
            </Route>
            <Route path="/persons/create">
                <PersonCreatePage
                    isLoading={isLoading}
                    onCreate={handlePersonCreate}
                    afterCreate={() => history.push("/persons")}
                />
            </Route>
        </Switch>
    )
}