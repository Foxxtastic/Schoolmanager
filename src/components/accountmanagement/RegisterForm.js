import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { userCreate } from "../../helpers/fetchFunctions";
import Input from "../shared/Input";
import { Selector } from "./Selector";

export function RegisterForm(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("Password", "")

    const onSubmitting = (data) => {
        userCreate(data, setIsLoading, setError)
            .then(alert("Registration Complete"))
            .catch((err) => console.log(err));
    }

    const onError = (errors) => {
        console.log(errors)
    }

    return (
        <div className="userform">
            <label className="form-label">Register account</label>
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
                    labelClass="block userform-label"
                    labelText="Confirm Password"
                    name="ConfirmPassword"
                    type="password"
                    isValidatable={true}
                    ref={register({
                        validate: value =>
                            value === password.current || "The Password do not match"
                    })}
                    errors={errors}
                />
                <input className="userform-button" type="submit" value="register" disabled={isLoading} />
            </form>
        </div>
    )
}