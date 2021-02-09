import { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { DragDropContext } from "react-beautiful-dnd";
import { SideMenu } from "../shared/SideMenu";
import { PersonList } from "./PersonList";
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
        getOwnTeachers,
        assignStudents,
        assignTeachers,
        deassignStudents,
        deassignTeachers
    } = props;
    const id = match.params.id;
    const links = [{ text: "Students", link: `/schools/${id}/students` }, { text: "Teachers", link: `/schools/${id}/teachers` }];

    const [school, setSchool] = useState(undefined);
    const [ownStudents, setOwnStudents] = useState(undefined);
    const [ownTeachers, setOwnTeachers] = useState(undefined);
    const [availableStudents, setAvailableStudents] = useState(undefined);
    const [availableTeachers, setAvailableTeachers] = useState(undefined);
    const [studentIdsToRemove, setStudentIdsToRemove] = useState(new Set());
    const [teacherIdsToRemove, setTeacherIdsToRemove] = useState(new Set());
    const [studentIdsToAdmit, setStudentIdsToAdmit] = useState(new Set());
    const [teacherIdsToAdmit, setTeacherIdsToAdmit] = useState(new Set());

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

    const handleChangeStudents = () => {
        let removableIds = new Set(
            [...studentIdsToRemove].filter(x => !studentIdsToAdmit.has(x)));
        removableIds = [...removableIds];
        let admitableIds = new Set(
            [...studentIdsToAdmit].filter(x => !studentIdsToRemove.has(x)));
        admitableIds = [...admitableIds];

        if (removableIds.length !== 0) {
            deassignStudents(id, removableIds)
                .then(() => history.push(`/schools/${id}`));
        }

        if (admitableIds.length !== 0) {
            assignStudents(id, admitableIds)
                .then(() => history.push(`/schools/${id}`));
        }
    }

    const handleChangeTeachers = () => {
        let removableIds = new Set(
            [...teacherIdsToRemove].filter(x => !teacherIdsToAdmit.has(x)));
        removableIds = [...removableIds];
        let admitableIds = new Set(
            [...teacherIdsToAdmit].filter(x => !teacherIdsToRemove.has(x)));
        admitableIds = [...admitableIds];

        if (removableIds.length !== 0) {
            deassignTeachers(id, removableIds)
                .then(() => history.push(`/schools/${id}`));
        }

        if (admitableIds.length !== 0) {
            assignTeachers(id, admitableIds)
                .then(() => history.push(`/schools/${id}`));
        }
    }

    const onDragEnd = (result) => {
        if (result.destination === null) {
            return;
        }

        const idToTransfer = parseInt(result.draggableId.match(/\d+/)[0]);
        const source = result.source.droppableId;
        const destination = result.destination.droppableId;
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        if (source === "availableTeachers" && destination === "assignedTeachers") {
            let newOwnTeachers = [...ownTeachers];
            newOwnTeachers.splice(destinationIndex, 0, availableTeachers[sourceIndex]);
            const newAvailableTeachers = availableTeachers.filter(x => x.Id !== idToTransfer);
            setOwnTeachers(newOwnTeachers);
            setAvailableTeachers(newAvailableTeachers);
            setTeacherIdsToAdmit(new Set([...teacherIdsToAdmit].concat(idToTransfer)));
            return;
        }

        if (source === "assignedTeachers" && destination === "availableTeachers") {
            let newAvailableTeachers = [...availableTeachers];
            newAvailableTeachers.splice(destinationIndex, 0, ownTeachers[sourceIndex]);
            const newOwnTeachers = ownTeachers.filter(x => x.Id !== idToTransfer);
            setOwnTeachers(newOwnTeachers);
            setAvailableTeachers(newAvailableTeachers);
            setTeacherIdsToRemove(new Set([...teacherIdsToRemove].concat(idToTransfer)));
            return;
        }

        if (source === "availableStudents" && destination === "assignedStudents") {
            let newOwnStudents = [...ownStudents];
            newOwnStudents.splice(destinationIndex, 0, availableStudents[sourceIndex]);
            const newAvailableStudents = availableStudents.filter(x => x.Id !== idToTransfer);
            setOwnStudents(newOwnStudents);
            setAvailableStudents(newAvailableStudents);
            setStudentIdsToAdmit(new Set([...studentIdsToAdmit].concat(idToTransfer)));
            return;
        }

        if (source === "assignedStudents" && destination === "availableStudents") {
            let newAvailableStudents = [...availableStudents];
            newAvailableStudents.splice(destinationIndex, 0, ownStudents[sourceIndex]);
            const newOwnStudents = ownStudents.filter(x => x.Id !== idToTransfer);
            setOwnStudents(newOwnStudents);
            setAvailableStudents(newAvailableStudents);
            setStudentIdsToRemove(new Set([...studentIdsToRemove].concat(idToTransfer)));
        }
    }

    return (
        <>
            <MainHeader text={school && `${school.Name}, ${school.Country}`} />
            <MainContent>
                <div className={`component noselect ${isLoading ? "loading" : ""}`} >
                    <SideMenu links={links} />
                    <div className="component-data">
                        <Switch >
                            <Route path={`/schools/${id}/teachers`}>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <PersonList
                                        availableItems={availableTeachers}
                                        assignedItems={ownTeachers}
                                        dragIdstringForAvailable={"availableteacher"}
                                        dragIdstringForassigned={"ownteacher"}
                                        droppableIdForAvailable={"availableTeachers"}
                                        droppableIdForAssigned={"assignedTeachers"}
                                        textForAvailable={"Available Teachers"}
                                        textForAssigned={"Assigned Teachers"}
                                        onSubmit={handleChangeTeachers}
                                    />
                                </DragDropContext>
                            </Route>
                            <Route path={`/schools/${id}/students`}>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <PersonList
                                        availableItems={availableStudents}
                                        assignedItems={ownStudents}
                                        dragIdstringForAvailable={"availablestudent"}
                                        dragIdstringForAssigned={"ownstudent"}
                                        droppableIdForAvailable={"availableStudents"}
                                        droppableIdForAssigned={"assignedStudents"}
                                        textForAvailable={"Available Students"}
                                        textForAssigned={"Assigned Students"}
                                        onSubmit={handleChangeStudents}
                                    />
                                </DragDropContext>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </MainContent>
        </>
    )
}

export default withRouter(SchoolStaffPage);