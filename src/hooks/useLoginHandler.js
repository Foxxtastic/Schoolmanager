import { useContext } from "react";
import { history } from "../history";
import { login } from "../helpers/fetchFunctions";
import { setStorageItem } from "../helpers/storageHelpers";
import { UserContext } from "../contexts/UserContext";

export function useLoginHandler(setIsLoading, setError) {
    const { setUser } = useContext(UserContext);

    return (formData) => {
        login(formData, setIsLoading)
            .then(user => {
                setStorageItem('user', user, formData.Remember);
                setUser(user);
                history.push("/Home");
            })
            .catch(err => {
                setError(err.message);
            });

    }
}