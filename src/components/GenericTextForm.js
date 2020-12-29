import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export function GenericTextForm(props) {

    const { register, handleSubmit, errors } = useForm();

    let btnRef = useRef(null);

    const [isLoading, setIsLoading] = useState(false);

    const { labels, onSubmit, onError } = props;

    const onSubmiting = (data) => {
        if (btnRef.current) {
            btnRef.current.setAttribute("disabled", "disabled");
        }
        setIsLoading(true);
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
                    <input ref={btnRef} type="submit" className="button" />
                </div>
            </form>
        </>
    );
}