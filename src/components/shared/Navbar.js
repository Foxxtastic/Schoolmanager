import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar(props) {

    const { menuItems } = props;
    const [activeMenu, setActiveMenu] = useState(undefined);

    const handleLinkOnClick = (value) => {
        setActiveMenu(value);
    }

    return (
        <nav className="navbar bg-dconcrete">
            <ul>
                {menuItems.map((_, idx) =>
                    (_.link !== undefined || _.subItems === undefined) ?
                        <li key={idx}>
                            <Link
                                to={_.link}
                                className={`navbar-items ${activeMenu === idx ? "navbar-items-active" : "tx-lorange"}`}
                                onClick={() => handleLinkOnClick(idx)}
                            >
                                {_.text}
                            </Link></li> :
                        <li key={idx}><span
                            className="navbar-items tx-lorange"
                        >
                            {_.text}
                        </span>
                            <ul className="dropdown">
                                {_.subItems.map((x, idx) =>
                                    <li key={idx + 1}><Link to={x.link} className="navbar-subitem tx-lorange">{x.text}</Link></li>
                                )}
                            </ul>
                        </li>
                )}
            </ul>
        </nav >
    );
}