export function userCreate(newItem, setIsLoading, setError) {
    setIsLoading(true);
    return fetch('/api/user', {
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

export function getTeacherMajors(setIsLoading) {
    setIsLoading(true);
    return fetch('/api/major')
        .then(res => res.json())
        .finally(() =>
            setIsLoading(false));
}

export function teacherCreate(newItem, setIsLoading, setError) {
    setIsLoading(true);
    return fetch('/api/teacher', {
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

export function studentCreate(newItem, setIsLoading, setError) {
    setIsLoading(true);
    return fetch('/api/student', {
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