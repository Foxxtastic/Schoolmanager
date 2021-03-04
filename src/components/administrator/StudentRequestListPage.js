import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { StudentRequestList } from "./StudentRequestList";

export function StudentRequestListPage(props) {
    const { error, isLoading, afterPaging, afterUpdate, onUpdate, decideRequest } = props;

    return (
        <>
            <MainHeader text="Requests send by students" />
            <MainContent>
                <StudentRequestList
                    error={error}
                    isLoading={isLoading}
                    afterPaging={afterPaging}
                    afterUpdate={afterUpdate}
                    onUpdate={onUpdate}
                    decideRequest={decideRequest}
                />
            </MainContent>
        </>
    )
}