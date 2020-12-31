import { Link } from "react-router-dom";

export function Navbar(props) {

    const { items, links } = props;

    return (
        <div className="navbar bg-dconcrete">
            {items.map((_, idx) => <Link to={links[idx]} key={idx} className="navbar-items tx-lorange">{_}</Link>)}
        </div>
    );
}