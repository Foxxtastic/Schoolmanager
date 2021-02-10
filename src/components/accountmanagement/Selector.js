export function Selector(props) {

    return (
        <div className="selector">
            <label id="sel-teacher" htmlFor="teacher">Teacher</label>
            <input id="teacher" type="radio" value="1" name="sel" />
            <label id="sel-student" htmlFor="student">Student</label>
            <input id="student" type="radio" value="2" name="sel" />
        </div>
    )
}