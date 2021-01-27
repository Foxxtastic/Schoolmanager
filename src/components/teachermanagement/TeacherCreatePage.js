import { TeacherForm } from "./TeacherForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function TeacherCreatePage(props) {

    const { getMajors, error, isLoading, onTeacherCreate, afterCreate, onError } = props;

    const handleFormSubmit = (newItem) => {
        onTeacherCreate(newItem)
            .then(afterCreate)
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    };

    return (
        <>
            <MainHeader text="Create new Teacher" />
            <MainContent>
                <TeacherForm getMajors={getMajors} error={error} isLoading={isLoading} onSubmit={handleFormSubmit} isCreate={true} />
            </MainContent>
        </>
    );
}