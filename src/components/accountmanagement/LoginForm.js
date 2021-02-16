import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginHandler } from "../../hooks/useLoginHandler";
import Input from "../shared/Input";

export function LoginForm(props) {
    const { register, handleSubmit, errors } = useForm();

    const [isLoading, setIsLoading] = useState(undefined);

    const [serverError, setServerError] = useState(undefined);

    const performLogin = useLoginHandler(setIsLoading, setServerError);

    const onSubmitting = (formData) => {
        performLogin(formData);
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
                    defaultValue={true}
                    customClass={"userform-item"}
                    labelClass="inline-block useform-remember"
                    name="Remember"
                    labelText="Remember me"
                    type="checkbox"
                    ref={register({ required: false })}
                />
                {serverError &&
                    <div className="validationerror tx-lred">
                        {serverError}
                    </div>
                }
                <input className="userform-button" type="submit" value="LOG IN" disabled={isLoading} />
            </form>
        </div>
    )
}