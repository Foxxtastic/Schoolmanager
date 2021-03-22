import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { ProgrammeForm } from "./ProgrammeForm";

function ProgrammeUpdatePage(props) {

    const { error, isLoading, getDataById, onUpdate, afterUpdate, match, onError } = props;
    const id = match.params.id;

    const handleFormSubmit = (updatedItem) => {
        onUpdate(id, updatedItem).then(afterUpdate)
            .catch(err => {
                if (onError) {
                    onError(err);
                }
            });
    };

    const [programmeToUpdate, setProgrammeToUpdate] = useState(undefined);

    useEffect(() => {
        getDataById(id).then((programmeToUpdateJson) => setProgrammeToUpdate(programmeToUpdateJson));
    }, [id, getDataById])

    return (
        <>
            <MainHeader text={`Update Programme with Id ${id}`} />
            <MainContent>
                {programmeToUpdate && <ProgrammeForm
                    error={error}
                    isLoading={isLoading}
                    onSubmit={handleFormSubmit}
                    defaultData={programmeToUpdate}
                />}
            </MainContent>
        </>
    );
}
export default withRouter(ProgrammeUpdatePage);