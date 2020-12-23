export function DataTable(props) {

    const { classtype, headers, items, getRowForItem } = props;

    return (
        <table className={`datatable ${classtype}`} >
            <thead>
                <tr>
                    {headers.map((x, idx) => <th key={idx}>{x}</th>)}
                </tr>
            </thead>
            <tbody>
                {items.map((item, idx) => getRowForItem(item, idx))}
            </tbody>
        </table >
    );
}