import { Loader } from './Loader';

export function DataTable(props) {

    const { isLoading, headers, items, getRowForItem } = props;

    return (
        <>
            <div className="component-data">
                <div className="datatable">
                    <Loader isLoading={isLoading} />

                    <table>
                        <thead>
                            <tr>
                                {headers.map((headerText, idx) => <th key={idx}>{headerText}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, idx) => getRowForItem(item, idx))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}