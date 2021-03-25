import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { AppAdminList } from "./AppAdminList";

export function AppAdminListPage(props) {
    const { error, isLoading, afterPaging, afterDelete, afterCreate, afterUpdate, onDelete, onUpdate, onCreate } = props;

    return (
        <>
            <MainHeader text="Majors" />
            <MainContent>
                <AppAdminList
                    error={error}
                    isLoading={isLoading}
                    linkToCreate="/appadmins/create"
                    afterPaging={afterPaging}
                    afterUpdate={afterUpdate}
                    afterCreate={afterCreate}
                    afterDelete={afterDelete}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onCreate={onCreate}
                />

            </MainContent>
        </>
    )
}