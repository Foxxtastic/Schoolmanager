import { Loader } from './Loader';
import { useForm } from "react-hook-form";
import { ValidationErrors } from './ValidationErrors';
import DatePicker from './DatePicker';

export function GenericTextForm(props) {
    const { error, fields, isLoading, onSubmit, onError } = props;

    const { register, handleSubmit, errors } = useForm();

    const onSubmitting = (data) => {
        onSubmit(data);
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />

                <div className="component-data createitem bg-lgray">
                    {fields.map((x, idx) =>
                        <div key={idx} className="item-padding">
                            <label className={`${x.labelClass}`}>{`${x.label}:${x.required ? '*' : ''}`}</label>
                            {x.type === 'date' ?
                                <DatePicker name={`${x.fieldName}`} ref={register({ required: x.required })} /> :
                                <input name={`${x.fieldName}`} type={`${x.type}`} ref={register({ required: x.required })}></input>
                            }
                            <ValidationErrors name={x.fieldName} errors={errors} />
                        </div>
                    )}
                    <div className="item-padding validationerror tx-lred">{error && `A technical error has occurred. Details: ${error.message}`}</div>
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}