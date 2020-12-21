export function DataTable(props) {

    const { header, data } = props;

    return (
        <table className="datatable">
            <thead>
                <tr>
                    {header.map((x, idx) => <th key={idx}>{x}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((_, idx) => <tr key={idx}>
                    <td>{_.Id}</td>
                    <td>{_.Name}</td>
                    <td>{_.Country}</td>
                    <td>{_.City}</td>
                    <td>{_.Address}</td>
                    <td></td>
                </tr>)}
            </tbody>
        </table>
    );
}