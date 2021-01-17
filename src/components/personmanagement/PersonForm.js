import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import Input from '../shared/Input';

export function PersonForm(props) {
    const { error, isLoading, onSubmit, onError, defaultData } = props;

    const { register, handleSubmit, errors } = useForm({ defaultValues: defaultData });

    const onSubmitting = (data) => {
        onSubmit(data);
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />

                <div className="component-data createitem bg-lgray">
                    <Input
                        labelText="First Name"
                        name="FirstName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        labelText="Last Name"
                        name="LastName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        labelText="Birth Date"
                        name="BirthDate"
                        type="date"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="Nationality"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        labelText="Second Nationality"
                        name="SecondNationality"
                        ref={register({ required: false })}
                    />
                    <Input
                        name="City"
                        ref={register({ required: false })}
                    />
                    <Input
                        name="Address"
                        ref={register({ required: false })}
                    />
                    <Input
                        labelText="Email Address"
                        name="EmailAddress"
                        type="email"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="PassWord"
                        type="password"
                        ref={register({ required: false })}
                    />
                    <Input
                        labelClass="inline-label"
                        labelText="Is Active"
                        name="IsActive"
                        type="checkbox"
                        ref={register({ required: false })}
                    />
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}