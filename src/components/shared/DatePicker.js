import { forwardRef } from "react"

const DatePicker = forwardRef((props, ref) => {
    const { className, name, defaultValue } = props;

    return (
        <input
            className={className}
            type="date"
            name={name}
            defaultValue={name === undefined ? "2000-01-01" : defaultValue}
            ref={ref}
        />
    )
})

export default DatePicker;