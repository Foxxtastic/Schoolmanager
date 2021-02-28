import { Loader } from '../Loader';
import { Pager } from '../Pager';
import { Header } from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDownAlt, faSearch, faAngleRight, faAngleLeft, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
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
        onCreate,
        getRowId
    } = props;

    const [openFilter, setOpenFilter] = useState(undefined);
    const [showCreateRow, setShowCreateRow] = useState(false);
    const [rowTooltip, setRowTooltip] = useState(null);

    const hasErrorDisplayedInRow = error !== undefined;

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
                        <tr className="datatable-footer bg-bgray">
                            <td colSpan={headers.length + (hasErrorDisplayedInRow ? 1 : 0)}>
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

                        {items.map((item, idx) => (<tr key={idx}>
                            {hasErrorDisplayedInRow &&
                                <td className="error">
                                    {error.rowidx === getRowId(item) &&
                                        <>
                                            <FontAwesomeIcon
                                                className="tx-lred"
                                                icon={faExclamationTriangle}
                                                onMouseEnter={() => setRowTooltip(error.message)}
                                                onMouseLeave={() => setRowTooltip(null)}
                                            />
                                            <div className={`tooltip ${rowTooltip !== null && 'visible'}`}>{rowTooltip}</div>
                                        </>}
                                </td>}
                            {getRowForItem(item, idx, showCreateRow)}
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}