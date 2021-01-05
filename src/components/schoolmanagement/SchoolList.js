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

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [schools, setSchools] = useState(undefined);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const [maxPageNumber, setMaxPageNumber] = useState(undefined);

    let sortingProperty = useSorting();
    sortingProperty = sortingProperty === null ? 'EduId' : sortingProperty;
    const { isDescending } = useSortingDirection();

    let filterProperty = useFilterProperty();
    filterProperty = filterProperty === null ? 'EduId' : filterProperty;

    let filterValue = useFilterValue();
    filterValue = filterValue === null ? '' : filterValue;

    const { afterUpdate, afterDelete, afterPaging, linkToCreate, onUpdate, onDelete, isLoading } = props;

    const setSchoolsFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setSchools(listResponse.items);
    }

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
                .then(setSchoolsFromServer);
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
            .then(setSchoolsFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    if (schools === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <DataTable
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
                    const isEditing = editor.isEditMode && editor.rowKey === school.Id;

                    return (
                        <tr key={idx}>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="eduId" defaultValue={school.EduId} ref={register({ required: true })} />
                                        <ValidationErrors name="eduId" errors={errors} />
                                    </> :
                                    <span>{school.EduId}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="name" defaultValue={school.Name} ref={register({ required: true })} />
                                        <ValidationErrors name="name" errors={errors} />
                                    </> :
                                    <span>{school.Name}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="country" defaultValue={school.Country} ref={register({ required: true })} />
                                        <ValidationErrors name="country" errors={errors} />
                                    </> :
                                    <span>{school.Country}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="city" defaultValue={school.City} ref={register({ required: true })} />
                                        <ValidationErrors name="city" errors={errors} />
                                    </> :
                                    <span>{school.City}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="address" defaultValue={school.Address} ref={register({ required: true })} />
                                        <ValidationErrors name="address" errors={errors} />
                                    </> :
                                    <span>{school.Address}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(school.Id, formData))} />
                                        <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                    </> :
                                    <>
                                        <Button disabled={isLoading} text="Modify" handleClick={() => openEditor(school.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(school.Id)} />
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