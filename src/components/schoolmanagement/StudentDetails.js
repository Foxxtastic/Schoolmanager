import { formatAsDate } from "../../helpers/momentHelpers";

export function StudentDetails(props) {
    const { student } = props

    return (
        <div className="details">
            <div className="persondata">
                <div className="birthdate">
                    <span className="bold">BirthDate:</span>
                    {formatAsDate(student.BirthDate)}
                </div>
                <span className="bold">Address:</span>
                <div className="address-line1">
                    {student.Nationality}, {student.City}
                </div>
                <div className="address-line2">
                    {student.Address}
                </div>
            </div>
        </div>
    );
}