import { Route, Switch } from "react-router-dom";

export function Home() {
    return (
        <Switch>
            <Route path="/" exact>
                <div> hello </div>
            </Route>
        </Switch>
    );
}