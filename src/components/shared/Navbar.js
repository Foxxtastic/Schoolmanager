import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar(props) {

    const { menuItems } = props;
    const [activeMenuIndex, setActiveMenuIndex] = useState(undefined);
    const [isShown, setIsShown] = useState(undefined);
    const [previousMenuItem, setPreviousMenuItem] = useState(undefined);

    const getMenuItem = (item, idx) => {
        const classes = `navbar-items ${activeMenuIndex === idx ? "navbar-items-active" : "tx-lorange"}`
        if (item.link === undefined) {
            return (
                <span
                    key={idx}
                    className={classes}
                    onClick={() => handleLinkOnClick(idx, true)}
                >
                    {item.text}
                </span>
            )
        }
        return (
            <Link
                to={item.link}
                key={idx} className={classes}
                onClick={() => handleLinkOnClick(idx, false)}
            >
                {item.text}
            </Link>
        )
    }

    const handleLinkOnClick = (value, hasSubItems) => {
        const oldActiveMenu = activeMenuIndex === undefined ? undefined : menuItems[activeMenuIndex]
        const newActiveMenu = menuItems[value];
        const bothHasSubItems = oldActiveMenu !== undefined && oldActiveMenu !== newActiveMenu && oldActiveMenu.subItems && newActiveMenu.subItems;
        setActiveMenuIndex(value);
        setPreviousMenuItem(oldActiveMenu)
        const isClosedAndClickedOnLink = !hasSubItems && !isShown;
        if (!(isClosedAndClickedOnLink || bothHasSubItems)) {
            setIsShown(!isShown);
        }
    }

    const getLinks = (menuItem) => {
        return menuItem.subItems.map((item, idx) => <Link to={item.link} key={idx} className="navbar-subitems" >{item.text}</Link>);
    }

    const subclass = isShown === true ? "navbar-sub shown" : isShown === false ? "navbar-sub collapsed" : "navbar-sub";

    return (
        <div className="navbar-container">
            <div className="navbar bg-mgray">
                <div className="navbar-main">
                    {menuItems.map((item, idx) => getMenuItem(item, idx))}
                </div>
            </div>
            <div className={subclass}>
                {
                    activeMenuIndex !== undefined && menuItems[activeMenuIndex].subItems ?
                        getLinks(menuItems[activeMenuIndex]) :
                        previousMenuItem !== undefined && previousMenuItem.subItems ?
                            getLinks(previousMenuItem) :
                            null
                }
            </div>
        </div>
    );
}