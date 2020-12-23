import { Link } from "react-router-dom";
import { Button } from "./Button";
import { DataTable } from "./DataTable";

const labels = ["Id", "Name", "Country", "City", "Address", ""]

export function SchoolData(props) {

    const { items, linkToCreate } = props;

    return (
        <div className="component">
            <DataTable classtype="component-data"
                headers={labels}
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
                <Link to={linkToCreate}>
                    <Button text="Create" />
                </Link>
            </div>
        </div>
    );
}