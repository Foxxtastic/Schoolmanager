import { forwardRef } from "react"
import DatePicker from "./DatePicker"
import { ValidationErrors } from "./ValidationErrors"

const Input = forwardRef((props, ref) => {
    const { customClass, isInline, labelClass, labelText, name, type, isValidatable, errors, lineBreak, defaultValue } = props;

    return (
        <>
            <div className={`${customClass ? customClass : "item-padding"} ${isInline ? "inline-block" : ""}`}>
                <label className={labelClass === undefined ? "block-label" : labelClass} >
                    {labelText === undefined ? name : labelText}:{isValidatable ? '*' : ''}
                </label>
                {(type === "date") ? <DatePicker defaultValue={defaultValue} name={name} ref={ref} /> :
                    <input defaultChecked={type === 'checkbox' && defaultValue} defaultValue={defaultValue} name={name} type={type === undefined ? "text" : type} ref={ref} />}
                {isValidatable && <ValidationErrors name={name} errors={errors} />}
            </div>
            { lineBreak && <div />}
        </>
    )
});

export default Input;