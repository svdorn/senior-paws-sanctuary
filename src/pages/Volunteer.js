import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Volunteer extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Volunteer</h1>
                </div>
                <div className="volunteer">
                    <img src={"/images/Icons/dog3.svg"} alt="Dog" height={70} />
                    <br />
                    <br />
                    To volunteer, please email us at seniorpawssanctuarywi@gmail.com and let us know
                    how you'd like to help out! We're always looking for people passionate about
                    dogs to help in any way they can.
                </div>
            </div>
        );
    }
}

export default Volunteer;
