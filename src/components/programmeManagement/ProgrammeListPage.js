import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { ProgrammeList } from "./ProgrammeList"

export function ProgrammeListPage(props) {
    const { error, isLoading, afterPaging, afterDelete, afterCreate, afterUpdate, onDelete, onUpdate, onCreate } = props;

    return (
        <>
            <MainHeader text="Educational Programme List" />
            <MainContent>
                <ProgrammeList
                    error={error}
                    isLoading={isLoading}
                    linkToCreate="/programmes/create"
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