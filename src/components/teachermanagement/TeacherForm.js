import { useEffect, useState } from 'react';
import { Loader } from '../shared/Loader';
import { useForm } from "react-hook-form";
import Input from '../shared/Input';
import { MultiSelector } from '../shared/MultiSelector';

export function TeacherForm(props) {
    const { getMajors, error, isLoading, onSubmit, onError, defaultData, isCreate } = props;

    const [majors, setMajors] = useState(undefined);
    const [selectedMajors, setSelectedMajors] = useState([]);
    const { register, handleSubmit, errors } = useForm();

    const onSubmitting = (data) => {
        const selectedMajorsWithId = majors.filter(x => selectedMajors.includes(x.Name));
        data = {
            ...data,
            Majors: selectedMajorsWithId
        }
        onSubmit(data);
    }

    useEffect(() => {
        getMajors().then(listResponse => setMajors(listResponse.items))
    }, [getMajors]);

    useEffect(() => {
        if (defaultData && defaultData.item.majors) {
            setSelectedMajors(defaultData.item.majors.map(x => x.MajorName));
        }
    }, [defaultData])

    const handleSelectMajor = (name) => {
        if (!selectedMajors.includes(name)) {
            setSelectedMajors([...selectedMajors, name])
        }
    }

    const handleRemoveMajor = (itemToRemove) => {
        setSelectedMajors(selectedMajors.filter(_ => _ !== itemToRemove));
    }

    console.log(defaultData)
    console.log(selectedMajors)

    return (
        <>
            <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
                <Loader isLoading={isLoading} />
                <div className="component-data createitem bg-lgray">
                    <Input
                        defaultValue={defaultData && defaultData.item.FirstName}
                        isInline={true}
                        labelText="First Name"
                        name="FirstName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.LastName}
                        isInline={true}
                        labelText="Last Name"
                        name="LastName"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.BirthDate}
                        labelText="Birth Date"
                        name="BirthDate"
                        type="date"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.Nationality}
                        isInline={true}
                        name="Nationality"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.SecondNationality}
                        isInline={true}
                        labelText="Second Nationality"
                        name="SecondNationality"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.City}
                        isInline={true}
                        name="City"
                        ref={register({ required: false })}
                    />
                    <Input
                        defaultValue={defaultData && defaultData.item.Address}
                        isInline={true}
                        name="Address"
                        ref={register({ required: false })}
                        lineBreak={true}
                    />
                    {isCreate && <Input
                        isInline={true}
                        labelText="Email Address"
                        name="EmailAddress"
                        type="email"
                        isValidatable={true}
                        ref={register({ required: true })}
                        errors={errors}
                    />}
                    {isCreate && <Input
                        isInline={true}
                        name="Password"
                        type="password"
                        ref={register({ required: true })}
                        isValidatable={true}
                        errors={errors}
                    />}
                    {isCreate && <Input
                        labelClass="inline-label"
                        labelText="Is Active"
                        name="IsActive"
                        type="checkbox"
                        ref={register({ required: false })}
                    />}
                    <MultiSelector
                        defaultData={defaultData && defaultData.item.majors}
                        defaultValue={"Select a Major"}
                        name="Majors"
                        optionList={majors && majors.map(_ => _.Name)}
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