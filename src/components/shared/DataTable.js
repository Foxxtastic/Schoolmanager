import { Loader } from './Loader';
import { Pager } from './Pager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDownAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FilterPopup } from './FilterPopup';
import { updateSearch } from '../../helpers/updateSearch'
import { useState } from 'react';

export function DataTable(props) {

    const {
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
            <FontAwesomeIcon icon={faSortAlphaDownAlt} /> :
            <FontAwesomeIcon icon={faSortAlphaUp} />;
    }

    const getFilterButton = (propertyName) => {
        return <FontAwesomeIcon icon={faSearch} onClick={() => handleFilterIconClick(propertyName)} />
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
                        <thead>
                            <tr>
                                {headers.map((header, idx) =>
                                    <th key={idx}>
                                        <a href={`?sorting=${header.propertyName}&direction=${isDescending ? 'asc' : 'desc'}`}>{header.text}</a>
                                        {header.isSortable && getSortButton(header)}
                                        {header.isSortable && getFilterButton(header.propertyName)}
                                        <FilterPopup
                                            visible={(header.propertyName === openFilter && openFilter) ||
                                                (header.propertyName === filterProperty && filterValue !== '')}
                                            filterColumn={header.propertyName}
                                            filterValue={filterValue}
                                            isFiltered={filterProperty === header.propertyName}
                                            onConfirm={handleFilterChange}
                                            onRemove={handleFilterRemove}
                                        />
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