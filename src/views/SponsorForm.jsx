import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Sponsor_Form = () => {
    const form = useRef();
    const [company, setCompany] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [validEmailError, setValidEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [numberLengthError, setNumberLengthError] = useState(false);
    let valid = true;
    let validEmail = false;
    let navigate = useNavigate();

    // EmailJs Information
    const publicKey = "";
    const templateId = "";
    const serviceId = "";

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const checkValues = (first, last, phone, email) => {
        valid = true;
        if(first.length < 1){
            setFirstNameError(true);
            valid = false;
        } else {
            setFirstNameError(false);
        }

        if(last.length < 1){
            setLastNameError(true);
            valid = false;
        } else {
            setLastNameError(false);
        }

        if(phone.length < 1){
            setPhoneNumberError(true);
            valid = false;
        } else {
            setPhoneNumberError(false);
        }

        if(phone.length !== 10) {
            setNumberLengthError(true);
            valid = false;
        } else {
            setNumberLengthError(false);
        }

        validEmail = isValidEmail(email);

        if(!validEmail) {
            setValidEmailError(true);
            valid = false;
        } else {
            setValidEmailError(false);
        }

        if(email.length < 1){
            setEmailError(true);
            valid = false;
        } else {
            setEmailError(false);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();

        checkValues(firstName, lastName, phoneNumber, email);

        if(valid){
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            navigate("/");
        }
    }

    return (
        <div className="sponsorFormWrapper">
            <h1 className="sponsorFormTitle">Become a Sponsor</h1>
            <p className="sponsorFormSubTitle">To become a sponsor, please fill out this form.</p>
            
            {/* Sponsor Form */}
            <form onSubmit={sendEmail} ref={form} className="sponsorForm">
                <div className="formLine">
                    <input type="text" name="company" id="company" placeholder='Company (optional)' className="companyInput" onChange={(e) => setCompany(e.target.value)} value={company}/>
                </div>
                <div className="formLine">
                    <div className="formDiv">
                        <input type="text" name="first_name" id="firstName" placeholder='First Name' className="formInput" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        {firstNameError ? <p className="error">First Name is Required</p> : ""}
                    </div>
                    <div className="formDiv">
                        <input type="text" name="last_name" id="lastName" placeholder='Last Name' className="formInput" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        {lastNameError ? <p className="error">Last Name is Required</p> : ""}
                    </div>
                </div>
                <div className="formLine">
                    <div className="formDiv">
                        <input type="text" name="email" id="email" placeholder='Email' className="formInput" onChange={(e) => setEmail(e.target.value)} value={email} />
                        {emailError ? <p className="error">Email is Required</p> : ""}
                        {validEmailError && !emailError ? <p className="error">Email format incorrect</p> : ""}
                    </div>
                    <div className="formDiv">
                        <input type="text" name="phone" id="phone" placeholder='Phone Number' className="formInput" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                        {phoneNumberError ? <p className="error">Phone Number is required</p>: ""}
                        {numberLengthError && !phoneNumberError ? <p className="error">Number must be 10 digits long</p> : ""}
                    </div>
                </div>
                <input type="submit" value="Submit" className="formSubmit"/>
            </form>
            
            {/* Platinum Sponsor Bundle */}
            <div className="bundles">
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
        </div>
    )
}

export default Sponsor_Form