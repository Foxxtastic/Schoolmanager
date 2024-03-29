import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { MajorList } from './MajorList';

export function MajorListPage(props) {
    const { error, isLoading, afterPaging, afterDelete, afterCreate, afterUpdate, onDelete, onUpdate, onCreate } = props;

    return (
        <>
            <MainHeader text="Majors" />
            <MainContent>
                <MajorList
                    error={error}
                    isLoading={isLoading}
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