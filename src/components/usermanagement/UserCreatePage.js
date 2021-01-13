import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createPersonLabels = [
    { label: "EmailAddress", required: true },
    { label: "Password", required: true },
    { label: "IsActive", required: true },
    { label: "LastLogin", required: false }];

export function UserCreatePage(props) {

    const { isLoading, onCreate, afterCreate } = props;

    const handleFormSubmit = (newItem) => {
        onCreate(newItem).then(afterCreate);
    };

    return (
        <>
            <MainHeader text="Create new Person" />
            <MainContent>
                <GenericTextForm labels={createPersonLabels} isLoading={isLoading} onSubmit={handleFormSubmit} datePickerRow={3} />
            </MainContent>
        </>
    );
}