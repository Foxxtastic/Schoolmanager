import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import { Loader } from "../shared/Loader";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function SchoolDashboard(props) {

    const { error, isLoading, schoolId, getDataById, onUpdate, afterUpdate, onError } = props

    const [school, setSchool] = useState(undefined);
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        getDataById(schoolId).then((schoolJson) => setSchool(schoolJson));
    }, [schoolId, getDataById]);

    const handleFormSubmit = (updatedItem) => {
        onUpdate(schoolId, updatedItem).then(afterUpdate)
            .catch(err => {
                if (onError) {
                    onError(err);
                }
            });
    };

    const onSubmitting = (data) => {
        handleFormSubmit(data);
        alert("School Updated!");
    }

    return (
        <>
            <MainHeader text="Your school's data:" />
            <MainContent customClass="user-form">
                <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                    <Loader isLoading={isLoading} />
                    <div className={"userform"}>
                        <Input
                            defaultValue={school && school.EduId}
                            isInline={true}
                            labelText="Educational ID"
                            name="EduId"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            defaultValue={school && school.Name}
                            isInline={true}
                            name="Name"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                            lineBreak={true}
                        />
                        <Input
                            defaultValue={school && school.Country}
                            isInline={true}
                            name="Country"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        <Input
                            defaultValue={school && school.City}
                            isInline={true}
                            name="City"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                            lineBreak={true}
                        />
                        <Input
                            defaultValue={school && school.Address}
                            name="Address"
                            isValidatable={true}
                            ref={register({ required: true })}
                            errors={errors}
                        />
                        {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                        <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" value="Update" />
                    </div>
                </form>
            </MainContent>
        </>
    )
}