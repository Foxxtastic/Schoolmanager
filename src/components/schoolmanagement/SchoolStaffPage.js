import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../shared/Button";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SelectListBox } from "../shared/SelectListBox";
import { Form } from "../shared/Form";

const teacherHeaders = [
    { text: "First Name", propertyName: 'FirstName' },
    { text: "Last Name", propertyName: 'LastName' },
    { text: "Birth Date", propertyName: 'BirthDate' },
    { text: "Nationality", propertyName: 'Nationality' },
    { text: "Second Nationality", propertyName: 'SecondNationality' },
    { text: "City", propertyName: 'City' },
    { text: "Address", propertyName: 'Address' },
    { text: "Majors", propertyName: 'Majors' }
];

const studentHeaders = [
    { text: "First Name", propertyName: 'FirstName' },
    { text: "Last Name", propertyName: 'LastName' },
    { text: "Birth Date", propertyName: 'BirthDate' },
    { text: "Nationality", propertyName: 'Nationality' },
    { text: "Second Nationality", propertyName: 'SecondNationality' },
    { text: "City", propertyName: 'City' },
    { text: "Address", propertyName: 'Address' }
];

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
        getStudentById,
        getTeacherById
    } = props;
    const id = match.params.id;

    const [school, setSchool] = useState(undefined);
    const [availableStudents, setAvailableStudents] = useState(undefined);
    const [ownStudents, setOwnStudents] = useState(undefined);
    const [ownTeachers, setOwnTeachers] = useState(undefined);
    const [availableTeachers, setAvailableTeachers] = useState(undefined);
    const [selectedTopic, setSelectedTopic] = useState(undefined);
    const [dataForShow, setDataForShow] = useState(undefined);

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

    useEffect(() => {
        setDataForShow(undefined);
    }, [selectedTopic])

    const showTeachersWithoutSchool = () => {
        setSelectedTopic("Teachers");
    }

    const showStudentsWithoutSchool = () => {
        setSelectedTopic("Students");
    }

    const getData = (data) => {
        const result = [];
        if (selectedTopic === "Students") {
            for (let i = 0; i < studentHeaders.length; i++) {
                const item = studentHeaders[i].propertyName;
                if (data.hasOwnProperty(item)) {
                    result.push(data[item]);
                }
            }
            return result;
        }
        if (selectedTopic === "Teachers") {
            for (let i = 0; i < teacherHeaders.length; i++) {
                const item = teacherHeaders[i].propertyName;
                if (data.item.hasOwnProperty(item)) {
                    result.push(data.item[item]);
                }
            }
            const majors = data.item.majors.map(_ => _.MajorName).join('\n');
            result.push(majors);
            return result;
        }
    }

    const handleSelectAvailable = (e) => {
        const id = e.target.id;
        if (selectedTopic === "Students") {
            getStudentById(id).then(student => setDataForShow(getData(student)));
            return;
        }
        if (selectedTopic === "Teachers") {
            getTeacherById(id).then(teacher => setDataForShow(getData(teacher)));
        }
    }

    const handleSelectOwn = () => {

    }

    const handleShowData = (e) => {

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
                            <div className="listbox-container">
                                <SelectListBox
                                    text="Available Teachers"
                                    items={availableTeachers}
                                    onLeftClick={handleSelectAvailable}
                                    onRightClick={handleShowData}
                                />
                                <SelectListBox
                                    text="Own Teachers"
                                    items={ownTeachers}
                                    onLeftClick={handleSelectAvailable}
                                    onRightClick={handleShowData}
                                />
                            </div>}
                        {selectedTopic === "Students" &&
                            <div className="listbox-container">
                                <SelectListBox
                                    text="Available Students"
                                    items={availableStudents}
                                    onLeftClick={handleSelectAvailable}
                                    onRightClick={handleShowData}
                                />
                                <SelectListBox
                                    text="Own Students"
                                    items={ownStudents}
                                    onLeftClick={handleSelectAvailable}
                                    onRightClick={handleShowData}
                                />
                            </div>}
                        {dataForShow &&
                            <div className="persondata">
                                <Form headers={selectedTopic === "Teachers" ? teacherHeaders : studentHeaders} data={dataForShow} />
                            </div>}
                    </div>
                </div>
            </MainContent>
        </>
    )
}

export default withRouter(SchoolStaffPage);