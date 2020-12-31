import { GenericTextForm } from "../shared/GenericTextForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

const createSchoolLabels = ["EduId", "Name", "Country", "City", "Address"];

export function SchoolCreatePage(props) {

    const { isLoading, onSubmit } = props;

    return (
        <>
            <MainHeader text="Create new School" />
            <MainContent>
                <GenericTextForm labels={createSchoolLabels} isLoading={isLoading} onSubmit={onSubmit} />
            </MainContent>
        </>
    );
}