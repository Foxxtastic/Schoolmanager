import { forwardRef } from "react";
import { formatAsDate } from "../../helpers/momentHelpers";

const DatePicker = forwardRef((props, ref) => {
    const { className, name, defaultValue, readOnly } = props;

    return (
        <input
            className={className}
            type="date"
            name={name}
            defaultValue={name === undefined ? "2000-01-01" : formatAsDate(defaultValue)}
            ref={ref}
            readOnly={readOnly}
        />
    )
})

export default DatePicker;