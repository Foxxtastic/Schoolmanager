import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pageSize } from '../../config';
import { useFetch } from '../../hooks/useFetch';
import RequestForm from './RequestForm';
import { SchoolListPage } from './SchoolListPage';

export function RequestManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetchApi(`/api/school?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const getSchoolById = useCallback((id) => {
        setIsLoading(true);
        return fetchApi(`/api/school/${id}`)
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

    const getStudentByEmailAddress = useCallback((emailAddress) => {
        setIsLoading(true);
        return fetchApi(`/api/request/student/${emailAddress}`)
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

    const createStudentRequest = useCallback((newItem) => {
        console.log(newItem)
        setIsLoading(true);
        return fetchApi(`/api/request`, {
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
    }, [fetchApi])

    return (
        <Switch>
            <Route path="/apply" exact>
                <SchoolListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                />
            </Route>
            <Route path="/apply/:id">
                <RequestForm getSchool={getSchoolById} getStudent={getStudentByEmailAddress} createRequest={createStudentRequest} />
            </Route>
        </Switch>
    )
}