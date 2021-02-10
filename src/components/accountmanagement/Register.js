import { Route, Switch } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { RegisterForm } from "./RegisterForm";

export function Register(props) {

    return (
        <Switch>
            <Route path="/register" exact>
                <MainHeader text="Register" />
                <MainContent customClass="user-form">
                    <RegisterForm />
                </MainContent>
            </Route>
        </Switch>
    )
}