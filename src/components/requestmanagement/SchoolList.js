import { useState, useEffect } from "react";
import { pageSize } from '../../config';
import { Button } from "../shared/Button";
import { DataTable } from "../shared/DataTable";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import { LayoutContent } from "../shared/LayoutContent";
import { Link } from "react-router-dom";

const headers = [
    { text: "Educational Id", propertyName: 'EduId', isSortable: true },
    { text: "Name", propertyName: 'Name', isSortable: true },
    { text: "Country", propertyName: 'Country', isSortable: true },
    { text: "City", propertyName: 'City', isSortable: true },
    { text: "Address", propertyName: 'Address', isSortable: true },
    { text: "", isSortable: false },
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function SchoolList(props) {

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [schools, setSchools] = useState(undefined);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'EduId' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'EduId' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterPaging, isLoading } = props;

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setSchools(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue]);

    if (schools === undefined) {
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
                    items={schools}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowForItem={(school, idx) => {
                        return (
                            <tr key={idx}>
                                <td>
                                    <span>{school.EduId}</span>
                                </td>
                                <td>
                                    <span>{school.Name}</span>
                                </td>
                                <td>
                                    <span>{school.Country}</span>
                                </td>
                                <td>
                                    <span>{school.City}</span>
                                </td>
                                <td>
                                    <span>{school.Address}</span>
                                </td>
                                <td>
                                    <Link to={`/apply/${school.Id}`} >
                                        <Button text="Apply" />
                                    </Link>
                                </td>
                            </tr>
                        );
                    }}
                />
            </LayoutContent>
        </ div>
    );
}