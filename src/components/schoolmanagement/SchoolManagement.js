import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { SchoolListPage } from './SchoolListPage';
import { SchoolCreatePage } from './SchoolCreatePage';

export function SchoolManagement(props) {
    const [schools, setSchools] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        setIsLoading(true);
        return fetch('/api/school')
            .then(res => res.json())
            .then(list => {
                setIsLoading(false);
                setSchools(list);
            });
    }

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
        fetch('/api/school', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(() => getData())
            .then(() => history.push("/schools"))
            .then(() => setIsLoading(false));
    }

    const handleSchoolDelete = (idToDelete) => {
        setIsLoading(true);

        fetch(`/api/school/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(() => getData())
            .then(() => setIsLoading(false));
    }

    return (
        <Switch>
            <Route path="/schools" exact>
                <SchoolListPage
                    schools={schools}
                    isLoading={isLoading}
                    afterUpdate={getData}
                    onDelete={handleSchoolDelete}
                    onUpdate={handleSchoolUpdate} />
            </Route>
            <Route path="/schools/create">
                <SchoolCreatePage isLoading={isLoading} onSubmit={handleSchoolCreate} />
            </Route>
        </Switch>
    )
}