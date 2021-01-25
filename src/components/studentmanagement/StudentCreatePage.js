import { StudentForm } from "./StudentForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function StudentCreatePage(props) {

    const { error, isLoading, onStudentCreate, afterCreate, onError } = props;

    const handleFormSubmit = (newItem) => {
        onStudentCreate(newItem)
            .then(afterCreate)
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    };

    return (
        <>
            <MainHeader text="Create new Student" />
            <MainContent>
                <StudentForm error={error} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}