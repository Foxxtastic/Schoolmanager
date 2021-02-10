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
        <div className="userform">
            <label className="form-label">Account login</label>
            <form onSubmit={handleSubmit(onSubmitting, onError)}>
                <Input
                    customClass={"userform-item"}
                    labelText="Email Address"
                    labelClass="block userform-label"
                    name="EmailAddress"
                    type="email"
                    isValidatable={true}
                    ref={register({ required: true })}
                    errors={errors}
                />
                <Input
                    customClass={"userform-item"}
                    labelClass="block userform-label"
                    name="Password"
                    type="password"
                    isValidatable={true}
                    ref={register({ required: true })}
                    errors={errors}
                />
                <Input
                    customClass={"userform-item"}
                    labelClass="inline-block"
                    name="remember"
                    labelText="Remember me"
                    labelClass="userform-remember"
                    type="checkbox"
                    ref={register({ required: false })}
                />
                <input className="userform-button" type="submit" value="LOG IN" />
            </form>
        </div>
    )
}