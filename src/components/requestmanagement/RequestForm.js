import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

function RequestForm(props) {

    const { user } = useContext(UserContext);
    const email = user.emailAddress;

    const { register, handleSubmit/*, errors*/ } = useForm();
    const { getSchool, getStudent, createRequest, match, onError } = props;
    const [school, setSchool] = useState(undefined);
    const [student, setStudent] = useState(undefined);
    const id = match.params.id;

    useEffect(() => {
        getSchool(id).then(res => setSchool(res));
    }, [getSchool, id]);

    useEffect(() => {
        getStudent(email).then(res => setStudent(res));
    }, [getStudent, email]);

    const onSubmitting = (newItem) => {
        newItem.SchoolId = parseInt(newItem.SchoolId);
        newItem.StudentId = parseInt(newItem.StudentId);
        createRequest(newItem)
            .then(alert("Success"))
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    }

    return (
        <>
            <MainHeader text={`Send Request to ${school && school.Name} in ${school && school.Country}, ${school && school.City}`} />
            {student && school && <MainContent>
                <form onSubmit={handleSubmit(onSubmitting)}>
                    <div className="requestform">
                        <span><p>First Name:</p>
                            <label >{student.FirstName}</label>
                        </span>
                        <span><p>Last Name:</p>
                            <label>{student.LastName}</label>
                        </span>
                        <span><p>Nationality:</p>
                            <label>{student.Nationality}</label>
                        </span>
                        <span><p>City:</p>
                            <label>{student.City}</label>
                        </span>
                        <span><p>Address:</p>
                            <label>{student.Address}</label>
                        </span>
                        <input type="text" name="SchoolId" ref={register} value={school.Id} readOnly />
                        <input type="text" name="StudentId" ref={register} value={student.Id} readOnly />
                        <span><p>Message:</p>
                            <textarea name="Message" ref={register} />
                        </span>
                        <input className="button" type="submit" value="Apply" />
                    </div>
                </form>
            </MainContent>}
        </>
    )
}

export default withRouter(RequestForm);