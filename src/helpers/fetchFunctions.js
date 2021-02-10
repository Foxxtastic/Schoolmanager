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