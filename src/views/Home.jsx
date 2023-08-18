import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import yates from '../imgs/hollywood_yates.webp';
import blake from '../imgs/jared_blake.png';
import vinny from '../imgs/bigg_vinny.webp';
import bullRiding from '../imgs/bull_riding.jpg';
import buckinBroncs from '../imgs/buckin_broncs.jpg';
import steerWresting from '../imgs/steer_wresting.jpg';
import tieDownRoping from '../imgs/tie_down_roping.jpg';
import teamRoping from '../imgs/team_roping.jpg';
import barrelRacing from '../imgs/barrel_racing.jpg';
import old_cannery from '../imgs/old_cannery.png';
import northway from '../imgs/northway_logo.png';
import barghausen from '../imgs/barghausen_logo.png';
import trm from '../imgs/trm_logo.png';
import rbh from '../imgs/rbh_logo.jpg';
import cannon from '../imgs/cannon_logo.png';
import country from '../imgs/country_square_logo.png';
import gutters from '../imgs/gutters_logo.jpg';
import grange from '../imgs/grange_logo.png';
import schoenfeld from '../imgs/schoenfeld_farm_logo.png';
import linex from '../imgs/linex_logo.png';
import gamblin from '../imgs/gamblin_logo.png';
import pursuit from '../imgs/pursuit_logo.webp';
import xo from '../imgs/xo_logo.png';
import mikes from '../imgs/mikes_logo.gif';
import walrath from '../imgs/walrath_logo.png';
import watterson from '../imgs/watterson_logo.png';
import pavilion from '../imgs/pavilion_logo.png';
import commencement from '../imgs/commencement_logo.png';
import jd from '../imgs/jd_logo.jpg';
import brahma from '../imgs/brahma_logo.jpg';
import luft from '../imgs/luft_logo.png';
import columbia from '../imgs/columbia_logo.png';
import courier from '../imgs/courier_logo.png';
import bell from '../imgs/bell_logo.svg';
import cloud1 from '../imgs/cloud3.png';
import cloud2 from '../imgs/cloud4.png';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="homeWrapper">
            {/* Cloud effect */}
            {/* <div className="smokeClouds">
                <img src={cloud1} alt="cloud" className="cloud1"/>
                <img src={cloud1} alt="cloud" className="cloud2"/>
                <img src={cloud1} alt="cloud" className="cloud3"/>
                <img src={cloud2} alt="cloud" className="cloud4"/>
                <img src={cloud2} alt="cloud" className="cloud5"/>
                <img src={cloud2} alt="cloud" className="cloud6"/>
                <img src={cloud1} alt="cloud" className="cloud7"/>
                <img src={cloud2} alt="cloud" className="cloud8"/>
                <img src={cloud1} alt="cloud" className="cloud9"/>
                <img src={cloud2} alt="cloud" className="cloud10"/>
                <img src={cloud1} alt="cloud" className="cloud11"/>
                <img src={cloud2} alt="cloud" className="cloud12"/>
            </div> */}
            {/* Main page information */}
            <h1 className="homeTitle">Enumclaw Pro Rodeo</h1>
            <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank"><h1 className="ticketsLink">Get Your Rodeo TICKETS HERE</h1></Link>
            <div className="info">
                <div className="infoLeft">
                    <h2 className="infoDate">August 25-27 2023</h2>
                    <h3 className="infoLocation">Enumclaw Expo Center</h3>
                    <h3 className="infoArea">ENUMCLAW EXPO CENTER RODEO ARENA</h3>
                    <div className="events">
                        <div className="eventDay">
                            <h3 className="eventDate">Friday</h3>
                            <p className="dateInfo">Gate Opens - 4pm</p>
                            <p className="dateInfo"> Rodeo - 7pm</p>
                        </div>
                        <div className="eventDay">
                            <h3 className="eventDate">Saturday</h3>
                            <p className="dateInfo"> Gate Opens - 4pm</p>
                            <p className="dateInfo"> Rodeo - 7pm</p>
                        </div>
                        <div className="eventDay">
                            <h3 className="eventDate">Sunday</h3>
                            <p className="dateInfo">Gate Opens - 11am</p>
                            <p className="dateInfo"> Rodeo - 1pm</p>
                        </div>
                    </div>
                    <div className="ticketPrices">
                        <h3 className="priceTitle">Ticket Prices</h3>
                        <div className="prices">
                            <div className="pricesLeft">
                                <p className="prices">5 and Under</p>
                                <p className="prices">6-11</p>
                                <p className="prices">12 and Over</p>
                                <p className="prices">Seniors (65+) / Military / Veterans</p>
                            </div>
                            <div className="pricesRight">
                                <p className="prices">Free</p>
                                <p className="prices">$10</p>
                                <p className="prices">$25</p>
                                <p className="prices">$20</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoRight">
                    <p className="infoText">The Enumclaw Professional Rodeo was established in 2012 returning a 70-year tradition back to the Enumclaw plateau and the Pacific Northwest.  This would not be possible without community support and the generosity of our sponsors, the volunteers, and our rodeo patrons.</p>
                    <p className="infoText">As a non-profit organization Enumclaw Pro Rodeo returns annual profits to the community providing financial support to organizations including: NW Junior Rodeo Association, King County 4-H, the Local Boy Scouts of America Chapter, and the Enumclaw Expo Center. </p>
                    <p className="infoText">With $40,000 added to the contestant's purse the Enumclaw Pro Rodeo offers an exceptional payout, allowing us to draw top rodeo contestants from the US and Canada.</p>
                    <p className="infoText">The Enumclaw Pro Rodeo offers a spectacular rodeo weekend with top prize money, the finest livestock, the best rodeo announcer and rodeo entertainer in professional rodeo.</p>
                </div>
            </div>
            <Link to="https://www.comevolunteer.com/events/14456-enumclaw-pro-rodeo/volunteer" target="_blank"><h1 className="volunteerLink">Volunteer to Help at this years Rodeo</h1></Link>
            {/* Rodeo Concerts */}
            <div className="concertsDiv">
                <h1 className="concertsTitle">Rodeo Concerts</h1>
                <div className="artistDiv">
                    <div className="artist">
                        <h3 className="artistInfo">&nbsp;</h3>
                        <h3 className="artistInfo">Friday Night</h3>
                        <h3 className="artistInfo">Hollywood Yates</h3>
                        <img src={yates} alt="hollywood_yates" className="artistImg" />
                    </div>
                    <div className="artist">
                        <h3 className="artistInfo">Saturday Night</h3>
                        <h3 className="artistInfo">Jared Blake</h3>
                        <h3 className="artistInfo">The Voice - Team Blake</h3>
                        <img src={blake} alt="jared_blake" className="artistImg" />
                    </div>
                    <div className="artist">
                        <h3 className="artistInfo">Saturday Night</h3>
                        <h3 className="artistInfo">Big Vinny</h3>
                        <h3 className="artistInfo">American Idol</h3>
                        <img src={vinny} alt="big_vinny" className="artistImg" />
                    </div>
                </div>
            </div>
            {/* Rodeo Events */}
            <div className="eventsDiv">
                <h1 className="eventsTitle">Rodeo Events</h1>
                <div className="eventsList">
                    <div className="eventsTop">
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={bullRiding} alt="bull_riding" className="eventImg"/>
                        </div>
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={buckinBroncs} alt="buckin_broncs" className="eventImg"/>
                        </div>
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={steerWresting} alt="steer_wresting" className="eventImg"/>
                        </div>
                    </div>
                    <div className="eventsBot">
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={tieDownRoping} alt="tie_down_roping" className="eventImg"/>
                        </div>
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={teamRoping} alt="team_roping" className="eventImg"/>
                        </div>
                        <div className="event">
                            <h3 className="eventName">Bull Riding</h3>
                            <img src={barrelRacing} alt="barrel_racing" className="eventImg"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sponsors Information */}
            <div className="sponsorsDiv">
                <h1 className="sponsorsTitle">Enumclaw Pro Rodeo Sponsors</h1>
                <Link to="/become-a-sponsor"><h2 className="sponsorLink">Click here to become a Sponsor</h2></Link>
                <div>
                    <h3 className="presentingSponsor">2023 Presenting Sponsor</h3>
                    <img src={old_cannery} alt="old_cannery" className="presentingImg" />
                </div>
                <div className="sponsorList">
                    <h3 className="sponsorsListTitle">2023 Sponsors</h3>
                    <div className="sponsorLogos">
                        <img src={northway} alt="northway_logo"  className="logo" />
                        <img src={barghausen} alt="barghausen_logo" className="logo" />
                        <img src={trm} alt="trm_logo" className="logo" />
                        <img src={rbh} alt="rbh_logo" className="logo" />
                        <img src={cannon} alt="cannon_logo" className="logo" />
                        <img src={country} alt="country_square_logo" className="logo" />
                        <img src={gutters} alt="gutters_logo" className="logo" />
                        <img src={grange} alt="grange_logo" className="logo" />
                        <img src={schoenfeld} alt="schoenfeld_logo" className="logo" />
                        <img src={linex} alt="linex_logo" className="logo" />
                        <img src={gamblin} alt="gamblin_logo" className="logo" />
                        <img src={pursuit} alt="pursuit_logo" className="logo" />
                        <img src={xo} alt="xo_logo" className="logo" />
                        <img src={mikes} alt="mikes_logo" className="logo" />
                        <img src={walrath} alt="walrath_logo" className="logo" />
                        <img src={watterson} alt="watterson_logo" className="logo" />
                        <img src={pavilion} alt="pavilion_logo" className="logo" />
                        <img src={commencement} alt="commencement_logo" className="logo" />
                        <img src={jd} alt="jd_logo" className="logo" />
                        <img src={brahma} alt="brahma_logo" className="logo" />
                        <img src={luft} alt="luft_logo" className="logo" />
                        <img src={columbia} alt="columbia_logo" className="logo" />
                        <img src={courier} alt="courier_logo" className="logo" />
                        <img src={bell} alt="bell_logo" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home