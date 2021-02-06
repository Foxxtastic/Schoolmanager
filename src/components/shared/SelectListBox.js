import { Draggable, Droppable } from "react-beautiful-dnd";

export function SelectListBox(props) {

    const { dragIdstring, text, items, droppableId, getRowContent } = props

    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <span>{text}</span>
                    <div className={`listbox ${snapshot.isDraggingOver ? "draggingover" : ""}`}>
                        {items.map((_, idx) =>
                            <Draggable key={idx} draggableId={dragIdstring + _.Id.toString()} index={idx}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`listbox-item ${snapshot.isDragging ? "dragging" : ""}`}
                                    >
                                        {getRowContent(_)}
                                    </div>
                                )}
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </div>
                </div >)}
        </Droppable>
    )
};