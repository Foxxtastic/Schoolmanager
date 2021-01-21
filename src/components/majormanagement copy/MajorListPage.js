import '../../calendar.css';
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { MajorList } from './MajorList';

export function MajorListPage(props) {
    const { error, isLoading, afterPaging, afterDelete, afterCreate, afterUpdate, onDelete, onUpdate } = props;

    return (
        <>
            <MainHeader text="Users" />
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
                />
            </MainContent>
        </>
    )
}