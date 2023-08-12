import React from 'react'

const Sponsor_Form = () => {
    const sendEmail = () => {
        
    }

    return (
        <div className="sponsorFormWrapper">
            <h1 className="sponsorFormTitle">Become a Sponsor</h1>
            <p className="sponsorFormSubTitle">To become a sponsor, please fill out this form.</p>
            
            {/* Sponsor Form */}
            <form action={sendEmail} className="sponsorForm">
                <div className="formLine">
                    <input type="text" name="first_name" id="firstName" placeholder='First Name' className="formInput"/>
                    <input type="text" name="last_name" id="lastName" placeholder='Last Name' className="formInput"/>
                </div>
                <div className="formLine">
                    <input type="text" name="email" id="email" placeholder='Email' className="formInput"/>
                    <input type="text" name="phone" id="phone" placeholder='Phone Number' className="formInput"/>
                </div>
                <input type="submit" value="Submit" className="formSubmit"/>
            </form>
            
            {/* Platinum Sponsor Bundle */}
            <div className="platinumBundle">
                <h3 className="bundleTitle">Platinum - $5000.00</h3>
                <ul>
                    <li className="bundleText">EPRA Sponsor Buckle</li>
                    <li className="bundleText">Bucking/Timed Event Chute Placard - One of seven (7) options</li>
                    <li className="bundleText">Grand Entry / Event Flag - presented during each performance</li>
                    <li className="bundleText">Two Arena Banners - places inside the arena</li>
                    <li className="bundleText">One Grandstand Banner - placed above the seating</li>
                    <li className="bundleText">Rodeo Program Recognition / Advertising</li>
                    <li className="bundleText">EPR Webpage Recognition</li>
                    <li className="bundleText">Eight (8) General Admission Tickets - Each performance</li>
                    <li className="bundleText">Eight (8) Catered VIP Hospitality Tickets - Each performance</li>
                </ul>
            </div>

            {/* Gold Sponsor Bundle */}
            <div className="goldBundle">
                <h3 className="bundleTitle">Gold - $3000.00</h3>
                <ul>
                    <li className="bundleText">Arena Gate Banner - One of four (4) options</li>
                    <li className="bundleText">Grand Entry / Event Flag - presented during each performance</li>
                    <li className="bundleText">Two Arena Banners - places inside the arena</li>
                    <li className="bundleText">One Grandstand Banner - placed above the seating</li>
                    <li className="bundleText">Rodeo Program Recognition / Advertising</li>
                    <li className="bundleText">EPR Webpage Recognition</li>
                    <li className="bundleText">Six (6) General Admission Tickets - Each performance</li>
                    <li className="bundleText">Six (6) Catered VIP Hospitality Tickets - Each performance</li>
                </ul>
            </div>

            {/* Silver Sponsor Bundle */}
            <div className="silverBundle">
                <h3 className="bundleTitle">Silver - $2000.00</h3>
                <ul>
                    <li className="bundleText">Grand Entry / Event Flag - presented during each performance</li>
                    <li className="bundleText">Two Arena Banners - places inside the arena</li>
                    <li className="bundleText">One Grandstand Banner - placed above the seating</li>
                    <li className="bundleText">Rodeo Program Recognition / Advertising</li>
                    <li className="bundleText">EPR Webpage Recognition</li>
                    <li className="bundleText">Six (6) General Admission Tickets - Each performance</li>
                    <li className="bundleText">Six (6) Catered VIP Hospitality Tickets - Each performance</li>
                </ul>
            </div>

            {/* Bronze Sponsor Bundle */}
            <div className="bronzeBundle">
            <h3 className="bundleTitle">Bronze - $1000.00</h3>
                <ul>
                    <li className="bundleText">Two Grandstand Banner - placed above the seating</li>
                    <li className="bundleText">Rodeo Program Recognition / Advertising</li>
                    <li className="bundleText">EPR Webpage Recognition</li>
                    <li className="bundleText">Four (4) General Admission Tickets - Each performance</li>
                    <li className="bundleText">Four (4) Catered VIP Hospitality Tickets - Each performance</li>
                </ul>
            </div>
        </div>
    )
}

export default Sponsor_Form