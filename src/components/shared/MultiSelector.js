export function MultiSelector(props) {

    const { name, optionList, isInline, labelClass, labelText } = props

    return (
        <div className={`${isInline ? "item-padding inline-block" : "item-padding"}`}>
            <label className={labelClass ? labelClass : "block-label"} />
            {labelText === undefined ? name : labelText}:
            <select name={name}>
                {optionList && optionList.map((_, idx) => <option key={idx} value={_}>{_}</option>)}
            </select>
        </div>
    )
}