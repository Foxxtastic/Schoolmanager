import { useEffect } from "react";
import { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { deleteStorageItem } from "../../helpers/storageHelpers";
import { history } from "../../history"

function isVisibleForUser(menuItem, user) {
    if (menuItem.isVisible) {
        return menuItem.isVisible(user);
    }

    if (menuItem.forUsersWith) {
        if (user === null) {
            return false;
        }

        return menuItem.forUsersWith.some(requiredFeatureName =>
            user.features.some(userFeature => userFeature.name === requiredFeatureName));
    }

    return true;
}

function filterUserVisibleItems(menuItems, user) {
    const visibleMenuItems = menuItems.filter(_ => isVisibleForUser(_, user));
    return visibleMenuItems.map(menuItem => menuItem.subItems ? ({
        ...menuItem,
        subItems: menuItem.subItems.filter(_ => isVisibleForUser(_, user))
    }) : menuItem);
}

function Navbar(props) {
    const { menuItems, location } = props;
    const [activeMenuIndex, setActiveMenuIndex] = useState(undefined);
    const [isShown, setIsShown] = useState(undefined);
    const [previousMenuItem, setPreviousMenuItem] = useState(undefined);
    const { user } = useContext(UserContext);
    const [loggedUser, setLoggedUser] = useState(user);

    const visibleMenuItems = filterUserVisibleItems(menuItems, loggedUser);

    useEffect(() => {
        setActiveMenuIndex(0);
        setLoggedUser(user);
    }, [user])

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
        const oldActiveMenu = activeMenuIndex === undefined ? undefined : visibleMenuItems[activeMenuIndex]
        const newActiveMenu = visibleMenuItems[value];
        const bothHasSubItems = oldActiveMenu !== undefined && oldActiveMenu !== newActiveMenu && oldActiveMenu.subItems && newActiveMenu.subItems;
        setActiveMenuIndex(value);
        setPreviousMenuItem(oldActiveMenu)
        const isClosedAndClickedOnLink = !hasSubItems && !isShown;
        if (!(isClosedAndClickedOnLink || bothHasSubItems)) {
            setIsShown(!isShown);
        }
    }

    const handleLogout = () => {
        deleteStorageItem('user');
        setLoggedUser(null);
        history.push("/home");
    }

    const getLinks = (menuItem) => {
        return menuItem.subItems.map((item, idx) => {
            const isActive = location.pathname.startsWith(item.link);
            return <Link to={item.link} key={idx} className={`${isActive ? "navbar-subitems-active" : ""} navbar-subitems`} >{item.text}</Link>
        })
    }

    const subclass = isShown === true ? "navbar-sub shown" : isShown === false ? "navbar-sub collapsed" : "navbar-sub";

    return (
        <div className="navbar-container">
            <div className="navbar bg-mgray">
                <div className="navbar-main">
                    {visibleMenuItems.map((item, idx) => getMenuItem(item, idx))}
                </div>
                {loggedUser !== null && <div className="username navbar-items tx-lorange" onClick={() => handleLogout()}>{user.emailAddress}</div>}
            </div>
            <div className={subclass}>
                {
                    activeMenuIndex !== undefined && visibleMenuItems[activeMenuIndex].subItems ?
                        getLinks(visibleMenuItems[activeMenuIndex]) :
                        previousMenuItem !== undefined && previousMenuItem.subItems ?
                            getLinks(previousMenuItem) :
                            null
                }
            </div>
        </div>
    );
}
export default withRouter(Navbar);