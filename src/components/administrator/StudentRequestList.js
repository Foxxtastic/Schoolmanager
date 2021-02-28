import { useState, useEffect } from "react";
//import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
import { pageSize } from '../../config';
import { Button } from "../shared/Button";
import { DataTable } from "../shared/DataTable";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import moment from "moment";
import { faCheck, /*faExclamationTriangle,*/ faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LayoutContent } from "../shared/LayoutContent";
import { useSchoolId } from "../../hooks/useSchoolId";

const headers = [
    { text: "First Name", propertyName: 'FirstName', isSortable: true },
    { text: "Last Name", propertyName: 'LastName', isSortable: true },
    { text: "Birth Date", propertyName: 'BirthDate', isSortable: true },
    { text: "Nationality", propertyName: 'Nationality', isSortable: true },
    { text: "City", propertyName: 'City', isSortable: true },
    { text: "Message", propertyName: 'Message', isSortable: true },
    { text: "Aproval", propertyName: 'AprovalRequest', isSortable: true },
    { text: "Completed", propertyName: 'IsCompleted', isSortable: true },
    { text: "", isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function StudentRequestList(props) {

    //const { register, handleSubmit, errors } = useForm();

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [requests, setRequests] = useState(undefined);
    //const [isModalVisible, setIsModalVisible] = useState(false);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'FirstName' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'FirstName' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    let schoolId = useSchoolId();

    const { error, /*afterUpdate, afterDelete,*/ afterPaging,/* linkToCreate, onUpdate, onDelete,*/ isLoading, /*getAllSchools, afterSelectSchool*/ } = props;

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setRequests(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue, schoolId]);

    if (requests === undefined) {
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
                    items={requests}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowForItem={(request) => {
                        return (
                            <>
                                <td>
                                    <span>{request.FirstName}</span>
                                </td>
                                <td>
                                    <span>{request.LastName}</span>
                                </td>
                                <td>
                                    <span>{moment(request.BirthDate).format("YYYY-MM-DD")}</span>
                                </td>
                                <td>
                                    <span>{request.Nationality}</span>
                                </td>
                                <td>
                                    <span>{request.City}</span>
                                </td>
                                <td>
                                    <span>{request.Message}</span>
                                </td>
                                <td>
                                    <span>{(request.AprovalRequest === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />}</span>
                                </td>
                                <td>
                                    <span>{(request.IsCompleted === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />}</span>
                                </td>
                                <td>
                                    <>
                                        <Button disabled={isLoading} text="Aprove" />
                                        <Button disabled={isLoading} isRed={true} text="Reject" />
                                    </>
                                </td>
                            </>
                        );
                    }}
                />
            </LayoutContent>
        </ div>
    );
}