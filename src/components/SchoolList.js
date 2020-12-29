import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { DataTable } from "./DataTable";

const labels = ["EduId", "Name", "Country", "City", "Address", ""]

export function SchoolList(props) {

    const { register, handleSubmit, errors } = useForm();
    const [editor, setEditor] = useState({
        isEditMode: false,
        rowKey: null
    });
    const { afterUpdate, items, linkToCreate, onUpdate, onDelete } = props;

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

    return (
        <div className="component">
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
                                    <Button text="Ok" handleClick={handleSubmit((formData) => onSubmit(item.Id, formData))} />
                                    <Button text="Cancel" handleClick={() => handleCancel()} />
                                </> :
                                <>
                                    <Button text="Modify" handleClick={() => handleModify(item.Id)} />
                                    <Button text="Delete" handleClick={() => onDelete(item.Id)} />
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
        </div>
    );
}