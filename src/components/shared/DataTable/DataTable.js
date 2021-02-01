import { Loader } from '../Loader';
import { Pager } from '../Pager';
import { Header } from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDownAlt, faSearch, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { updateSearch } from '../../../helpers/updateSearch'
import { useState } from 'react';
import { CreateRow } from './CreateRow';
import { Button } from '../Button';

export function DataTable(props) {

    const {
        isInEditMode,
        error,
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
        isInlineCreate,
        createRow,
        getCreateRowColumns,
        onCreate
    } = props;

    const [openFilter, setOpenFilter] = useState(undefined);
    const [showCreateRow, setShowCreateRow] = useState(false);

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

    const handlePageSwitch = (increment) => {
        if ((activePageNumber === 1 && increment < 0) || (activePageNumber === maxPageNumber && increment > 0)) {
            return
        }
        updateSearch({ page: activePageNumber + increment });
    }

    return (
        <>
            <div className="component-data">
                <div className="datatable">
                    {isInlineCreate && <Button customClass="createbutton" text="Create new" disabled={showCreateRow || isInEditMode} handleClick={() => setShowCreateRow(true)} />}
                    <div className="datatable-content">
                        <Loader isLoading={isLoading} />
                        <table>
                            <Header
                                error={error}
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
                                    <td colSpan={headers.length + ((error !== undefined) ? 1 : 0)}>
                                        <span>Page: </span>
                                        <FontAwesomeIcon className="icon-wpointer pagerspacing" icon={faAngleLeft} onClick={() => handlePageSwitch(-1)} />
                                        <Pager activePageNumber={activePageNumber} maxPageNumber={maxPageNumber} />
                                        <FontAwesomeIcon className="icon-wpointer pagerspacing" icon={faAngleRight} onClick={() => handlePageSwitch(1)} />
                                    </td>
                                </tr>
                            </tfoot>
                            <tbody>
                                {showCreateRow &&
                                    <CreateRow
                                        getColumns={getCreateRowColumns}
                                        isLoading={isLoading}
                                        customClass={showCreateRow ? "" : "hidden"}
                                        items={createRow}
                                        onCreate={onCreate}
                                        onClose={() => setShowCreateRow(false)}
                                    />}
                                {items.map((item, idx) => getRowForItem(item, idx, showCreateRow))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}