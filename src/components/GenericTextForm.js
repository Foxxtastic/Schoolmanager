import { useForm } from "react-hook-form";

export function GenericTextForm(props) {

    const { register, handleSubmit, errors } = useForm();

    const { labels, isLoading, onSubmit, onError } = props;

    const onSubmiting = (data) => {
        onSubmit(data);
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmiting, onError)}>
                <div className="component-data createitem bg-lgray">
                    {labels.map((x, idx) =>
                        <div key={idx} className="item">
                            <label >{`${x}:`}</label>
                            <input name={`${x}`} typeof="text" ref={register({ required: true })}></input>
                        </div>
                    )}
                </div>
                <div className="footer">
                    <input disabled={isLoading} type="submit" className="button" />
                </div>
            </form>
        </>
    );
}