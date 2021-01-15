import { UserForm } from "./UserForm";
import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";

export function UserCreatePage(props) {

    const { isLoading, onCreate, afterCreate } = props;

    const handleFormSubmit = (newItem) => {
        onCreate(newItem).then(afterCreate);
    };

    return (
        <>
            <MainHeader text="Create new User" />
            <MainContent>
                <UserForm isLoading={isLoading} onSubmit={handleFormSubmit} />
            </MainContent>
        </>
    );
}