import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import Input from '../shared/Input';

export function StudentForm(props) {
    const { error, isLoading, onSubmit, onError, defaultData, usedByAdmin } = props;

    const { register, handleSubmit, errors } = useForm({ defaultValues: defaultData });

    const onSubmitting = (data) => {
        onSubmit(data);
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />
                <div className={`component-data ${usedByAdmin ? "bg-lgray createitem" : ""}`}>
                    <Input
                        isInline={true}
                        labelText="First Name"
                        name="FirstName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
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
                        isInline={true}
                        name="Nationality"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
                        labelText="Second Nationality"
                        name="SecondNationality"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    <Input
                        isInline={true}
                        name="City"
                        ref={register({ required: false })}
                    />
                    <Input
                        isInline={true}
                        name="Address"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    {usedByAdmin && <Input
                        isInline={true}
                        labelText="Email Address"
                        name="EmailAddress"
                        type="email"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />}
                    {usedByAdmin && <Input
                        isInline={true}
                        name="Password"
                        type="password"
                        ref={register({ required: true })}
                        isValidatable={true}
                        errors={errors}
                    />}
                    <Input
                        labelText="Start Date"
                        name="StartDate"
                        type="date"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        labelClass="inline-label"
                        isInline={true}
                        labelText="Active Status"
                        name="ActiveStatus"
                        type="checkbox"
                        ref={register({ required: false })}
                    />
                    {usedByAdmin && <Input
                        labelClass="inline-label"
                        isInline={true}
                        labelText="Is Active"
                        name="IsActive"
                        type="checkbox"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />}
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred.{error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form >
        </>
    );
}