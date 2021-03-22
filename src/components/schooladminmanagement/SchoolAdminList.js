import { useState, useEffect } from "react";
import { pageSize } from '../../config';
import { ConfirmPopup } from "../shared/ConfirmPopup";
import { DataTable } from "../shared/DataTable";
import { ValidationErrors } from "../shared/ValidationErrors";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import { LayoutContent } from "../shared/LayoutContent";
import { Button } from "../shared/Button";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatAsDate } from "../../helpers/momentHelpers";

const headers = [
    { text: 'Email address', propertyName: 'EmailAddress', isSortable: true },
    { text: 'Educational Id', propertyName: 'EduId', isSortable: true },
    { text: 'School Name', propertyName: 'Name', isSortable: true },
    { text: 'Country', propertyName: 'Country', isSortable: true },
    { text: 'Last login', propertyName: 'LastLogin', isSortable: true },
    { text: 'Active', propertyName: 'IsActive', isSortable: true },
    { text: '', isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function SchoolAdminList(props) {

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [schoolAdmins, setSchoolAdmins] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'Name' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'Name' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterUpdate, afterCreate, afterDelete, afterPaging, onUpdate, onDelete, onCreate, isLoading } = props;

    const setSchoolAdminsFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setSchoolAdmins(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setSchoolAdmins(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue]);

    const handleDeleteModalShown = (id) => {
        setIsModalVisible(true);
        setActiveIdForDelete(id);
    }

    const handleDeleteModalConfirm = () => {
        onDelete(activeIdForDelete)
            .then(() => afterDelete(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setSchoolAdminsFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    const handleCreate = (data) => {
        return onCreate(data)
            .then(() => afterCreate(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setSchoolAdminsFromServer);
    }

    if (schoolAdmins === undefined) {
        return 'Loading...';
    }

    console.log(schoolAdmins)

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <LayoutContent>
                <DataTable
                    onCreate={handleCreate}
                    error={error}
                    isLoading={isLoading}
                    headers={headers}
                    sortingProperty={sortingProperty}
                    isDescending={isDescending}
                    filterProperty={filterProperty}
                    filterValue={filterValue}
                    items={schoolAdmins}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getCreateRowColumns={({ register, errors }) =>
                        <>
                            <td>
                                <input type="text" name="Name" ref={register({ required: true })} />
                                <ValidationErrors name="Name" errors={errors} />
                            </td>
                        </>
                    }
                    getRowForItem={(admin) => {

                        return (
                            <>
                                <td>
                                    <span>{admin.EmailAddress}</span>
                                </td>
                                <td>
                                    <span>{admin.EduId}</span>
                                </td>
                                <td>
                                    <span>{admin.Name}</span>
                                </td>
                                <td>
                                    <span>{admin.Country}</span>
                                </td>
                                <td>
                                    <span>{(admin.LastLogin !== null) ? formatAsDate(admin.LastLogin).format("YYYY-MM-DD") : "Not Logged in yet."}</span>
                                </td>
                                <td>
                                    <span>{(admin.IsActive === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />}</span>
                                </td>
                                <td>
                                    <Button disabled={isLoading} isRed={true} text="Delete" handleClick={() => handleDeleteModalShown(admin.UserId)} />
                                </td>
                            </>
                        );
                    }}
                />
            </LayoutContent>
        </ div>
    );
}