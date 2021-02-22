import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SchoolList } from "./SchoolList";

export function SchoolListPage(props) {
    const { error, isLoading, afterPaging } = props;

    return (
        <>
            <MainHeader text="List of Schools" />
            <MainContent>
                <SchoolList
                    error={error}
                    isLoading={isLoading}
                    linkToCreate="/schools/create"
                    afterPaging={afterPaging}
                />
            </MainContent>
        </>
    )
}