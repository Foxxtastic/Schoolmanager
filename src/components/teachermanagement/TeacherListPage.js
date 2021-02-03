import '../../calendar.css';
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { TeacherList } from "./TeacherList";

export function TeacherListPage(props) {
    const { error, isLoading, getAllSchools, afterSelectSchool, afterPaging, afterDelete, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Teachers" />
            <MainContent>
                <TeacherList
                    error={error}
                    isLoading={isLoading}
                    getAllSchools={getAllSchools}
                    afterSelectSchool={afterSelectSchool}
                    linkToCreate="/teachers/create"
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