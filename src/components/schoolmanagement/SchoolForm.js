import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import Input from '../shared/Input';

export function SchoolForm(props) {
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
                        labelText="Educational ID"
                        name="EduId"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="Name"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="Country"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="City"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        name="Address"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}