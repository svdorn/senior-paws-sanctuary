import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class CorporateSponsorships extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Corporate Sponsorships</h1>
                </div>
                <div className="volunteer">
                    <img src={"/images/Icons/dog1.svg"} alt="Dog" height={70} />
                    <br />
                    <br />
                    If you're interested in being a corporate sponsor, please email us at
                    seniorpawssanctuarywi@gmail.com.
                </div>
            </div>
        );
    }
}

export default CorporateSponsorships;
