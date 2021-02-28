import { Route, Switch } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { pageSize } from '../../config';
import { StudentRequestListPage } from './StudentRequestListPage';
import { useFetch } from '../../hooks/useFetch';

export function StudentRequestManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error/*, setError*/] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/request?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}&schoolId=${schoolId ?? ''}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    // const aproveRequest = useCallback(() => {
    //     setIsLoading(true);
    // }, [])

    return (
        <Switch>
            <Route path="/requests" exact>
                <StudentRequestListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                />
            </Route>
        </Switch>
    )
}