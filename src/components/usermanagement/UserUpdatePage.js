import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createPersonLabels = [
    { label: "EmailAddress", required: true },
    { label: "Password", required: true },
    { label: "IsActive", required: true },
    { label: "LastLogin", required: false }];

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
                {userToUpdate !== undefined && <GenericTextForm labels={createPersonLabels} isLoading={isLoading} onSubmit={handleFormSubmit} datePickerRow={3} defaultData={userToUpdate} />}
            </MainContent>
        </>
    );
}

export default withRouter(UserUpdatePage);