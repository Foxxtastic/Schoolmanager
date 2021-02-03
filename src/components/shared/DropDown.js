import { createRef, Fragment, useEffect, useState } from "react";

export function DropDown(props) {

    const { label, dropDownList, defaultValue, onSelect } = props;
    const length = dropDownList.length;

    const [expanded, setExpanded] = useState(false);
    const [inputRefs, setInputRefs] = useState([]);
    const [selectedInput, setSelectedInput] = useState(0);
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    useEffect(() => {
        setInputRefs(inputRefs => (
            Array(length).fill().map((_, idx) => inputRefs[idx] || createRef())
        ))
    }, [length]);

    useEffect(() => {
        if (inputRefs[selectedInput] !== undefined) {
            inputRefs[selectedInput].current.checked = true;
        }
    }, [selectedInput, inputRefs]);

    useEffect(() => {
        onSelect(selectedValue);
    }, [selectedValue])

    const handleExpanding = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setExpanded(!expanded);
        if (expanded) {
            let refIndex;
            if (event.target.attributes.for !== undefined) {
                refIndex = event.target.attributes.for.nodeValue;
                setSelectedValue(inputRefs[refIndex].current.value);
                setSelectedInput(refIndex);
            }
        }
    }

    return (
        <div className="dropdown-container">
            <label className="datatable-label">{label}</label>
            <span className={`dropdown ${expanded ? "expanded" : ""}`} onClick={(e) => handleExpanding(e)}>
                <span className="value-holder">{selectedValue ?? "choose"}</span>
                <div className="options">
                    {dropDownList.map((_, idx) =>
                        <Fragment key={idx}>
                            <input
                                id={idx}
                                ref={inputRefs[idx]}
                                type="radio" name="sortType"
                                value={_.Name}
                            />
                            <label
                                value={_.Name}
                                data-text={_.Name}
                                htmlFor={idx}
                            />
                        </Fragment>
                    )}
                </div>
            </span>
        </div>
    )
}