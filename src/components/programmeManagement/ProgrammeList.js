import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pageSize } from "../../config";
import { updateSearch } from "../../helpers/updateSearch";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { usePageNumber } from "../../hooks/usePageNumber";
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { Button } from "../shared/Button";
import { DataTable } from "../shared/DataTable";
import { LayoutContent } from "../shared/LayoutContent";

const headers = [
    { text: 'Name', propertyName: 'Name', isSortable: true },
    { text: 'Is active', propertyName: 'IsActive', isSortable: true },
    { text: 'Managed by admin', propertyName: 'IsAdminManaged', isSortable: true },
    { text: 'Minimum Credit', propertyName: 'MinimumCredit', isSortable: true },
    { text: 'School ID', propertyName: 'SchoolId', isSortable: true },
    { text: '', isSortable: false }
]

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function ProgrammeList(props) {
    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;
    const [programmes, setProgrammes] = useState(undefined);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'Name' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'Name' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterCreate, afterPaging, onCreate, isLoading, linkToCreate } = props;

    const setProgrammesFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setProgrammes(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setProgrammes(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue]);

    if (programmes === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <LayoutContent>
                <DataTable
                    error={error}
                    isLoading={isLoading}
                    headers={headers}
                    sortingProperty={sortingProperty}
                    isDescending={isDescending}
                    filterProperty={filterProperty}
                    filterValue={filterValue}
                    items={programmes}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowForItem={(programme) => {
                        return (
                            <>
                                <td>
                                    <span>{programme.Name}</span>
                                </td>
                                <td>
                                    <span>{programme.IsActive}</span>
                                </td>
                                <td>
                                    <span>{programme.IsAdminManaged}</span>
                                </td>
                                <td>
                                    <span>{programme.MinCredit}</span>
                                </td>
                                <td>
                                    <span>{programme.SchoolId}</span>
                                </td>
                                <td>
                                    <>
                                        <Link to={`/programmes/${programme.Id}/update`} >
                                            <Button text="Edit" />
                                        </Link>
                                    </>
                                </td>
                            </>
                        );
                    }}
                />
            </LayoutContent>
            <div className="footer">
                <Link to={linkToCreate}>
                    <Button customClass="button-withoutmargin" text="Create" />
                </Link>
            </div>
        </ div>
    )
}