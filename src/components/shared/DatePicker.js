import { forwardRef } from "react"

const DatePicker = forwardRef((props, ref) => (
    <input
        type="date"
        name={props.name}
        defaultValue={props.defaultValue}
        ref={ref}
    />
))

export default DatePicker;