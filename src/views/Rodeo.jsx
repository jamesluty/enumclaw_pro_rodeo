import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import horseshoe from '../imgs/horseshoe.jpg';
import rodeo from '../imgs/rodeo_info_img.webp';

const Rodeo = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return (
        <div className="rodeoInfoWrapper">
            <h1 className="rodeoInfoTitle">Rodeo Info</h1>
            <div className="rodeoInfoTicket">
                <div className="ticketTop">
                    <div className="rodeoInfoLeft">
                        <img src={horseshoe} alt="horseshoe" className="horseshoeImg"/>
                        <h3 className="rodeoInfoSecTitle">Opening Hours</h3>
                        <p className="rodeoInfoDates">Friday August 25th</p>
                        <p className="rodeoInfoTimes">Gates open at 4pm</p>
                        <p className="rodeoInfoTimes">Rodeo begins at 7pm</p>
                        <p className="rodeoInfoDates">Saturday August 26th</p>
                        <p className="rodeoInfoTimes">Gates open at 4pm</p>
                        <p className="rodeoInfoTimes">Rodeo begins at 7pm</p>
                        <p className="rodeoInfoDates">Sunday August 27th</p>
                        <p className="rodeoInfoTimes">Gates open at 11am</p>
                        <p className="rodeoInfoTimes">Rodeo begins at 1pm</p>
                    </div>
                    <div className="halfCircle"></div>
                    <div className="rodeoInfoRight">
                        <img src={rodeo} alt="rodeo" className="rodeoInfoImg"/>
                    </div>
                </div>
                <hr className="dashedLine"/>
                <div className="ticketBottom">
                    <div className="tabLeft">
                        <h3 className="tabTitle">Online Tickets</h3>
                        <p className="tabInfo">Order your tickets online or at one of</p>
                        <p className="tabInfo">our sponsored retailers</p>
                        <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank" className="purchaseBtn">Purchase Online</Link>
                    </div>
                    <hr className="dashedLineVert"/>
                    <div className="tabRight">
                        <h3 className="tabTitle">In Person Tickets</h3>
                        <div className="ticketSeller">
                            <p className="tabSubTitle">Mike's Western Suppliers</p>
                            <p className="tabInfo"> 22929 SE 436th Street</p>
                            <p className="tabInfo">Enumclaw, WA 98022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rodeo