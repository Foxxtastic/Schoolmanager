export function Button(props) {

    const { disabled, text, handleClick } = props;

    return (
        <button disabled={disabled} className="button bg-lblue tx-yellow" onClick={handleClick}>{text}</button>
    );
}