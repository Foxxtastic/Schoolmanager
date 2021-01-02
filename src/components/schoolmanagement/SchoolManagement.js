import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { SchoolListPage } from './SchoolListPage';
import { SchoolCreatePage } from './SchoolCreatePage';
import { pageSize } from '../../config';

export function SchoolManagement(props) {
    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback((pageNumber, sortingProperty, isDescending) => {
        setIsLoading(true);
        return fetch(`/api/school?pageNumber=${pageNumber}&pageSize=${pageSize}&sorting=${sortingProperty}&isDescending=${isDescending}`)
            .then(res => res.json())
            .then(listResponse => {
                setIsLoading(false);
                return listResponse;
            });
    }, []);

    const handleSchoolUpdate = (idToUpdate, school) => {
        setIsLoading(true);

        return fetch(`/api/school/${idToUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(school)
        })
            .then(res => res.json())
            .then(() => setIsLoading(false));
    }

    const handleSchoolCreate = (newItem) => {
        setIsLoading(true);

        return fetch('/api/school', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(() => setIsLoading(false));
    }

    const handleSchoolDelete = (idToDelete) => {
        setIsLoading(true);

        return fetch(`/api/school/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(() => setIsLoading(false));
    }

    return (
        <Switch>
            <Route path="/schools" exact>
                <SchoolListPage
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    onDelete={handleSchoolDelete}
                    onUpdate={handleSchoolUpdate} />
            </Route>
            <Route path="/schools/create">
                <SchoolCreatePage
                    isLoading={isLoading}
                    onCreate={handleSchoolCreate}
                    afterCreate={() => history.push("/schools")}
                />
            </Route>
        </Switch>
    )
}