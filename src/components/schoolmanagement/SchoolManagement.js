import { useState, useCallback, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { SchoolListPage } from './SchoolListPage';
import { SchoolCreatePage } from './SchoolCreatePage';
import { pageSize } from '../../config';
import SchoolStaffPage from './SchoolStaffPage';

export function SchoolManagement(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

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

    const getDataById = useCallback((id) => {
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

    const getStudentById = useCallback((id) => {
        setIsLoading(true);
        return fetch(`/api/student/${id}`)
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

    const getTeacherById = useCallback((id) => {
        setIsLoading(true);
        return fetch(`/api/teacher/${id}`)
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

    const getStudentsWithoutSchool = useCallback(() => {
        setIsLoading(true);
        return fetch('/api/student?schoolLess=true')
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

    const getTeachersWithoutSchool = useCallback(() => {
        setIsLoading(true);
        return fetch('/api/teacher?schoolLess=true')
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

    const getStudentsOfSchool = useCallback((schoolId) => {
        setIsLoading(true);
        return fetch(`/api/student?schoolId=${schoolId}`)
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

    const getTeachersOfSchool = useCallback((schoolId) => {
        setIsLoading(true);
        return fetch(`/api/teacher?schoolId=${schoolId}`)
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

    const handleSchoolDelete = (idToDelete) => {
        setIsLoading(true);

        return fetch(`/api/school/${idToDelete}`, {
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
            <Route path="/schools" exact>
                <SchoolListPage
                    error={error}
                    isLoading={isLoading}
                    afterPaging={getData}
                    afterUpdate={getData}
                    afterDelete={getData}
                    onDelete={handleSchoolDelete}
                    onUpdate={handleSchoolUpdate} />
            </Route>
            <Route path="/schools/create">
                <SchoolCreatePage
                    error={error}
                    isLoading={isLoading}
                    onCreate={handleSchoolCreate}
                    afterCreate={() => history.push("/schools")}
                />
            </Route>
            <Route path="/schools/:id">
                <SchoolStaffPage
                    error={error}
                    isLoading={isLoading}
                    getDataById={getDataById}
                    getStudentsToAdmit={getStudentsWithoutSchool}
                    getTeachersToHire={getTeachersWithoutSchool}
                    getStudentById={getStudentById}
                    getTeacherById={getTeacherById}
                    getOwnStudents={getStudentsOfSchool}
                    getOwnTeachers={getTeachersOfSchool}
                />
            </Route>
        </Switch>
    )
}