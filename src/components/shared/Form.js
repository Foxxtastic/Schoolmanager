export function Form(props) {

    const { headers, data } = props;

    if (headers !== undefined && data !== undefined) {
        return (
            <div className="form">
                {headers.map((x, idx) =>
                    <div key={idx}>
                        <label className="form-header">{x.text}: </label>
                        <label className="form-item">{data[idx] ? data[idx] : "none"}</label>
                    </div>)}
            </div>
        );
    }
    return null;
}