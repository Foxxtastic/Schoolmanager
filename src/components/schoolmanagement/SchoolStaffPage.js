import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../shared/Button";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SelectListBox } from "../shared/SelectListBox";
import { DragDropContext } from "react-beautiful-dnd";
import { TeacherDetails } from "./TeacherDetails";
import { StudentDetails } from "./StudentDetails";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { history } from "../../history";

function SchoolStaffPage(props) {

    const {
        error,
        isLoading,
        match,
        getDataById,
        getStudentsToAdmit,
        getTeachersToHire,
        getOwnStudents,
        getOwnTeachers
    } = props;
    const id = match.params.id;

    const [school, setSchool] = useState(undefined);
    const [ownStudents, setOwnStudents] = useState(undefined);
    const [ownTeachers, setOwnTeachers] = useState(undefined);
    const [availableStudents, setAvailableStudents] = useState(undefined);
    const [availableTeachers, setAvailableTeachers] = useState(undefined);
    const [selectedTopic, setSelectedTopic] = useState(undefined);
    const [selectedId, setSelectedId] = useState(undefined);

    useEffect(() => {
        getDataById(id).then((schoolJson) => setSchool(schoolJson))
    }, [id, getDataById])

    useEffect(() => {
        getStudentsToAdmit().then(listResponse => setAvailableStudents(listResponse.items))
    }, [getStudentsToAdmit]);

    useEffect(() => {
        getTeachersToHire().then(listResponse => setAvailableTeachers(listResponse.items))
    }, [getTeachersToHire]);

    useEffect(() => {
        if (school !== undefined) {
            getOwnStudents(school.Id).then(listResponse => setOwnStudents(listResponse.items))
        }
    }, [getOwnStudents, school]);

    useEffect(() => {
        if (school !== undefined) {
            getOwnTeachers(school.Id).then(listResponse => setOwnTeachers(listResponse.items))
        }
    }, [getOwnTeachers, school]);

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
                selectedTopic === "Teachers" ?
                    <TeacherDetails teacher={item} /> :
                    <StudentDetails student={item} /> :
                null
            }
        </>
    )

    const showTeachersWithoutSchool = () => {
        setSelectedTopic("Teachers");
        setSelectedId(undefined);
    }

    const showStudentsWithoutSchool = () => {
        setSelectedTopic("Students");
        setSelectedId(undefined);
    }

    const handleSetSelectedId = (id) => {
        if (selectedId === id) {
            setSelectedId(undefined);
            return;
        }

        setSelectedId(id);
    }

    const handleTransferFromAvailable = (e) => {

    }

    const handleTransferFromOwn = (e) => {

    }

    const onDragEnd = (result) => {
        if (result.destination === null) {
            return;
        }

        const idToTransfer = parseInt(result.draggableId.match(/\d+/)[0]);
        const source = result.source.droppableId;
        const destination = result.destination.droppableId;

        if (source === "availableTeachers" && destination === "assignedTeachers") {
            const newOwnTeachers = [...ownTeachers, availableTeachers.find(x => x.Id === idToTransfer)];
            const newAvailableTeachers = availableTeachers.filter(x => x.Id !== idToTransfer);
            setOwnTeachers(newOwnTeachers);
            setAvailableTeachers(newAvailableTeachers);
        }

        if (source === "assignedTeachers" && destination === "availableTeachers") {
            const newAvailableTeachers = [...availableTeachers, ownTeachers.find(x => x.Id === idToTransfer)];
            const newOwnTeachers = ownTeachers.filter(x => x.Id !== idToTransfer);
            setOwnTeachers(newOwnTeachers);
            setAvailableTeachers(newAvailableTeachers);
        }

        if (source === "availableStudents" && destination === "assignedStudents") {
            const newOwnStudents = [...ownStudents, availableStudents.find(x => x.Id === idToTransfer)]
            const newAvailableStudents = availableStudents.filter(x => x.Id !== idToTransfer);
            setOwnStudents(newOwnStudents);
            setAvailableStudents(newAvailableStudents);
        }

        if (source === "assignedStudents" && destination === "availableStudents") {
            const newAvailableStudents = [...availableStudents, ownStudents.find(x => x.Id === idToTransfer)]
            const newOwnStudents = ownStudents.filter(x => x.Id !== idToTransfer);
            setOwnStudents(newOwnStudents);
            setAvailableStudents(newAvailableStudents);
        }
    }

    return (
        <>
            <MainHeader text={school && `${school.Name}, ${school.Country}`} />
            <MainContent>
                <div className={`component ${isLoading ? "loading" : ""}`} >
                    <div className="component-data">
                        <Button text="Manage Teachers" handleClick={showTeachersWithoutSchool} />
                        <Button text="Manage Student" handleClick={showStudentsWithoutSchool} />
                        {selectedTopic === "Teachers" &&
                            <DragDropContext onDragEnd={onDragEnd}>
                                <div className="listbox-container">
                                    <SelectListBox
                                        dragIdstring={"availableteacher"}
                                        droppableId="availableTeachers"
                                        text="Available Teachers"
                                        items={availableTeachers}
                                        getRowContent={getRowContent}
                                        onTransfer={handleTransferFromAvailable}
                                    />
                                    <SelectListBox
                                        dragIdstring={"assignedteacher"}
                                        droppableId="assignedTeachers"
                                        text="Own Teachers"
                                        items={ownTeachers}
                                        getRowContent={getRowContent}
                                        onTransfer={handleTransferFromOwn}
                                    />
                                </div>
                            </DragDropContext>}
                        {selectedTopic === "Students" &&
                            <DragDropContext onDragEnd={onDragEnd}>
                                <div className="listbox-container">
                                    <SelectListBox
                                        dragIdstring={"availablestudent"}
                                        droppableId="availableStudents"
                                        text="Available Students"
                                        items={availableStudents}
                                        getRowContent={getRowContent}
                                        onTransfer={handleTransferFromAvailable}
                                    />

                                    <SelectListBox
                                        dragIdstring={"ownstudent"}
                                        droppableId="assignedStudents"
                                        text="Own Students"
                                        items={ownStudents}
                                        getRowContent={getRowContent}
                                        onTransfer={handleTransferFromOwn}
                                    />
                                </div>
                            </DragDropContext>}
                    </div>
                    <div className="footer">
                        <Button text="Submit" customClass="button staffpage-button" />
                        <Button text="Back" customClass="button staffpage-button" onClick={() => history.push("/")} />
                    </div>
                </div>
            </MainContent>
        </>
    )
}

export default withRouter(SchoolStaffPage);