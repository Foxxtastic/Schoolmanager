export function Modal(props) {

    const { labels, handleClick } = props;

    return (
        <div className="popupform bg-lred">
            {labels.map((x, idx) => <label key={idx} className="form-item">{x}</label>)}
        </div>
    );
}