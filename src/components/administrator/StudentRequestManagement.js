import { Route, Switch } from 'react-router-dom';
import { useState, useCallback, useContext } from 'react';
import { pageSize } from '../../config';
import { StudentRequestListPage } from './StudentRequestListPage';
import { useFetch } from '../../hooks/useFetch';
import { UserContext } from '../../contexts/UserContext';

export function StudentRequestManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const { user } = useContext(UserContext);
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

    const decideRequest = useCallback((request, idToUpdate, isAccepted) => {
        setIsLoading(true);
        const schoolId = user.features[3].parameters.schoolId;
        return fetchApi(`/api/request/${schoolId}/${request.StudentId}?${isAccepted ? 'accepted' : 'rejected'}=true`, {
            method: 'PUT',
            body: JSON.stringify(request)
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
    }, []);

    return (
        <Switch>
            <Route path="/requests" exact>
                <StudentRequestListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    decideRequest={decideRequest}
                />
            </Route>
        </Switch>
    )
}