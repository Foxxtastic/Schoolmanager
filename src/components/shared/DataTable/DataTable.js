import { Loader } from '../Loader';
import { Pager } from '../Pager';
import { Header } from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDownAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { updateSearch } from '../../../helpers/updateSearch'
import { useState } from 'react';

export function DataTable(props) {

    const {
        errorMessage,
        isLoading,
        headers,
        items,
        getRowForItem,
        activePageNumber,
        maxPageNumber,
        sortingProperty,
        isDescending,
        filterProperty,
        filterValue,
    } = props;

    const [openFilter, setOpenFilter] = useState(undefined);

    const isSortedHeader = (header) => {
        return header.propertyName && header.propertyName === sortingProperty;
    }

    const getSortButton = (header) => {
        if (!isSortedHeader(header)) {
            return null;
        }

        return isDescending ?
            <FontAwesomeIcon className="tx-yellow icon" icon={faSortAlphaDownAlt} /> :
            <FontAwesomeIcon className="tx-yellow icon" icon={faSortAlphaUp} />;
    }

    const getFilterButton = (propertyName) => {
        return <FontAwesomeIcon className="icon-wpointer" icon={faSearch} onClick={() => handleFilterIconClick(propertyName)} />
    }

    const handleFilterIconClick = (propertyName) => {
        if (openFilter === propertyName) {
            setOpenFilter(undefined);
            return;
        }
        setOpenFilter(propertyName);
    }

    const handleFilterChange = (filterProperty, filterValue) => {
        updateSearch({ filterProperty, filterValue });
    }

    const handleFilterRemove = () => {
        updateSearch({ filterProperty: null, filterValue: null });
        setOpenFilter(undefined);
    }

    return (
        <>
            <div className="component-data">
                <div className="datatable">
                    <Loader isLoading={isLoading} />
                    <table>
                        <Header
                            errorMessage={errorMessage}
                            headers={headers}
                            filterProperty={filterProperty}
                            filterValue={filterValue}
                            isDescending={isDescending}
                            openFilter={openFilter}
                            getSortButton={getSortButton}
                            getFilterButton={getFilterButton}
                            handleFilterChange={handleFilterChange}
                            handleFilterRemove={handleFilterRemove}
                        />
                        <tfoot>
                            <tr className="datatable-footer bg-lturquoise">
                                <td colSpan={headers.length + ((errorMessage !== undefined) ? 1 : 0)}>
                                    <span>Page: </span>
                                    <Pager activePageNumber={activePageNumber} maxPageNumber={maxPageNumber} />
                                </td>
                            </tr>
                        </tfoot>
                        <tbody>
                            {items.map((item, idx) => getRowForItem(item, idx))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}