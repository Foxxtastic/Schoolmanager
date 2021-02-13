const { useContext } = require("react");
const { UserContext } = require("../contexts/UserContext");

export function useHttpHeaders(customHeaders) {
    const { user } = useContext(UserContext);

    const httpHeaders = {
        'Content-Type': 'application/json',
        ...customHeaders
    };

    if (user !== null) {
        httpHeaders['Authorization'] = 'Bearer ' + user.token;
    }

    return httpHeaders;
}