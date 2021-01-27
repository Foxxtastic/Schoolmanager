import { createRef } from "react"
import { Item } from "../customcomponents/Item";

export function MultiSelector(props) {

    const { defaultValue, name, optionList, selectedItems, isInline, labelClass, labelText, handleSelectItem, handleRemoveItem } = props

    const selectInput = createRef();

    return (
        <div className={`${isInline ? "item-padding inline-block" : "item-padding"}`}>
            <label className={labelClass ? labelClass : "block-label"} />
            {labelText === undefined ? name : labelText}:
            {selectedItems && selectedItems.map((x, idx) => <Item value={x} key={"b" + idx} handleRemove={handleRemoveItem} />)}
            <select defaultValue={defaultValue} ref={selectInput} name={name} onChange={() => handleSelectItem(selectInput.current.value)}>
                <option value={defaultValue} disabled="disabled">{defaultValue}</option>
                {optionList && optionList.map((_, idx) => <option key={idx} defaultValue={_}>{_}</option>)}
            </select>
        </div >
    )
}