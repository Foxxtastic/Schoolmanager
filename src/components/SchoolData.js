import { CreateButton } from "./CreateButton";
import { DataTable } from "./DataTable";

const header = ["Id", "Name", "Country", "City", "Address", ""]

export function SchoolData(props) {

    const { data } = props;

    return (
        <div className="school">
            <DataTable header={header} data={data} />
            <div className="footer">
                <CreateButton text="Create" />
            </div>
        </div>
    );
}