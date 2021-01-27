import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { UserForm } from "./UserForm";

function UserUpdatePage(props) {

    const { isLoading, getDataById, onUpdate, afterUpdate, match } = props;
    const id = match.params.id;
    const handleFormSubmit = (updatedItem) => {
        onUpdate(id, updatedItem).then(afterUpdate);
    };

    const [userToUpdate, setUserToUpdate] = useState(undefined);

    useEffect(() => {
        getDataById(id).then((userToUpdateJson) => setUserToUpdate(userToUpdateJson));
    }, [id, getDataById])

    return (
        <>
            <MainHeader text={`Update User with Id ${id}`} />
            <MainContent>
                {userToUpdate && <UserForm isLoading={isLoading} onSubmit={handleFormSubmit} defaultData={userToUpdate} />}
            </MainContent>
        </>
    );
}

export default withRouter(UserUpdatePage);