import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../shared/Button";
import { ConfirmPopup } from "../shared/ConfirmPopup";
import { DataTable } from "../shared/DataTable";
import { ValidationErrors } from "../shared/ValidationErrors";

const labels = ["EduId", "Name", "Country", "City", "Address", ""]

export function SchoolList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeIdForDelete, setActiveIdForDelete] = useState(null);
    const { afterUpdate, items, linkToCreate, onUpdate, onDelete, isLoading } = props;

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
            afterUpdate();
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
        onDelete(activeIdForDelete);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text="Are you sure?" visible={isModalVisible} onConfirm={handleDeleteModalConfirm} onCancel={handleModalCancel} />
            <DataTable
                isLoading={isLoading}
                headers={labels}
                items={items}
                getRowForItem={(item, idx) => {
                    const isEditing = editor.isEditMode && editor.rowKey === item.Id;

                    return (
                        <tr key={idx}>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="eduId" defaultValue={item.EduId} ref={register({ required: true })} />
                                        <ValidationErrors name="eduId" errors={errors} />
                                    </> :
                                    <span>{item.EduId}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="name" defaultValue={item.Name} ref={register({ required: true })} />
                                        <ValidationErrors name="name" errors={errors} />
                                    </> :
                                    <span>{item.Name}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="country" defaultValue={item.Country} ref={register({ required: true })} />
                                        <ValidationErrors name="country" errors={errors} />
                                    </> :
                                    <span>{item.Country}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="city" defaultValue={item.City} ref={register({ required: true })} />
                                        <ValidationErrors name="city" errors={errors} />
                                    </> :
                                    <span>{item.City}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <input name="address" defaultValue={item.Address} ref={register({ required: true })} />
                                        <ValidationErrors name="address" errors={errors} />
                                    </> :
                                    <span>{item.Address}</span>}
                            </td>
                            <td>
                                {isEditing ?
                                    <>
                                        <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(item.Id, formData))} />
                                        <Button disabled={isLoading} text="Cancel" handleClick={() => closeEditor()} />
                                    </> :
                                    <>
                                        <Button disabled={isLoading} text="Modify" handleClick={() => openEditor(item.Id)} />
                                        <Button disabled={isLoading} text="Delete" handleClick={() => handleDeleteModalShown(item.Id)} />
                                    </>}
                            </td>
                        </tr>
                    );
                }}
            />
            <div className="footer">
                <Link to={linkToCreate}>
                    <Button text="Create" />
                </Link>
            </div>
        </ div>
    );
}