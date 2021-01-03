import { useState } from "react";
import { Button } from "./Button";

export function FilterPopup(props) {

    const { visible, filterColumn, filterValue, isFiltered, onConfirm, onRemove } = props;

    const [value, setValue] = useState(filterValue);

    const handleFilterRemove = () => {
        onRemove();
        setValue('');
    }

    return (
        <div className={`filtermenu ${visible ? "" : "hidden"}`}>
            <div className="filtermenu-content">
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <div>
                    <>
                        <Button text="Ok" handleClick={() => onConfirm(filterColumn, value)} />
                        {(isFiltered && filterValue !== '') ? <Button text="RemoveFilter" handleClick={() => handleFilterRemove()} /> : ''}
                    </>
                </div>
            </div>
        </div >
    )
}