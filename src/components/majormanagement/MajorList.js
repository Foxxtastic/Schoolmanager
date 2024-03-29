import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import { LayoutContent } from "../shared/LayoutContent";

const headers = [
    { text: "Name", propertyName: 'Name', isSortable: true },
    { text: "", isSortable: false },
];

function calculateMaxPage(listResponse) {
    return Math.ceil(listResponse.allItemsCount / pageSize);
}

export function MajorList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });

    let activePageNumber = usePageNumber();
    activePageNumber = activePageNumber === null ? 1 : activePageNumber;

    const [majors, setMajors] = useState(undefined);
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

    const setmajorsFromServer = (listResponse) => {
        setMaxPageNumber(calculateMaxPage(listResponse));
        setMajors(listResponse.items);
    }

    useEffect(() => {
        afterPaging(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue).then(listResponse => {
            const maxPage = calculateMaxPage(listResponse);
            if (listResponse.allItemsCount <= (activePageNumber - 1) * pageSize) {
                updateSearch({ page: maxPage });
                return;
            }
            setMajors(listResponse.items);
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
                .then(setmajorsFromServer);
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
            .then(setmajorsFromServer);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    const handleCreate = (data) => {
        return onCreate(data)
            .then(() => afterCreate(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue))
            .then(setmajorsFromServer);
    }

    if (majors === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <LayoutContent>
                <DataTable
                    isInEditMode={editor.isEditMode}
                    isInlineCreate={true}
                    onCreate={handleCreate}
                    error={error}
                    isLoading={isLoading}
                    headers={headers}
                    sortingProperty={sortingProperty}
                    isDescending={isDescending}
                    filterProperty={filterProperty}
                    filterValue={filterValue}
                    items={majors}
                    activePageNumber={activePageNumber}
                    maxPageNumber={maxPageNumber}
                    getRowId={major => major.Id}
                    getCreateRowColumns={({ register, errors }) =>
                        <>
                            <td>
                                <input type="text" name="Name" ref={register({ required: true })} />
                                <ValidationErrors name="Name" errors={errors} />
                            </td>
                        </>
                    }
                    getRowForItem={(major, idx, isInCreateMode) => {
                        const isEditing = editor.isEditMode && editor.rowKey === major.Id;

                        return (
                            <>
                                <td>
                                    {isEditing ?
                                        <>
                                            <input name="Name" defaultValue={major.Name} ref={register({ required: true })} />
                                            <ValidationErrors name="Name" errors={errors} />
                                        </> :
                                        <span>{major.Name}</span>}
                                </td>
                                <td>
                                    {isEditing ?
                                        <>
                                            <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(major.Id, formData))} />
                                            <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                        </> :
                                        <>
                                            <Button disabled={isLoading || isInCreateMode} text="Edit" handleClick={() => openEditor(major.Id)} />
                                            <Button disabled={isLoading || isInCreateMode} isRed={true} text="Delete" handleClick={() => handleDeleteModalShown(major.Id)} />
                                        </>}
                                </td>
                            </>
                        );
                    }}
                />
            </LayoutContent>
        </ div>
    );
}