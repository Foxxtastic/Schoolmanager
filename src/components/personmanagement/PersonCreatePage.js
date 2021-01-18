import { PersonForm } from "./PersonForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function PersonCreatePage(props) {

    const { error, isLoading, onPersonCreate, afterCreate, onError } = props;

    const handleFormSubmit = (newItem) => {
        onPersonCreate(newItem)
            .then(afterCreate)
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    };

    return (
        <>
            <MainHeader text="Create new Person" />
            <MainContent>
                <PersonForm error={error} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}