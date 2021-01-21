import { forwardRef } from "react"
import DatePicker from "./DatePicker"
import { ValidationErrors } from "./ValidationErrors"

const Input = forwardRef((props, ref) => {
    const { isInline, labelClass, labelText, name, type, isValidatable, errors, lineBreak } = props;

    return (
        <>
            <div className={`${isInline ? "item-padding inline-block" : "item-padding"}`}>
                <label className={labelClass === undefined ? "block-label" : labelClass} >
                    {labelText === undefined ? name : labelText}:{isValidatable ? '*' : ''}
                </label>
                {(type === "date") ? <DatePicker name={name} ref={ref} /> :
                    <input name={name} type={type === undefined ? "text" : type} ref={ref} />}
                {isValidatable && <ValidationErrors name={name} errors={errors} />}
            </div>
            { lineBreak && <div />}
        </>
    )
});

export default Input;