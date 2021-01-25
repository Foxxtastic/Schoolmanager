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
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "../shared/DatePicker";

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

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [teachers, setTeachers] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);
    const [hoverOnIcon, setHoveronIcon] = useState(null);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'FirstName' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'FirstName' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { error, afterUpdate, afterDelete, afterPaging, linkToCreate, onUpdate, onDelete, isLoading } = props;

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
                .then(setTeachersFromServer);
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
            .then(setTeachersFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    if (teachers === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
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
                getRowForItem={(teacher, idx) => {
                    const isEditing = editor.isEditMode && editor.rowKey === teacher.Id;
                    return (
                        <tr key={idx}>
                            {error && error.rowidx === teacher.Id &&
                                <td className="error">
                                    <FontAwesomeIcon
                                        className="tx-lred"
                                        icon={faExclamationTriangle}
                                        onMouseEnter={() => setHoveronIcon(error.rowidx)}
                                        onMouseLeave={() => setHoveronIcon(null)}
                                    />
                                    {hoverOnIcon === error.rowidx && <div className="tooltip">{error.message}</div>}
                                </td>}
                            {error && error.rowidx !== teacher.Id &&
                                <td className="error"></td>}
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="FirstName" defaultValue={teacher.FirstName} ref={register({ required: true })} />
                                        <ValidationErrors name="FirstName" errors={errors} />
                                    </> :
                                    <span>{teacher.FirstName}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="LastName" defaultValue={teacher.LastName} ref={register({ required: true })} />
                                        <ValidationErrors name="LastName" errors={errors} />
                                    </> :
                                    <span>{teacher.LastName}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <DatePicker name="BirthDate" defaultValue={moment(teacher.BirthDate).format("YYYY-MM-DD")} ref={register({ required: true })} />
                                        <ValidationErrors name="BirthDate" errors={errors} />
                                    </> :
                                    <span>{moment(teacher.BirthDate).format("YYYY-MM-DD")}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="Nationality" defaultValue={teacher.Nationality} ref={register({ required: true })} />
                                        <ValidationErrors name="Nationality" errors={errors} />
                                    </> :
                                    <span>{teacher.Nationality}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="SecondNationality" defaultValue={teacher.SecondNationality} ref={register({ required: false })} />
                                    </> :
                                    <span>{teacher.SecondNationality}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="City" defaultValue={teacher.City} ref={register({ required: false })} />
                                    </> :
                                    <span>{teacher.City}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="Address" defaultValue={teacher.Address} ref={register({ required: false })} />
                                    </> :
                                    <span>{teacher.Address}</span>}
                            </td>
                            <td>
                                <span>{teacher.majors.map(_ => _.MajorName).join(', ')}</span>
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(teacher.Id, formData))} />
                                        <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                    </> :
                                    <>
                                        <Button disabled={isLoading} text="Edit" handleClick={() => openEditor(teacher.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(teacher.Id)} />
                                    </>}
                            </td>
                        </tr>
                    );
                }}
            />
            <div className="footer">
                <Link to={linkToCreate}>
                    <Button customClass="button-withoutmargin" text="Create" />
                </Link>
            </div>
        </ div>
    );
}