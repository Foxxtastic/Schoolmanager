import { Item } from "../customcomponents/Item";

export function MultiSelector(props) {

    const { defaultValue, name, optionList, selectedItems, isInline, labelClass, labelText, handleSelectItem, handleRemoveItem } = props

    const handleSelectionChange = (value) => {
        if (optionList.includes(value)) {
            handleSelectItem(value);
            value = "";
        }
    }

    return (
        <div className={`${isInline ? "item-padding inline-block" : "item-padding"}`}>
            <label className={labelClass ? labelClass : "block-label"} >
                {labelText === undefined ? name : labelText}:
            </label>
            {selectedItems && selectedItems.map((x, idx) => <Item value={x} key={"b" + idx} handleRemove={handleRemoveItem} />)}
            <input placeholder={defaultValue} list="majorlist" defaultValue={""} onBlur={(e) => handleSelectionChange(e.target.value)} />
            <datalist id="majorlist" name={name}>
                {optionList && optionList.map((_, idx) => <option key={idx} value={_}>{_}</option>)}
            </datalist>
        </div >
    )
}