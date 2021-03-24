import { SchoolAdminForm } from "./SchoolAdminForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function SchoolAdminCreatePage(props) {

    const { error, isLoading, getAllSchools, onCreate, afterCreate, onError } = props;

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
            <MainHeader text="Create new School admin" />
            <MainContent>
                <SchoolAdminForm error={error} isLoading={isLoading} getAllSchools={getAllSchools} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}