import { useState } from "react";
import { Button } from "../Button";

export function CreateRow(props) {

    const { isLoading, customClass, items, onCreate, onClose } = props;

    const [data, setData] = useState(undefined);

    const handleDataChange = (key, value) => {
        let result = data ? data : {};
        result[key] = value;
        setData(result);
    }

    const handleSubmit = () => {
        if (data !== undefined) {
            onCreate(data);
            onClose();
        }
    }

    return (
        <tr className={customClass}>
            {items.map((item, idx) =>
                <td key={idx}>
                    <input type={item.type} name={item.name} onChange={(e) => handleDataChange(item.name, e.target.value)} />
                </td>)}
            <td>
                <Button text="Create" handleClick={() => handleSubmit()} disabled={isLoading} />
                <Button text="Cancel" handleClick={onClose} />
            </td>
        </tr >
    )
}