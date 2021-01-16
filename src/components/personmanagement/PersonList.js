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
    { text: "FirstName", propertyName: 'FirstName', isSortable: true },
    { text: "LastName", propertyName: 'LastName', isSortable: true },
    { text: "BirthDate", propertyName: 'BirthDate', isSortable: true },
    { text: "Nationality", propertyName: 'Nationality', isSortable: true },
    { text: "SecondNationality", propertyName: 'SecondNationality', isSortable: true },
    { text: "City", isSortable: true },
    { text: "Address", isSortable: true },
    { text: "", isSortable: false }
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function PersonList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [persons, setPersons] = useState(undefined);
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

    const setPersonsFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setPersons(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setPersons(listResponse.items);
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
                .then(setPersonsFromServer);
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
            .then(setPersonsFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    if (persons === undefined) {
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
                items={persons}
                activePageNumber={activePageNumber}
                maxPageNumber={maxPageNumber}
                getRowForItem={(person, idx) => {
                    const isEditing = editor.isEditMode && editor.rowKey === person.Id;
                    return (
                        <tr key={idx}>
                            {error && error.rowidx === person.Id &&
                                <td className="error">
                                    <FontAwesomeIcon
                                        className="tx-lred"
                                        icon={faExclamationTriangle}
                                        onMouseEnter={() => setHoveronIcon(error.rowidx)}
                                        onMouseLeave={() => setHoveronIcon(null)}
                                    />
                                    {hoverOnIcon === error.rowidx && <div className="tooltip">{error.message}</div>}
                                </td>}
                            {error && error.rowidx !== person.Id &&
                                <td className="error"></td>}
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="FirstName" defaultValue={person.FirstName} ref={register({ required: true })} />
                                        <ValidationErrors name="FirstName" errors={errors} />
                                    </> :
                                    <span>{person.FirstName}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="LastName" defaultValue={person.LastName} ref={register({ required: true })} />
                                        <ValidationErrors name="LastName" errors={errors} />
                                    </> :
                                    <span>{person.LastName}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <DatePicker name="BirthDate" defaultValue={moment(person.BirthDate).format("YYYY-MM-DD")} ref={register({ required: true })} />
                                        <ValidationErrors name="BirthDate" errors={errors} />
                                    </> :
                                    <span>{moment(person.BirthDate).format("YYYY-MM-DD")}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="Nationality" defaultValue={person.Nationality} ref={register({ required: true })} />
                                        <ValidationErrors name="Nationality" errors={errors} />
                                    </> :
                                    <span>{person.Nationality}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="SecondNationality" defaultValue={person.SecondNationality} ref={register({ required: false })} />
                                    </> :
                                    <span>{person.SecondNationality}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="City" defaultValue={person.City} ref={register({ required: false })} />
                                    </> :
                                    <span>{person.City}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="Address" defaultValue={person.Address} ref={register({ required: false })} />
                                    </> :
                                    <span>{person.Address}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(person.Id, formData))} />
                                        <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                    </> :
                                    <>
                                        <Button disabled={isLoading} text="Edit" handleClick={() => openEditor(person.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(person.Id)} />
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