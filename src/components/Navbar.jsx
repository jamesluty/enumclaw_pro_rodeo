import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/EPR_logo.png';
import menu_icon from '../imgs/menu_icon.png';

const Navbar = () => {
    const [infoDropdown, setInfoDropdown] = useState(false);
    const [eventsDropdown, setEventsDropdown] = useState(false);
    const [menu, setMenu] = useState(false);

    const showInfo = () => {
        setInfoDropdown(true);
    }

    const hideInfo = () => {
        setInfoDropdown(false);
    }

    const showEvents = () => {
        setEventsDropdown(true);
    }

    const hideEvents = () => {
        setEventsDropdown(false);
    }

    const showMenu = () => {
        setMenu(true);
    }

    const hideMenu = () => {
        setMenu(false);
    }

    return (
        <div className="navbar">
            <img src={logo} alt="EPR_logo" className="navLogo" />
            <div className="navLinks">
                <Link to="/" className="link"><h2 className="navLink">Home</h2></Link>
                <div onMouseOver={showInfo} onMouseOut={hideInfo}>
                    <div>
                        <h2 className="navLink">Information &nbsp; &#9660;</h2>
                    </div>
                    {infoDropdown && (
                        <div className="infoDropdown">
                            <ul className="infoList">
                                <Link to="https://www.enumclawexpo.com/p/camping" target="_blank" className="linkItem"><li className="listItem">Camping</li></Link>
                                <Link to="/sponsors" className="linkItem"><li className="listItem">Sponsors</li></Link>
                                <Link to="https://www.comevolunteer.com/events/14456-enumclaw-pro-rodeo/volunteer" target="_blank" className="linkItem"><li className="listItem">Volunteer</li></Link>
                                <Link to="https://www.google.com/maps/dir/47.6176482,-122.3551744/enumclaw+expo+center/@47.4065602,-122.4391977,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5490eded92f9b31d:0x7c3b05cd68089d18!2m2!1d-121.9631639!2d47.195209?entry=ttu" target="_blank" className="linkItem"><li className="listItem">Directions</li></Link>
                                <Link to="https://nprarodeo.com/" target="_blank" className="linkItem"><li className="listItem">NPRA</li></Link>
                            </ul>
                        </div>
                    )}
                </div>
                <div onMouseOver={showEvents} onMouseOut={hideEvents}>
                    <div>
                        <h2 className="navLink">Events &nbsp; &#9660;</h2>
                    </div>
                    {eventsDropdown && (
                        <div className="eventDropdown">
                            <ul className="eventList">
                                <Link to="/rodeo-concerts" className="linkItem"><li className="listItem">Concerts</li></Link>
                                <Link to="/rodeo-info" className="linkItem"><li className="listItem">Rodeo</li></Link>
                                <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank" className="linkItem"><li className="listItem">Tickets</li></Link>
                            </ul>
                        </div>
                    )}
                </div>
                <Link to="/become-a-sponsor" className="link"><h2 className="navLink sponsor">Become a sponsor</h2></Link>
            </div>
            <div className="menuDropdownDiv">
                <img onClick={showMenu} src={menu_icon} alt="menu" className="menuIcon"/>
                {menu && (
                    <div onMouseOut={hideMenu} className="menuDropdown">
                        <ul>
                            <Link to="/" className="menuLink"><li className="menuListItem">Home</li></Link>
                            <div onMouseOut={hideInfo}>
                                <li onClick={showInfo} className="menuListItem">Information</li>
                                {infoDropdown && (
                                    <>
                                        <Link to="https://www.enumclawexpo.com/p/camping" target="_blank" className="menuLink"><li className="menuListItem">Camping</li></Link>
                                        <Link to="/sponsors" className="menuLink"><li className="menuListItem">Sponsors</li></Link>
                                        <Link to="https://www.comevolunteer.com/events/14456-enumclaw-pro-rodeo/volunteer" target="_blank" className="menuLink"><li className="menuListItem">Volunteer</li></Link>
                                        <Link to="https://www.google.com/maps/dir/47.6176482,-122.3551744/enumclaw+expo+center/@47.4065602,-122.4391977,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5490eded92f9b31d:0x7c3b05cd68089d18!2m2!1d-121.9631639!2d47.195209?entry=ttu" target="_blank" className="menuLink"><li className="menuListItem">Directions</li></Link>
                                        <Link to="https://nprarodeo.com/" target="_blank" className="menuLink"><li className="menuListItem">NPRA</li></Link>
                                    </>
                                )}
                            </div>
                            <Link to="/rodeo-concerts" className="menuLink"><li className="menuListItem">Concerts</li></Link>
                            <Link to="/rodeo-info" className="menuLink"><li className="menuListItem">Rodeo</li></Link>
                            <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank" className="menuLink"><li className="menuListItem">Tickets</li></Link>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar