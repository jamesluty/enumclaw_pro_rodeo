import React from 'react';
import { Link } from 'react-router-dom'
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

const Sponsors = () => {
    return (
        <div className="sponsorsWrapper">
            <h1 className="sponsorsPageTitle">Enumclaw Pro Rodeo Sponsors</h1>
            <Link to="/become-a-sponsor"><h2 className="sponsorLink">Click here to become a Sponsor</h2></Link>
            <div className="sponsorsDiv">
                {/* Presenting Sponsor */}
                <div>
                    <h3 className="presSponsorTitle">2023 Presenting Sponsor</h3>
                    <img src={old_cannery} alt="old_cannery" className="presentingImg" />
                </div>
                <div className="sponsorList">
                    {/* Platinum Sponsors */}
                    <h3 className="platinumListTitle">Platinum Sponsors</h3>
                    <div className="sponsorLogos">
                        <img src={northway} alt="northway_logo"  className="logo" />
                        <img src={barghausen} alt="barghausen_logo" className="logo" />
                    </div>
                    {/* Gold Sponsors */}
                    <h3 className="goldListTitle">Gold Sponsors</h3>
                    <div className="sponsorLogos">
                        <img src={rbh} alt="rbh_logo" className="logo" />
                        <img src={brahma} alt="brahma_logo" className="logo" />
                        <img src={country} alt="country_square_logo" className="logo" />
                        <img src={trm} alt="trm_logo" className="logo" />
                        <img src={gutters} alt="gutters_logo" className="logo" />
                        <img src={cannon} alt="cannon_logo" className="logo" />
                    </div>
                    {/* Silver Sponsors */}
                    <h3 className="silverListTitle">Silver Sponsors</h3>
                    <div className="sponsorLogos">
                        <img src={commencement} alt="commencement_logo" className="logo" />
                        <img src={pavilion} alt="pavilion_logo" className="logo" />
                        <img src={linex} alt="linex_logo" className="logo" />
                        <img src={mikes} alt="mikes_logo" className="logo" />
                        <img src={xo} alt="xo_logo" className="logo" />
                        <img src={schoenfeld} alt="schoenfeld_logo" className="logo" />
                        <img src={jd} alt="jd_logo" className="logo" />
                        <img src={courier} alt="courier_logo" className="logo" />
                        <img src={watterson} alt="watterson_logo" className="logo" />
                        <img src={grange} alt="grange_logo" className="logo" />
                        <img src={pursuit} alt="pursuit_logo" className="logo" />
                        <img src={gamblin} alt="gamblin_logo" className="logo" />
                        <img src={walrath} alt="walrath_logo" className="logo" />
                    </div>
                    {/* Bronze Sponsors */}
                    <h3 className="bronzeListTitle">Bronze Sponsors</h3>
                    <div className="sponsorLogos">
                        <img src={columbia} alt="columbia_logo" className="logo" />
                        <img src={luft} alt="luft_logo" className="logo" />
                        <img src={bell} alt="bell_logo" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors