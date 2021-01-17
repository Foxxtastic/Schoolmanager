import { forwardRef } from "react"
import DatePicker from "./DatePicker"
import { ValidationErrors } from "./ValidationErrors"

const Input = forwardRef((props, ref) => {
    const { labelClass, labelText, name, type, isValidatable, errors } = props;

    return (
        <div className="item-padding">
            <label className={labelClass === undefined ? "block-label" : labelClass} >{labelText === undefined ? name : labelText}</label>
            {(type === "date") ? <DatePicker name={name} ref={ref} /> :
                <input name={name} type={type === undefined ? "text" : type} ref={ref} />}
            {isValidatable && <ValidationErrors name={name} errors={errors} />}
        </div>
    )
});

export default Input;