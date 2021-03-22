import { useForm } from "react-hook-form"
import Input from "../shared/Input";
import { Loader } from "../shared/Loader";

export function ProgrammeForm(props) {
    const { isLoading, onError, defaultData, schoolId, error } = props;

    const { register, handleSubmit, errors } = useForm(defaultData);

    const onSubmitting = (data) => {
        console.log(data);
    }

    return (
        <form className={`component ${isLoading ? "loading" : ""}`} onSubmit={handleSubmit(onSubmitting, onError)}>
            <Loader isLoading={isLoading} />
            <div className={`component-data`}>
                <Input
                    defaultValue={defaultData && defaultData.Name}
                    name="Name"
                    isValidatable={true}
                    ref={register({ required: true })}
                    errors={errors}
                />
                <Input
                    defaultValue={defaultData && defaultData.IsActive}
                    isInline={true}
                    type="checkbox"
                    name="IsActive"
                    labelText="Active"
                    ref={register({ required: false })}
                />
                <Input
                    defaultValue={defaultData && defaultData.IsAdminManaged}
                    isInline={true}
                    type="checkbox"
                    name="IsAdminManaged"
                    labelText="Admin manage"
                    ref={register({ required: false })}
                    errors={errors}
                />
                <Input
                    defaultValue={defaultData && defaultData.MinCredit}
                    name="MinCredit"
                    labelText="Minimum credit needed"
                    isValidatable={true}
                    ref={register({ required: true })}
                    errors={errors}
                />
                <Input
                    defaultValue={defaultData && defaultData.SchoolId}
                    readOnly={true}
                    name="SchoolId"
                    labelText="School Id"
                    isValidatable={true}
                    ref={register({ required: true })}
                    errors={errors}
                />
                {error && <div className="item-padding validationerror tx-lred">{`A technical error has occurred.{error.message}`}</div>}
                <input className="button-withoutmargin item-margin" disabled={isLoading} type="submit" />
            </div>
        </form>
    )
}