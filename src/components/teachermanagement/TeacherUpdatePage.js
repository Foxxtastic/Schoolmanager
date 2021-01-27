import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { TeacherForm } from "./TeacherForm";

function TeacherUpdatePage(props) {

    const { getMajors, error, isLoading, getDataById, onUpdate, afterUpdate, match, onError } = props;
    const id = match.params.id;

    const handleFormSubmit = (updatedItem) => {
        onUpdate(id, updatedItem).then(afterUpdate)
            .catch(err => {
                if (onError) {
                    onError(err);
                }
            });
    };

    const [teacherToUpdate, setTeacherToUpdate] = useState(undefined);

    useEffect(() => {
        getDataById(id).then((teacherToUpdateJson) => setTeacherToUpdate(teacherToUpdateJson));
    }, [id, getDataById])

    return (
        <>
            <MainHeader text={`Update Teacher with Id ${id}`} />
            <MainContent>
                {teacherToUpdate && <TeacherForm
                    getMajors={getMajors}
                    error={error}
                    isLoading={isLoading}
                    onSubmit={handleFormSubmit}
                    defaultData={teacherToUpdate}
                />}
            </MainContent>
        </>
    );
}
export default withRouter(TeacherUpdatePage);