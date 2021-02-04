export function SelectListBox(props) {

    const { text, items, onLeftClick, onRightClick } = props

    return (
        <>
            <span>{text}</span>
            <div className="listbox">
                <ul>
                    {items.map((_, idx) =>
                        <li id={_.Id}
                            className="listbox-item"
                            key={idx}
                            onClick={(e) => onLeftClick(e)}
                            onContextMenu={() => onRightClick()}>
                            {_.FirstName} {_.LastName}
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}