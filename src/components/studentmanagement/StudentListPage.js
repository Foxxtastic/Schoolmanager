import '../../calendar.css';
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { StudentList } from "./StudentList";

export function StudentListPage(props) {
    const { error, isLoading, afterPaging, afterDelete, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Students" />
            <MainContent>
                <StudentList
                    error={error}
                    isLoading={isLoading}
                    linkToCreate="/students/create"
                    afterPaging={afterPaging}
                    afterUpdate={afterUpdate}
                    afterDelete={afterDelete}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            </MainContent>
        </>
    )
}