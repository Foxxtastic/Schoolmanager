import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { SelectListBox } from "../shared/SelectListBox";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "../shared/Button";

export function PersonList(props) {

    const {
        isLoading,
        availableItems,
        assignedItems,
        dragIdstringForAvailable,
        dragIdstringForAssigned,
        droppableIdForAvailable,
        droppableIdForAssigned,
        textForAvailable,
        textForAssigned,
        onSubmit
    } = props;

    const [selectedId, setSelectedId] = useState(undefined);

    const getRowContent = (item) => (
        <>
            <span>
                {item.FirstName} {item.LastName}
            </span>
            <button
                onClick={() => handleSetSelectedId(item.Id)}
                disabled={isLoading}
            >
                {selectedId === item.Id ?
                    <FontAwesomeIcon icon={faChevronUp} /> :
                    <FontAwesomeIcon icon={faChevronDown} />
                }
            </button>
            { selectedId === item.Id ?
                <TeacherDetails teacher={item} /> :
                // <StudentDetails student={item} /> :
                null
            }
        </>
    )

    const handleSetSelectedId = (id) => {
        if (selectedId === id) {
            setSelectedId(undefined);
            return;
        }
        setSelectedId(id);
    }

    return (
        <div className="listbox-container">
            <div>
                <div>
                    {availableItems && <SelectListBox
                        dragIdstring={dragIdstringForAvailable}
                        droppableId={droppableIdForAvailable}
                        text={textForAvailable}
                        items={availableItems}
                        getRowContent={getRowContent}
                    />}
                    {assignedItems && <SelectListBox
                        dragIdstring={dragIdstringForAssigned}
                        droppableId={droppableIdForAssigned}
                        text={textForAssigned}
                        items={assignedItems}
                        getRowContent={getRowContent}
                    />}
                </div>
                <Button text="Submit" customClass="button staffpage-button" handleClick={onSubmit} />
                <Button text="Back" customClass="button staffpage-button" />
            </div>
        </div>
    )
}