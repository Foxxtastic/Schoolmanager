import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import { ValidationErrors } from '../shared/ValidationErrors';

export function UserForm(props) {
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
                    <div className="item-padding">
                        <label className="block-label" >Email Address:*</label>
                        <input name="EmailAddress" type="email" ref={register({ required: true })} />
                        <ValidationErrors name="EmailAddress" errors={errors} />
                        <label className="block-label">IsActive:</label>
                        <input type="checkbox" name="IsActive" ref={register({ required: false })} />
                    </div>
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}