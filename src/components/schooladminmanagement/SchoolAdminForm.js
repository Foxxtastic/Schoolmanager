import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import { ValidationErrors } from '../shared/ValidationErrors';
import { useEffect, useState } from 'react';
import { DropDown } from '../shared/DropDown';

export function SchoolAdminForm(props) {
    const { error, isLoading, getAllSchools, onSubmit, onError, defaultData } = props;

    const [schools, setSchools] = useState(undefined);
    const [schoolId, setSchoolId] = useState(null);
    const { register, handleSubmit, errors } = useForm({ defaultValues: defaultData });

    useEffect(() => {
        getAllSchools().then(res => setSchools(res.items))
    }, [getAllSchools, setSchools])

    const onSubmitting = (data) => {
        const newdata =
        {
            ...data,
            SchoolId: schoolId
        }
        onSubmit(newdata);
    }

    const handleSelectSchool = (schoolId) => {
        setSchoolId(parseInt(schoolId));
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />

                <div className="component-data createitem bg-lgray">
                    <div className="item-padding">
                        <label className="block-label" >Email Address:*</label>
                        <input name="EmailAddress" type="email" ref={register({ required: true })} />
                        <ValidationErrors name="EmailAddress" errors={errors} />
                        <label className="block-label">Password:</label>
                        <input type="password" name="Password" ref={register({ required: true })} />
                        <label className="block-label">Is active:</label>
                        <input type="checkbox" name="IsActive" ref={register({ required: false })} defaultChecked />
                        {schools &&
                            <DropDown
                                dropDownList={schools}
                                label="Admin for"
                                defaultValue={undefined}
                                defaultLabel="--Choose--"
                                onSelect={handleSelectSchool}
                            />}
                    </div>
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading || schoolId === undefined} type="submit" value="Create" />
                </div>
            </form>
        </>
    );
}