import React, { useEffect } from 'react';
import yates from '../imgs/hollywood_yates.webp';
import blake from '../imgs/jared_blake.png';
import vinny from '../imgs/bigg_vinny.webp';

const Concerts = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    return (
        <div className="concertWrapper">
            <h1 className="concertPageTitle">Enumclaw Pro Rodeo Concert Series</h1>
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
    )
}

export default Concerts