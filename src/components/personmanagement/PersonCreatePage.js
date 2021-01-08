import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createPersonLabels = [
    { label: "FirstName", required: true },
    { label: "LastName", required: true },
    { label: "BirthDate", required: true },
    { label: "Nationality", required: true },
    { label: "SecondNationality", required: false },
    { label: "City", required: false },
    { label: "Address", required: false }];

export function PersonCreatePage(props) {

    const { isLoading, onCreate, afterCreate } = props;

    const handleFormSubmit = (newItem) => {
        onCreate(newItem).then(afterCreate);
    };

    return (
        <>
            <MainHeader text="Create new Person" />
            <MainContent>
                <GenericTextForm labels={createPersonLabels} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}