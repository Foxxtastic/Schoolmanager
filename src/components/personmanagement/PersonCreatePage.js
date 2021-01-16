import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createPersonFields = [
    { fieldName: "FirstName", label: "First Name", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "LastName", label: "Last Name", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "BirthDate", label: "Birth Date", required: true, type: "date", labelClass: "block-label" },
    { fieldName: "Nationality", label: "Nationality", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "SecondNationality", label: "Second Nationality", required: false, type: "text", labelClass: "block-label" },
    { fieldName: "City", label: "City", required: false, type: "text", labelClass: "block-label" },
    { fieldName: "Address", label: "Address", required: false, type: "text", labelClass: "block-label" },
    { fieldName: "Email Address", label: "Email Address", required: false, type: "text", labelClass: "block-label" },
    { fieldName: "Password", label: "Password", required: false, type: "password", labelClass: "block-label" },
    { fieldName: "IsActive", label: "Active Status", required: false, type: "checkbox", labelClass: "inline-label" }];

export function PersonCreatePage(props) {

    const { error, isLoading, onCreate, afterCreate, onError } = props;

    const handleFormSubmit = (newItem) => {
        onCreate(newItem)
            .then(afterCreate)
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    };

    return (
        <>
            <MainHeader text="Create new Person" />
            <MainContent>
                <GenericTextForm error={error} fields={createPersonFields} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}