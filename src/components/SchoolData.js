import { Button } from "./Button";
import { DataTable } from "./DataTable";

const headers = ["Id", "Name", "Country", "City", "Address", ""]

export function SchoolData(props) {

    const { items } = props;

    const handleCreate = () => {

    }

    return (
        <div className="school">
            <DataTable
                headers={headers}
                items={items}
                getRowForItem={(item, idx) => (
                    <tr key={idx}>
                        <td>{item.Id}</td>
                        <td>{item.Name}</td>
                        <td>{item.Country}</td>
                        <td>{item.City}</td>
                        <td>{item.Address}</td>
                        <td></td>
                    </tr>
                )}
            />
            <div className="footer">
                <Button text="Create" handleClick={handleCreate} />
            </div>
        </div>
    );
}