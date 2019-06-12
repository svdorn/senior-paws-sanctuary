import React from "react";
import Button from "@material-ui/core/Button";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Donate extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Donate</h1>
                </div>
                <div className="donate">
                    <div>
                        <h3>One-Time Donation</h3>
                        <img src={"/images/Icons/dog3.svg"} alt="Dog" height={60} />
                        <div>
                            Make a one-time donation to help give senior dogs a comfortable home to
                            live out their days in peace.
                        </div>
                        <DonateButton />
                    </div>
                    <div>
                        <h3>Monthly Subscription</h3>
                        <img src={"/images/Icons/dog1.svg"} alt="Dog" height={60} />
                        <div>
                            Contribute a set amount each month to provide a comfortable, loving and
                            safe environment for senior dogs.
                        </div>
                        <SubscribeButton />
                    </div>
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
