import { Route } from "react-router-dom";
import SchoolStaffPage from "./SchoolStaffPage";
import { useFetch } from '../../hooks/useFetch';
import { useCallback, useState } from "react";

export function SchooolStaffManagement(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const fetchApi = useFetch();

    const { schoolId } = props;

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

    return (

        < Route path="/staff" >
            <SchoolStaffPage
                schoolId={schoolId}
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
        </Route >
    )
}