import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { pageSize } from '../../config';
import { Button } from "../shared/Button";
import { ConfirmPopup } from "../shared/ConfirmPopup";
import { DataTable } from "../shared/DataTable";
import { ValidationErrors } from "../shared/ValidationErrors";
import { usePageNumber } from '../../hooks/usePageNumber';
import { useSorting } from "../../hooks/useSorting";
import { useSortingDirection } from "../../hooks/useSortingDirection";
import { useFilterProperty } from "../../hooks/useFilterProperty";
import { useFilterValue } from "../../hooks/useFilterValue";
import { updateSearch } from '../../helpers/updateSearch';
import moment from "moment";
import { faCheck, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "../shared/DatePicker";
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
    { text: "Start Date", propertyName: 'StartDate', isSortable: true },
    { text: "Active Status", propertyName: 'ActiveStatus', isSortable: true },
    { text: "", isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function StudentList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [students, setStudents] = useState(undefined);
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

    const { error, afterUpdate, afterDelete, afterPaging, linkToCreate, onUpdate, onDelete, isLoading, getAllSchools, afterSelectSchool } = props;

    const setStudentsFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setStudents(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setStudents(listResponse.items);
            setMaxPageNumber(maxPage);
        });
    }, [activePageNumber, afterPaging, sortingProperty, isDescending, filterProperty, filterValue, schoolId]);

    useEffect(() => {
        getAllSchools().then(listResponse => setSchools([{ Id: '', Name: 'All' }].concat(listResponse.items)));
    }, [getAllSchools]);

    useEffect(() => {
        afterSelectSchool(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue, schoolId)
            .then(setStudentsFromServer);
    }, [schoolId, activePageNumber, afterSelectSchool, filterProperty, filterValue, isDescending, sortingProperty]);

    const openEditor = (id) => {
        setEditor({
            isEditMode: true,
            rowKey: id
        })
    }

    const closeEditor = () => {
        setEditor({
            isEditMode: false,
            rowKey: null
        })
    }

    const fireAfterUpdateEvent = () => {
        if (afterUpdate !== undefined) {
            afterUpdate(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue)
                .then(setStudentsFromServer);
        }
    }

    const onSubmit = (id, formData) => {
        const closeEditorAfterUpdate = () => {
            closeEditor();
            fireAfterUpdateEvent();
        }

        if (onUpdate === undefined) {
            closeEditorAfterUpdate();
        }

        onUpdate(id, formData)
            .then(() => {
                closeEditorAfterUpdate();
            });
    }

    const handleDeleteModalShown = (id) => {
        setIsModalVisible(true);
        setActiveIdForDelete(id);
    }

    const handleDeleteModalConfirm = () => {
        onDelete(activeIdForDelete)
            .then(() => afterDelete(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setStudentsFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    const handleSelectSchool = (schoolId) => {
        setSchoolId(schoolId)
    }

    if (students === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <LayoutContent>
                {schools &&
                    <DropDown
                        dropDownList={schools}
                        label="Students of"
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
                    items={students}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowForItem={(student) => {
                        const isEditing = editor.isEditMode && editor.rowKey === student.Id;
                        return (
                            <>
                                <td>
                                    {isEditing ?
                                        <>
                                            <input name="FirstName" defaultValue={student.FirstName} ref={register({ required: true })} />
                                            <ValidationErrors name="FirstName" errors={errors} />
                                        </> :
                                        <span>{student.FirstName}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <input name="LastName" defaultValue={student.LastName} ref={register({ required: true })} />
                                            <ValidationErrors name="LastName" errors={errors} />
                                        </> :
                                        <span>{student.LastName}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <DatePicker name="BirthDate" defaultValue={moment(student.BirthDate).format("YYYY-MM-DD")} ref={register({ required: true })} />
                                            <ValidationErrors name="BirthDate" errors={errors} />
                                        </> :
                                        <span>{moment(student.BirthDate).format("YYYY-MM-DD")}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <input name="Nationality" defaultValue={student.Nationality} ref={register({ required: true })} />
                                            <ValidationErrors name="Nationality" errors={errors} />
                                        </> :
                                        <span>{student.Nationality}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <input name="SecondNationality" defaultValue={student.SecondNationality} ref={register({ required: false })} /> :
                                        <span>{student.SecondNationality}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <input name="City" defaultValue={student.City} ref={register({ required: false })} /> :
                                        <span>{student.City}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <input name="Address" defaultValue={student.Address} ref={register({ required: false })} /> :
                                        <span>{student.Address}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <DatePicker name="StartDate" defaultValue={moment(student.StartDate).format("YYYY-MM-DD")} ref={register({ required: true })} />
                                            <ValidationErrors name="StartDate" errors={errors} />
                                        </> :
                                        <span>{moment(student.StartDate).format("YYYY-MM-DD")}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <input type="checkbox" name="ActiveStatus" defaultChecked={student.ActiveStatus} ref={register({ required: false })} /> :
                                        <span>{(student.ActiveStatus === true) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimesCircle} />}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(student.Id, formData))} />
                                            <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                        </> :
                                        <>
                                            <Button disabled={isLoading} text="Edit" handleClick={() => openEditor(student.Id)} />
                                            <Button disabled={isLoading} isRed={true} text="Delete" handleClick={() => handleDeleteModalShown(student.Id)} />
                                        </>}
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