export function Button(props) {

    const { disabled, text, handleClick, customClass } = props;

    return (
        <button
            disabled={disabled}
            className={`tx-yellow ${(text === "Delete") ? 'bg-lred' : 'bg-lblue'} ${(customClass !== undefined) ? customClass : "button"}`}
            onClick={handleClick}>{text}
        </button>
    );
}