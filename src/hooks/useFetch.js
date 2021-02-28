const { useContext, useCallback } = require("react");
const { UserContext } = require("../contexts/UserContext");

export function useFetch() {
    const { user } = useContext(UserContext);

    return useCallback((url, requestInit = {}) => {
        const { method, headers, body } = requestInit;

        const httpHeaders = {
            'Content-Type': 'application/json',
            ...headers
        };

        if (user !== null) {
            httpHeaders['Authorization'] = 'Bearer ' + user.token;
        }

        return fetch(url, {
            method,
            headers: httpHeaders,
            body
        });
    }, [user]);
}