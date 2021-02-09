import { Draggable, Droppable } from "react-beautiful-dnd";

export function SelectListBox(props) {

    const { dragIdstring, text, items, droppableId, getRowContent } = props

    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <div className="inline-block"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <span>{text}</span>
                    <div className={`listbox ${snapshot.isDraggingOver ? "draggingover" : ""}`}>
                        {items && items.map((_, idx) => {
                            const draggableId = dragIdstring + _.Id.toString();
                            return (
                                <Draggable key={draggableId} draggableId={draggableId} index={idx}>
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
                            );
                        })}
                        {provided.placeholder}
                    </div>
                </div >)}
        </Droppable>
    )
};