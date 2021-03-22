import { MainContent } from "../shared/MainContent";
import { MainHeader } from "../shared/MainHeader";
import { ProgrammeForm } from "./ProgrammeForm";

export function ProgramCreatePage(props) {

    const { error } = props;

    return (
        <>
            <MainHeader header="Create Educational programme" />
            <MainContent>
                <ProgrammeForm error={error} />
            </MainContent>
        </>
    )
}