import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pageSize } from '../../config';
import { useHttpHeaders } from '../../hooks/useHttpHeaders';
import RequestForm from './RequestForm';
import { SchoolListPage } from './SchoolListPage';

export function RequestManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const httpHeaders = useHttpHeaders();

    const getData = useCallback((pageNumber, sortingProperty, isDescending, filterProperty, filterValue) => {
        setIsLoading(true);
        filterValue = encodeURIComponent(filterValue);
        return fetch(`/api/school?pageNumber=${pageNumber}&pageSize=${pageSize}` +
            `&sorting=${sortingProperty}&isDescending=${isDescending}` +
            `&filterProperty=${filterProperty}&filterValue=${filterValue}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const getSchoolById = useCallback((id) => {
        setIsLoading(true);
        return fetch(`/api/school/${id}`)
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
    }, []);

    const getStudentByEmailAddress = useCallback((emailAddress) => {
        setIsLoading(true);
        return fetch(`/api/request/student/${emailAddress}`)
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
    }, []);

    const createStudentRequest = useCallback((newItem) => {
        console.log(newItem)
        setIsLoading(true);
        return fetch(`/api/request`, {
            method: 'POST',
            headers: httpHeaders,
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
    }, [])

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