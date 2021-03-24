import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pageSize } from '../../config';
import { Button } from "../shared/Button";
import { ConfirmPopup } from "../shared/ConfirmPopup";
import { DataTable } from "../shared/DataTable";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import moment from "moment";
import { LayoutContent } from "../shared/LayoutContent";
import { DropDown } from "../shared/DropDown";

const headers = [
    { text: "First Name", propertyName: 'FirstName', isSortable: true },
    { text: "Last Name", propertyName: 'LastName', isSortable: true },
    { text: "Birth Date", propertyName: 'BirthDate', isSortable: true },
    { text: "Nationality", propertyName: 'Nationality', isSortable: true },
    { text: "Second Nationality", propertyName: 'SecondNationality', isSortable: true },
    { text: "City", propertyName: 'City', isSortable: true },
    { text: "Address", propertyName: 'Address', isSortable: true },
    { text: "Majors", isSortable: false },
    { text: "", isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function TeacherList(props) {

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [teachers, setTeachers] = useState(undefined);
    const [schools, setSchools] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);
    const [schoolId, setSchoolId] = useState(null);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'FirstName' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'FirstName' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterDelete, afterPaging, linkToCreate, onDelete, isLoading, getAllSchools, afterSelectSchool } = props;

    const setTeachersFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setTeachers(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setTeachers(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue]);

    useEffect(() => {
        getAllSchools().then(listResponse => setSchools([{ Id: '', Name: 'All' }].concat(listResponse.items)));
    }, [getAllSchools]);

    useEffect(() => {
        afterSelectSchool(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId)
            .then(setTeachersFromServer);
    }, [schoolId, activePageNumber, afterSelectSchool, filterProperty, filterValue, isDescending, sortingProperty]);

    const handleDeleteModalShown = (id) => {
        setIsModalVisible(true);
        setActiveIdForDelete(id);
    }

    const handleDeleteModalConfirm = () => {
        onDelete(activeIdForDelete)
            .then(() => afterDelete(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setTeachersFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    const handleSelectSchool = (schoolId) => {
        setSchoolId(schoolId);
    }

    if (teachers === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <LayoutContent>
                {schools &&
                    <DropDown
                        dropDownList={schools}
                        label="Teachers of"
                        defaultValue={undefined}
                        defaultLabel="All"
                        onSelect={handleSelectSchool}
                    />}
                <DataTable
                    error={error}
                    isLoading={isLoading}
                    headers={headers}
                    sortingProperty={sortingProperty}
                    isDescending={isDescending}
                    filterProperty={filterProperty}
                    filterValue={filterValue}
                    items={teachers}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowId={teacher => teacher.Id}
                    getRowForItem={(teacher) => {
                        return (
                            <>
                                <td>
                                    <span>{teacher.FirstName}</span>
                                </td>
                                <td>
                                    <span>{teacher.LastName}</span>
                                </td>
                                <td>
                                    <span>{moment(teacher.BirthDate).format("YYYY-MM-DD")}</span>
                                </td>
                                <td>
                                    <span>{teacher.Nationality}</span>
                                </td>
                                <td>
                                    <span>{teacher.SecondNationality}</span>
                                </td>
                                <td>
                                    <span>{teacher.City}</span>
                                </td>
                                <td>
                                    <span>{teacher.Address}</span>
                                </td>
                                <td>
                                    {teacher.Majors !== undefined && <span>{teacher.Majors.map(_ => _.MajorName).join(', ')}</span>}
                                </td>
                                <td>
                                    <>
                                        <Link to={`/teachers/${teacher.Id}/update`} >
                                            <Button text="Edit" />
                                        </Link>
                                        <Button disabled={isLoading} isRed={true} text="Delete" handleClick={() => handleDeleteModalShown(teacher.Id)} />
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
    );
}