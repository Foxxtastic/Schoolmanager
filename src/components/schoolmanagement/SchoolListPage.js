import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { SchoolList } from "./SchoolList";

export function SchoolListPage(props) {
    const { schools, isLoading, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Schools" />
            {(schools !== undefined) &&
                <MainContent>
                    <SchoolList
                        items={schools}
                        isLoading={isLoading}
                        linkToCreate="/schools/create"
                        afterUpdate={afterUpdate}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    />
                </MainContent>}
        </>
    )
}