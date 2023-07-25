import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="homeWrapper">
            <h1 className="homeTitle">Enumclaw Pro Rodeo</h1>
            <Link to="https://www.rodeoticket.com/rodeos/enumclaw-pro-rodeo/2023/tickets" target="_blank"><h1 className="ticketsTitle">Get Your Rodeo TICKETS HERE</h1></Link>
            <div className="info">
                <div className="infoLeft">
                    <h2 className="infoDate">August 25-27 2023</h2>
                    <h3 className="infoLocation">Enumclaw Expo Center</h3>
                    <h3>ENUMCLAW EXPO CENTER RODEO ARENA</h3>
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
                                <p className="prices">Seniors(65+)/Military/Veterans</p>
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
        </div>
    )
}

export default Home