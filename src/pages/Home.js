import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "../components/Card";
import Swirl from "../components/Swirl";

import "./Pages.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends React.Component {
    state = {
        activeStep: 0
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { activeStep } = this.state;

        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#edf7fc" />
                    <div className="header-name">Senior Paws Sanctuary</div>
                    <div className="header-text">
                        Help us give senior dogs a comfortable home to live out their days in peace.
                    </div>
                    <DonateButton />
                </div>
                <div className="frame-container">
                    <Swirl fill="#ffe289" />
                    <Cards />
                </div>
                <div className="frame-contianer background-red">
                    <Swirl fill="#edf7fc" />
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

const Cards = () => {
    return (
        <div className="cards">
            <Card
                img="/images/Lily/Bodyshot_1.jpg"
                imgWidth={110}
                title="Dance"
                content="Lily is trained in a variety of styles since a young age, including contemporary, jazz, hip hop, modern, ballet, ballroom, and tap."
                link="/dance"
            />
            <Card
                img="/images/Chapman.jpg"
                imgWidth={150}
                title="Education"
                content="Lily is studying at Chapman University where she will graduate in May with a BFA in Dance Performance and a minor in Studio Art."
                link="/about"
            />
            <Card
                img="/images/Lily/Danceshot_2.jpg"
                imgWidth={110}
                title="Choreography"
                content=" During her time at Chapman, Lily has choreographed for multiple shows, such as Spring Dance Concert, Concert Intime, and Chapman Dance Alliance."
                link="/choreography"
            />
        </div>
    );
};

const GoToDance = props => <Link to="/dance" {...props} />;

export default Home;
