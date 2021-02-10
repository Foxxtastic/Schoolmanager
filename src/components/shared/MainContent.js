export function MainContent(props) {

    const { customClass } = props;

    return (
        <div className={`main-content ${customClass ? customClass : "bg-mgray"}`}>
            {props.children}
        </div>
    );
}