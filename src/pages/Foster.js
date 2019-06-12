import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Foster extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Foster</h1>
                </div>
                <div className="foster">
                    <div>
                        We currently don't have any dogs avaliable to foster
                        <br />
                        <img src={"/images/Icons/dog2.svg"} alt="Dog" height={70} />
                    </div>
                    <div>
                        Please consider donating so we can help find senior dogs a home.Your
                        donation will help us take care of many Senior Dogs in need. To provide a
                        comfortable, loving and safe environment for seniors to live out their last
                        years in a suitable adoption home or a permanent foster donate below.
                    </div>
                    <DonateButton />
                </div>
            </div>
        );
    }
}

const DonateButton = () => (
    <div className="button-container">
        <Button component={GoToDonate} className="donate-button" size="large">
            Donate
        </Button>
    </div>
);

const GoToDonate = props => <Link to="/donate" {...props} />;

export default Foster;
