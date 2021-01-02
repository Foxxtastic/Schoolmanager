import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SchoolList } from "./SchoolList";

export function SchoolListPage(props) {
    const { isLoading, afterUpdate, afterPaging, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Schools" />
            <MainContent>
                <SchoolList
                    isLoading={isLoading}
                    linkToCreate="/schools/create"
                    afterUpdate={afterUpdate}
                    afterPaging={afterPaging}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            </MainContent>
        </>
    )
}