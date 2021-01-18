import { Route, Switch } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { LoginForm } from "./LoginForm";

export function Login(props) {

    return (
        <Switch>
            <Route path="/login" exact>
                <MainHeader text="Login with email:" />
                <MainContent>
                    <LoginForm />
                </MainContent>
            </Route>
        </Switch>
    )
}