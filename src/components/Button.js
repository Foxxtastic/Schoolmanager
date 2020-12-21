export function Button(props) {

    const { text, handleClick } = props;

    return (
        <button className="button bg-lblue tx-yellow" onClick={handleClick}>{text}</button>
    );
}