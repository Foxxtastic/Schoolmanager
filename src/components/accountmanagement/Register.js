import { useCallback, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { getTeacherMajors, studentCreate, teacherCreate } from "../../helpers/fetchFunctions";
import { history } from "../../history";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { StudentForm } from "../studentmanagement/StudentForm";
import { TeacherForm } from "../teachermanagement/TeacherForm";
import { RegisterForm } from "./RegisterForm";

export function Register(props) {

    const [error, setError] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const getMajors = useCallback(() => {
        return getTeacherMajors(setIsLoading);
    }, []);

    const setUserToCreate = (newUser) => {
        setUser(newUser);
    }

    const handleTeacherFormSubmit = (newItem) => {
        const teacher = {
            ...newItem,
            ...user,
            IsActive: true
        }
        teacherCreate(teacher, setIsLoading, setError)
            .then(() => {
                alert("Sucess!");
                history.push("/Home");
            })
            .catch((err) => console.log(error));
    };

    const handleStudentFormSubmit = (newItem) => {
        const student = {
            ...newItem,
            ...user,
            IsActive: true
        }
        studentCreate(student, setIsLoading, setError)
            .then(() => {
                alert("Sucess!");
                history.push("/Home");
            })
            .catch((err) => console.log(error));
    };

    return (
        <Switch>
            <Route path="/register" exact>
                <MainHeader text="Register" />
                <MainContent customClass="user-form">
                    <RegisterForm isLoading={isLoading} setIsLoading={setIsLoading} setUserToCreate={setUserToCreate} />
                </MainContent>
            </Route>
            <Route path="/register/teacher" exact>
                <MainHeader text="Register as Teacher" />
                <MainContent customClass="user-form">
                    {user && <div className="userform">
                        <TeacherForm getMajors={getMajors} onSubmit={handleTeacherFormSubmit} />
                    </div>}
                </MainContent>
            </Route>
            <Route path="/register/student" exact>
                <MainHeader text="Register as Student" />
                <MainContent customClass="user-form">
                    {user && <div className="userform">
                        <StudentForm onSubmit={handleStudentFormSubmit} />
                    </div>}
                </MainContent>
            </Route>
        </Switch>
    )
}