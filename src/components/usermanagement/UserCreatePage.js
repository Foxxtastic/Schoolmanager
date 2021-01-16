import { UserForm } from "./UserForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function UserCreatePage(props) {

    const { error, isLoading, onCreate, afterCreate, onError } = props;

    const handleFormSubmit = (newItem) => {
        onCreate(newItem)
            .then(afterCreate)
            .catch((err) => {
                if (onError) {
                    onError(err);
                }
            });
    };

    return (
        <>
            <MainHeader text="Create new User" />
            <MainContent>
                <UserForm error={error} isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}