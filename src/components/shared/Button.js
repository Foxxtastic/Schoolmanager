export function Button(props) {

    const { disabled, text, handleClick, customClass, isRed } = props;

    return (
        <button
            disabled={disabled}
            className={`tx-yellow ${isRed ? 'bg-lred' : 'bg-lblue'} ${(customClass !== undefined) ? customClass : "button"}`}
            onClick={handleClick}>{text}
        </button>
    );
}