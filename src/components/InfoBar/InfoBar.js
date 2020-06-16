import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
// styles
import './InfBar.css'


function InfoBar ({ room }) {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                {/* <img className="onlineIcon" src={onlineIcon} alt="online" /> */}
                <h3>{room} room</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
    )
}



export default InfoBar;