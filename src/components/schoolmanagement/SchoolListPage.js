import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SchoolList } from "./SchoolList";

export function SchoolListPage(props) {
    const { isLoading, afterPaging, afterDelete, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Schools" />
            <MainContent>
                <SchoolList
                    isLoading={isLoading}
                    linkToCreate="/schools/create"
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