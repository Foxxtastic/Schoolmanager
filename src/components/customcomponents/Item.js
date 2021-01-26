export function Item(props) {

    const { value, handleRemove } = props;

    return (
        <label> {value} <label className="itemdelete" onClick={() => handleRemove(value)}>x</label></label >
    )
}