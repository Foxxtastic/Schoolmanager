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
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const headers = [
    { text: "Name", propertyName: 'Name', isSortable: true },
    { text: "", isSortable: false },
];

const createRow = [
    { name: "Name", type: "text", required: true }
]

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
    const [hoverOnIcon, setHoveronIcon] = useState(null);

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
        onCreate(data);
        afterCreate(activePageNumber, sortingProperty, isDescending, filterProperty, filterValue)
            .then(setmajorsFromServer);
    }

    if (majors === undefined) {
        return 'Loading...';
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <DataTable
                isInlineCreate={true}
                onCreate={handleCreate}
                createRow={createRow}
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
                getRowForItem={(major, idx) => {
                    const isEditing = editor.isEditMode && editor.rowKey === major.Id;

                    return (
                        <tr key={idx}>
                            {error && error.rowidx === major.Id &&
                                <td className="error">
                                    <FontAwesomeIcon
                                        className="tx-lred"
                                        icon={faExclamationTriangle}
                                        onMouseEnter={() => setHoveronIcon(error.rowidx)}
                                        onMouseLeave={() => setHoveronIcon(null)}
                                    />
                                    {hoverOnIcon === error.rowidx && <div className="tooltip">{error.message}</div>}
                                </td>}
                            {error && error.rowidx !== major.Id &&
                                <td className="error"></td>}
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
                                        <Button disabled={isLoading} text="Edit" handleClick={() => openEditor(major.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(major.Id)} />
                                    </>}
                            </td>
                        </tr>
                    );
                }}
            />
        </ div>
    );
}