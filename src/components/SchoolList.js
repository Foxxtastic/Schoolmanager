import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { ConfirmPopup } from "./ConfirmPopup";
import { DataTable } from "./DataTable";

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

    const handleModify = (id) => {
        setEditor({
            isEditMode: true,
            rowKey: id
        })
    }

    const handleCancel = () => {
        setEditor({
            isEditMode: false,
            rowKey: null
        })
    }

    const onSubmit = (id, formData) => {
        onUpdate(id, formData)
            .then(() => {
                setEditor({
                    isEditMode: false,
                    rowKey: null
                });
                afterUpdate();
            })
    }

    const handleModalShown = (id) => {
        setIsModalVisible(true);
        setActiveIdForDelete(id);
    }

    const handleModalConfirm = () => {
        onDelete(activeIdForDelete);
        setIsModalVisible(false);
    }

    const handleModalCancel = () => {
        setActiveIdForDelete(null);
        setIsModalVisible(false);
    }

    return (
        <div className={`component ${isLoading ? "loading" : ""}`} >
            <ConfirmPopup text={"Are you sure?"} visible={isModalVisible} onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
            <DataTable classtype="component-data"
                headers={labels}
                items={items}
                getRowForItem={(item, idx) => (
                    <tr key={idx}>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <input name="eduId" defaultValue={item.EduId} ref={register({ required: true })} /> :
                                <span>{item.EduId}</span>}
                        </td>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <input name="name" defaultValue={item.Name} ref={register({ required: true })} /> :
                                <span>{item.Name}</span>}
                        </td>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <input name="country" defaultValue={item.Country} ref={register({ required: true })} /> :
                                <span>{item.Country}</span>}
                        </td>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <input name="city" defaultValue={item.City} ref={register({ required: true })} /> :
                                <span>{item.City}</span>}
                        </td>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <input name="address" defaultValue={item.Address
                                } ref={register({ required: true })} /> :
                                <span>{item.Address}</span>}
                        </td>
                        <td>
                            {(editor.isEditMode && editor.rowKey === item.Id) ?
                                <>
                                    <Button disabled={isLoading} text="Ok" handleClick={handleSubmit((formData) => onSubmit(item.Id, formData))} />
                                    <Button disabled={isLoading} text="Cancel" handleClick={() => handleCancel()} />
                                </> :
                                <>
                                    <Button disabled={isLoading} text="Modify" handleClick={() => handleModify(item.Id)} />
                                    <Button disabled={isLoading} text="Delete" handleClick={() => handleModalShown(item.Id)} />
                                </>}
                        </td>
                    </tr>
                )}
            />
            <div className="footer">
                <Link to={linkToCreate}>
                    <Button text="Create" />
                </Link>
            </div>
        </ div>
    );
}