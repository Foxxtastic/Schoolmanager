import { Loader } from './Loader';
import { useForm } from "react-hook-form";
import { ValidationErrors } from './ValidationErrors';

export function GenericTextForm(props) {

    const { register, handleSubmit, errors } = useForm();

    const { labels, isLoading, onSubmit, onError } = props;

    const onSubmitting = (data) => {
        console.log(data);
        onSubmit(data);
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />

                <div className="component-data createitem bg-lgray">
                    {labels.map((x, idx) =>
                        <div key={idx} className="item-padding">
                            <label >{`${x.label}:${x.required ? '*' : ''}`}</label>
                            <input name={`${x.label}`} typeof="text" ref={register({ required: x.required })}></input>
                            <ValidationErrors name={x.label} errors={errors} />
                        </div>
                    )}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}