import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { PersonList } from "./PersonList";

export function PersonListPage(props) {
    const { isLoading, afterPaging, afterDelete, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Persons" />
            <MainContent>
                <PersonList
                    isLoading={isLoading}
                    linkToCreate="/persons/create"
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