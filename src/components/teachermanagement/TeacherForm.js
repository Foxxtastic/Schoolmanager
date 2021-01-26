import { useEffect, useState } from 'react';
import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import Input from '../shared/Input';
import { MultiSelector } from '../shared/MultiSelector';

export function TeacherForm(props) {
    const { getMajors, error, isLoading, onSubmit, onError, defaultData } = props;

    const [majors, setMajors] = useState(undefined);
    const [selectedMajors, setSelectedMajors] = useState([]);
    const { register, handleSubmit, errors } = useForm({ defaultValues: defaultData });

    const onSubmitting = (data) => {
        onSubmit(data);
    }

    useEffect(() => {
        getMajors().then(listResponse => setMajors(listResponse.items))
    }, [getMajors]);

    const handleSelectMajor = (item) => {
        if (!selectedMajors.includes(item)) {
            setSelectedMajors([...selectedMajors, item])
        }
    }

    const handleRemoveMajor = (itemToRemove) => {
        setSelectedMajors(selectedMajors.filter(_ => _ !== itemToRemove));
    }

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />
                <div className="component-data createitem bg-lgray">
                    <Input
                        isInline={true}
                        labelText="First Name"
                        name="FirstName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
                        labelText="Last Name"
                        name="LastName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        labelText="Birth Date"
                        name="BirthDate"
                        type="date"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
                        name="Nationality"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
                        labelText="Second Nationality"
                        name="SecondNationality"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    <Input
                        isInline={true}
                        name="City"
                        ref={register({ required: false })}
                    />
                    <Input
                        isInline={true}
                        name="Address"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    <Input
                        isInline={true}
                        labelText="Email Address"
                        name="EmailAddress"
                        type="email"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        isInline={true}
                        name="Password"
                        type="password"
                        ref={register({ required: true })}
                        isValidatable={true}
                        errors={errors}
                    />
                    <Input
                        labelClass="inline-label"
                        labelText="Is Active"
                        name="IsActive"
                        type="checkbox"
                        ref={register({ required: false })}
                    />
                    <MultiSelector
                        defaultValue={"Select a Major"}
                        name="Majors"
                        optionList={majors && majors.map(x => x.Name)}
                        selectedItems={selectedMajors}
                        handleSelectItem={handleSelectMajor}
                        handleRemoveItem={handleRemoveMajor}
                    />
                    {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred. Details: ${error.message}`}</div>}
                    <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}