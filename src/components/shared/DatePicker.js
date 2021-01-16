import { forwardRef } from "react"

const DatePicker = forwardRef((props, ref) => (
    <input
        className={props.className}
        type="date"
        name={props.name}
        defaultValue={props.name === undefined ? "2000-01-01" : props.defaultValue}
        ref={ref}
    />
))

export default DatePicker;