import { Link } from "react-router-dom";

export function Navbar(props) {

    const { items, link } = props;

    return (
        <div className="navbar bg-dconcrete">
            {items.map((_, idx) => <Link to={link[idx]} key={idx} className="navbar-items tx-lorange">{_}</Link>)}
        </div>
    );
}