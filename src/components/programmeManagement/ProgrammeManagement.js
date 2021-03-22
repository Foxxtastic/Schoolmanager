import { useCallback, useState } from 'react';
import { Route, Switch } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import { pageSize } from '../../config'
import { ProgrammeListPage } from './ProgrammeListPage';
import { ProgrammeForm } from './ProgrammeForm';
import { ProgramCreatePage } from './ProgrammeCreatePage';

export function ProgrammeManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/programme?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const handleProgrammeUpdate = (idToUpdate, programme) => {
        setIsLoading(true);
        return fetchApi(`/api/programme/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(programme)
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

    const handleProgrammeCreate = (newItem) => {
        setIsLoading(true);
        return fetchApi('/api/programme', {
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

    const handleProgrammeDelete = (idToDelete) => {
        setIsLoading(true);

        return fetchApi(`/api/programme/${idToDelete}`, {
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
            <Route path='/programmes' exact>
                <ProgrammeListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    afterCreate={getData}
                    onDelete={handleProgrammeDelete}
                    onUpdate={handleProgrammeUpdate}
                    onCreate={handleProgrammeCreate}
                />
            </Route>
            <Route path='/programmes/create' exact>
                <ProgramCreatePage error={error} />
            </Route>
        </Switch>
    )
}