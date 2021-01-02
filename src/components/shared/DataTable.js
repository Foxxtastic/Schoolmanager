import { Loader } from './Loader';
import { Pager } from './Pager';

export function DataTable(props) {

    const { isLoading, headers, items, getRowForItem, activePageNumber, maxPageNumber } = props;

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
                <div>
                    <Pager activePageNumber={activePageNumber} maxPageNumber={maxPageNumber} />
                </div>
            </div>
        </>
    );
}