import { formatAsDate } from "../../helpers/momentHelpers";

export function TeacherDetails(props) {
    const { teacher } = props

    return (
        <div className="details">
            <div className="persondata">
                <div className="birthdate">
                    <span className="bold">BirthDate:</span>
                    {formatAsDate(teacher.BirthDate)}
                </div>
                <span className="bold">Address:</span>
                <div className="address-line1">
                    {teacher.Nationality}, {teacher.City}
                </div>
                <div className="address-line2">
                    {teacher.Address}
                </div>
            </div>
        </div>
    )
}