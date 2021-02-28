import { useState, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { history } from '../../history'
import { SchoolListPage } from './SchoolListPage';
import { SchoolCreatePage } from './SchoolCreatePage';
import { pageSize } from '../../config';
import SchoolStaffPage from './SchoolStaffPage';
import { useFetch } from '../../hooks/useFetch';

export function SchoolManagement(props) {
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

    const getDataById = useCallback((id) => {
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

    const getStudentById = useCallback((id) => {
        setIsLoading(true);
        return fetchApi(`/api/student/${id}`)
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

    const getTeacherById = useCallback((id) => {
        setIsLoading(true);
        return fetchApi(`/api/teacher/${id}`)
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

    const getStudentsWithoutSchool = useCallback(() => {
        setIsLoading(true);
        return fetchApi('/api/student?schoolLess=true')
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

    const getTeachersWithoutSchool = useCallback(() => {
        setIsLoading(true);
        return fetchApi('/api/teacher?schoolLess=true')
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

    const getStudentsOfSchool = useCallback((schoolId) => {
        setIsLoading(true);
        return fetchApi(`/api/student?schoolId=${schoolId}`)
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

    const getTeachersOfSchool = useCallback((schoolId) => {
        setIsLoading(true);
        return fetchApi(`/api/teacher?schoolId=${schoolId}`)
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

    const handleStudentDeassign = (schoolId, studentIds) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${schoolId}/student/deassign`, {
            method: 'POST',
            body: JSON.stringify(studentIds)
        })
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    setError({ message: jsonResponse.error.message, rowidx: schoolId });
                    return;
                }
                setError(undefined);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleTeacherDeassign = (schoolId, teacherIds) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${schoolId}/teacher/deassign`, {
            method: 'POST',
            body: JSON.stringify(teacherIds)
        })
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    setError({ message: jsonResponse.error.message, rowidx: schoolId });
                    return;
                }
                setError(undefined);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleStudentAssign = (schoolId, studentIds) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${schoolId}/student/assign`, {
            method: 'POST',
            body: JSON.stringify(studentIds)
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

    const handleTeacherAssign = (schoolId, teacherIds) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${schoolId}/teacher/assign`, {
            method: 'POST',
            body: JSON.stringify(teacherIds)
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

    const handleSchoolUpdate = (idToUpdate, school) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${idToUpdate}`, {
            method: 'PUT',
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

        return fetchApi('/api/school', {
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

    const handleSchoolDelete = (idToDelete) => {
        setIsLoading(true);

        return fetchApi(`/api/school/${idToDelete}`, {
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
                    assignStudents={handleStudentAssign}
                    assignTeachers={handleTeacherAssign}
                    deassignStudents={handleStudentDeassign}
                    deassignTeachers={handleTeacherDeassign}
                />
            </Route>
        </Switch>
    )
}