import { useForm } from "react-hook-form";

export function CreateItem(props) {

    const { register, handleSubmit, errors } = useForm();
    const { labels, handleSchoolCreate } = props;

    const onSubmit = (data) => handleSchoolCreate(data);
    const onError = () => console.log(errors);

    return (
        <>
            <form className="component" onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="component-data createitem bg-lgray">
                    {labels.map((x, idx) =>
                        <div key={idx} className="item">
                            <label >{`${x}:`}</label>
                            <input name={`${x}`} typeof="text" ref={register({ required: true })}></input>
                        </div>
                    )}
                </div>
                <div className="footer">
                    <input type="submit" className="button" />
                </div>
            </form>
        </>
    );
}