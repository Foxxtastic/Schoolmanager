export function CreateButton(props) {

    const { text } = props;

    return (
        <button className="button bg-lblue tx-yellow">{text}</button>
    );
}