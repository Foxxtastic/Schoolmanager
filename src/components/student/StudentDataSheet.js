import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { formatAsDate } from "../../helpers/momentHelpers";
import { history } from "../../history";
import { useFetch } from '../../hooks/useFetch';
import Input from "../shared/Input";
import { Loader } from "../shared/Loader";
import { MainContent } from "../shared/MainContent";

export function StudentDataSheet(props) {

    const fetchApi = useFetch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [student, setStudent] = useState(undefined);
    const { user } = useContext(UserContext);
    const { register, handleSubmit, errors, reset } = useForm({ defaultValues: student });

    const getData = useCallback((email) => {
        setIsLoading(true);
        const emailAddress = encodeURIComponent(email)
        return fetchApi(`/api/student/email/${emailAddress}`)
            .then(res => res.json())
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetchApi]);

    const studentUpdate = (idToUpdate, person) => {
        setIsLoading(true);

        const newPerson = {
            ...person,
            ActiveStatus: student.ActiveStatus,
            IsActive: student.IsActive
        }

        return fetchApi(`/api/student/${idToUpdate}`, {
            method: 'PUT',
            body: JSON.stringify(newPerson)
        })
            .then(res => res.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    setError({ message: jsonResponse.error.message, rowidx: idToUpdate });
                    return;
                }

                setError(undefined);
            })
            .catch((err) => {
                setError({ message: err.message, rowidx: idToUpdate })
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        if (history.location.pathname === "/student") {
            getData(user && user.emailAddress).then(res => setStudent(res))
                .catch(err => alert(err.message))
        }
    }, [user, getData]);

    useEffect(() => {
        if (student) {
            const newStudent = {
                ...student,
                BirthDate: formatAsDate(student.BirthDate),
                StartDate: formatAsDate(student.StartDate)
            }
            reset(newStudent);
        }
    }, [student, reset]);

    const onSubmitting = (data) => {
        console.log(data);
        setStudent(data);
        studentUpdate(student.Id, data)
            .then(getData(student.EmailAddress));
    }

    const onError = () => {
        console.log(errors);
    }

    return (
        <Route path="/student" exact>
            <MainContent customClass="user-form">
                <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                    {error && <div>{error.message}</div>}
                    <Loader isLoading={isLoading} />
                    <div className={"userform"}>
                        <Input
                            isInline={true}
                            labelText="First Name"
                            name="FirstName"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            isInline={true}
                            labelText="Last Name"
                            name="LastName"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            isInline={true}
                            labelText="Birth Date"
                            name="BirthDate"
                            type="date"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            isInline={true}
                            labelText="Email Address"
                            name="EmailAddress"
                            type="email"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            isInline={true}
                            name="Nationality"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            isInline={true}
                            labelText="Second Nationality"
                            name="SecondNationality"
                            ref={register({ required: false })}
                            lineBreak={true}
                        />
                        <Input
                            isInline={true}
                            name="City"
                            ref={register({ required: false })}
                        />
                        <Input
                            isInline={true}
                            name="Address"
                            ref={register({ required: false })}
                            lineBreak={true}
                        />
                        <Input
                            isInline={true}
                            labelText="Start Date"
                            name="StartDate"
                            type="date"
                            ref={register({ required: true })}
                            errors={errors}
                            readOnly={true}
                        />
                        <Input
                            isInline={true}
                            name="Password"
                            type="password"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <div className="item-padding center inline-block">
                            <label className="block-label">Active Status:</label>
                            {student && student.ActiveStatus ?
                                <FontAwesomeIcon icon={faCheck} size={"2x"} color={"#4285f4"} /> :
                                <FontAwesomeIcon icon={faTimes} size={"2x"} color={"#d35400"} />
                            }
                        </div>
                        <div className="center inline-block">
                            <label className="block-label">User is active:</label>
                            {student && student.IsActive ?
                                <FontAwesomeIcon icon={faCheck} size={"2x"} color={"#4285f4"} /> :
                                <FontAwesomeIcon icon={faTimes} size={"2x"} color={"#d35400"} />
                            }
                        </div>
                        <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" value="Update" />
                    </div>
                </form>
            </MainContent>
        </Route>
    )
}