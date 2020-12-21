export function DataTable(props) {

    const { headers, items, getRowForItem } = props;

    return (
        <table className="datatable">
            <thead>
                <tr>
                    {headers.map((x, idx) => <th key={idx}>{x}</th>)}
                </tr>
            </thead>
            <tbody>
                {items.map((item, idx) => getRowForItem(item, idx))}
            </tbody>
        </table>
    );
}