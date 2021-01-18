import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../shared/Input";

export function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [isLoading, setIsLoading] = useState(undefined);

    const [activeUser, setActiveUser] = useState(undefined);

    const userCheck = useCallback((emailAddress) => {
        return fetch(`/api/user/${emailAddress}`)
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    throw new Error(jsonResponse.error.message);
                }
                return jsonResponse;
            })
            .catch((err) => {
                throw err;
            })
            .finally(() => console.log("ok"));
    }, []);

    const onSubmitting = (data) => {
        const email = data.EmailAddress;
        userCheck(email)
            .then(data => setActiveUser(data))
            .finally(console.log(activeUser));
    }

    const onError = (errors) => {
        console.log(errors)
    }

    return (
        <form onSubmit={handleSubmit(onSubmitting, onError)}>
            <Input
                labelText="Email Address"
                name="EmailAddress"
                isValidatable={true}
                ref={register({ required: true })}
                errors={errors}
            />
            <Input
                name="Password"
                type="password"
                isValidatable={true}
                ref={register({ required: true })}
                errors={errors}
            />
            <input className="button-withoutmargin item-margin" type="submit" />
        </form>
    )
}