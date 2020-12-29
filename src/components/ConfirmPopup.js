import { Button } from "./Button";

export function ConfirmPopup(props) {

    const { text, visible, onConfirm, onCancel } = props;

    return (
        <div className={`confirmmenu ${visible ? "" : "hidden"}`}>
            <div className="confirmmenu-content">
                <div className="alert">{text}</div>
                <div>
                    <Button text="Yes" handleClick={onConfirm} />
                    <Button text="No" handleClick={onCancel} />
                </div>
            </div>
        </div >
    )
}