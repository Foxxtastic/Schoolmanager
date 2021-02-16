import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import { Selector } from "./Selector";
import { history } from "../../history"

export function RegisterForm(props) {

    const { isLoading, setUserToCreate } = props;
    const [selectedPersonType, setSelectedPersonType] = useState("teacher");

    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("Password", "")

    const onSubmitting = (data) => {
        setUserToCreate(data);
        history.push(`/register/${selectedPersonType}`)
    }

    const onError = (errors) => {
        console.log(errors)
    }

    const handleChangePersonType = (newPersonType) => {
        setSelectedPersonType(newPersonType);
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
                <Selector onChange={handleChangePersonType} />
                <input className="userform-button" type="submit" value="Next" disabled={isLoading} />
            </form>
        </div>
    )
}