import { useState } from "react";
import { Link } from "react-router-dom";

export function SideMenu(props) {

    const { links } = props;

    const [activeItem, setActiveItem] = useState(undefined);

    return (
        <div className="sidebar">
            {links.map((x, idx) =>
                <Link
                    className={`sidebar-item ${activeItem === idx ? "sidebar-item-active" : ""}`}
                    key={idx}
                    to={x.link}
                    onClick={() => setActiveItem(idx)}>{x.text}
                </Link>)}
        </div>
    )

}