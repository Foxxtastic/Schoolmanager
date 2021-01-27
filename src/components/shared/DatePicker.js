import { forwardRef } from "react";
import moment from "moment";

const DatePicker = forwardRef((props, ref) => {
    const { className, name, defaultValue } = props;

    return (
        <input
            className={className}
            type="date"
            name={name}
            defaultValue={name === undefined ? "2000-01-01" : moment(defaultValue).format("YYYY-MM-DD")}
            ref={ref}
        />
    )
})

export default DatePicker;