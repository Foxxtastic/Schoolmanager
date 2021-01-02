import { Loader } from './Loader';
import { Pager } from './Pager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDownAlt } from '@fortawesome/free-solid-svg-icons'

export function DataTable(props) {

    const { isLoading, headers, items, getRowForItem, activePageNumber, maxPageNumber, sortingProperty, isDescending } = props;

    const isSortedHeader = (header) => {
        return header.propertyName && header.propertyName === sortingProperty;
    }

    const getSortButton = (header) => {
        if (!isSortedHeader(header)) {
            return null;
        }

        return isDescending ?
            <FontAwesomeIcon icon={faSortAlphaDownAlt} /> :
            <FontAwesomeIcon icon={faSortAlphaUp} />;
    }

    return (
        <>
            <div className="component-data">
                <div className="datatable">
                    <Loader isLoading={isLoading} />

                    <table>
                        <thead>
                            <tr>
                                {headers.map((header, idx) =>
                                    <th key={idx}>
                                        <a href={`?sorting=${header.propertyName}&direction=${isDescending ? 'asc' : 'desc'}`}>{header.text}</a>
                                        {header.isSortable && getSortButton(header)}
                                    </th>
                                )}
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