import React from "react";
import Button from "@material-ui/core/Button";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Donate extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#edf7fc" />
                    Donate
                    <DonateButton />
                    <SubscribeButton />
                </div>
            </div>
        );
    }
}

const SubscribeButton = () => (
    <div className="button-container">
        <Button
            target="_blank"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Z989F9DMQU74N&currency_code=USD&source=url"
            className="donate-button"
            size="large"
        >
            Subscribe
        </Button>
    </div>
);

const DonateButton = () => (
    <div className="button-container">
        <Button
            target="_blank"
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=Z989F9DMQU74N&currency_code=USD&source=url"
            className="donate-button"
            size="large"
        >
            Donate
        </Button>
    </div>
);

export default Donate;
