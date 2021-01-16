import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createSchoolFields = [
    { fieldName: "EduId", label: "Educational ID", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "Name", label: "Name", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "Country", label: "Country", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "City", label: "City", required: true, type: "text", labelClass: "block-label" },
    { fieldName: "Address", label: "Address", required: true, type: "text", labelClass: "block-label" }];

export function SchoolCreatePage(props) {

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
            <MainHeader text="Create new School" />
            <MainContent>
                <GenericTextForm error={error} fields={createSchoolFields} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}