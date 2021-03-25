import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import { ValidationErrors } from '../shared/ValidationErrors';
import { useEffect, useState } from 'react';
import { DropDown } from '../shared/DropDown';

export function AppAdminForm(props) {
    const { error, isLoading, getAllSchools, onSubmit, onError, defaultData, appAdmin } = props;

    const { register, handleSubmit, errors } = useForm({ defaultValues: defaultData });

    const onSubmitting = (data) => {
        onSubmit(data);
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
                    </div>
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading
                    } type="submit" value="Create" />
                </div>
            </form>
        </>
    );
}