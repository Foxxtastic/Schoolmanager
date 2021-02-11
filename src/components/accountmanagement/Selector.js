export function Selector(props) {

    const { onChange } = props;

    return (
        <div className="selector" onChange={(e) => onChange(e.target.value)}>
            <input type="radio" id="teacher" value="teacher" name="sel" defaultChecked />
            <label id="sel-teacher" htmlFor="teacher" className="notwide">Teacher</label>
            <input type="radio" id="student" value="student" name="sel" />
            <label id="sel-student" htmlFor="student" className="notwide">Student</label>
        </div>
    )
}