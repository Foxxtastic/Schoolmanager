import { useForm } from "react-hook-form";
import { Button } from "../Button";

export function CreateRow(props) {

    const { getColumns, isLoading, customClass, onCreate, onClose } = props;
    const form = useForm();
    const { handleSubmit } = form;

    const onSubmit = (formData) => {
        onCreate(formData)
            .then(() => onClose());
    }

    return (
        <tr className={customClass}>
            {getColumns(form)}
            <td>
                <Button text="Create" handleClick={handleSubmit(onSubmit)} disabled={isLoading} />
                <Button text="Cancel" handleClick={onClose} />
            </td>
        </tr >
    )
}