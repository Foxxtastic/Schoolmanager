export function ValidationErrors(props) {

    const { name, errors } = props;

    return (
        <div className="validationerror tx-lred">
            {errors[name]?.type === "required" && "This field is required"}
            {errors[name]?.type === "minLength" && "Not Long enough!"}
            {errors[name]?.type === "pattern" && "Not valid field-pattern!"}
        </div>
    )
}

