import React from 'react';
import { Link } from 'react-router-dom';
import EPR_logo from '../imgs/EPR_logo_black.png';
import facebook from '../imgs/facebook_icon.png';
import twitter from '../imgs/twitter_logo.png'

const SiteMap = () => {
    return (
        <div className="siteMapWrapper">
            {/* <h1 className="siteMapTitle">Enumclaw Pro Rodeo</h1>
            <hr className="line" /> */}
            <div className="siteMapLinks">
                <div className="siteMapCol">
                    <img src={EPR_logo} alt="epr_logo" className="eprLogo" />
                </div>
                <div className="siteMapCol">
                    <h3 className="colTitle">Rodeo Information</h3>
                    <Link to="/" className="siteMapLink">Home</Link>
                    <Link to="https://www.enumclawexpo.com/p/camping" target="_blank" className="siteMapLink">Camping</Link>
                    <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank" className="siteMapLink">Tickets</Link>
                    <Link to="/sponsors" className="siteMapLink">Sponsors</Link>
                    <Link to="https://www.comevolunteer.com/events/14456-enumclaw-pro-rodeo/volunteer" target="_blank" className="siteMapLink">Volunteer</Link>
                    <Link to="https://www.google.com/maps/dir/47.6176482,-122.3551744/enumclaw+expo+center/@47.4065602,-122.4391977,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x5490eded92f9b31d:0x7c3b05cd68089d18!2m2!1d-121.9631639!2d47.195209?entry=ttu" target="_blank" className="siteMapLink">Directions</Link>
                </div>
                <div className="siteMapCol">
                    <h3 className="colTitle">Rodeo Events</h3>
                    <Link to="/rodeo-concerts" className="siteMapLink">Concerts</Link>
                    <Link to="/rodeo-info" className="siteMapLink">Rodeo</Link>
                    <Link to="https://nprarodeo.com/" target="_blank" className="siteMapLink">NPRA</Link>
                </div>
                <div className="siteMapCol">
                    <h3 className="colTitle">Visit Us At...</h3>
                    <div className="socialMedia">
                        <Link to="https://www.facebook.com/profile.php?id=100064786684075" target="_blank" className="siteMapSocial"><img src={facebook} alt="facebook" className="socialLogo"/></Link>
                        {/* <Link className="siteMapSocial"><img src={twitter} alt="" className="socialLogo" /></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteMap