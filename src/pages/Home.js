import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#edf7fc" />
                    <div className="header-name">
                        <b>Senior Paws Sanctuary</b>
                    </div>
                    <div className="header-text">
                        Help us give senior dogs a comfortable home to live out their days in peace.
                    </div>
                    <DonateButton />
                </div>
                <div className="frame-container">
                    <Swirl fill="#ffe289" />
                    <About />
                </div>
                <div className="frame-contianer background-yellow">
                    <div className="link-cards-header">Get Involved!</div>
                    <LinkCards />
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

const About = () => (
    <div className="home-about">
        <div>
            Welcome to Senior Paws Sanctuary!
            <br />
            <img src={"/images/stuff/dog.svg"} alt="Dog" height={70} />
        </div>
        <div>
            Senior Paws Sanctuary, located in Madison Wisconsin, is a senior dog rescue. We provide
            loving homes to senior dogs to live out their days comfortably.
        </div>
    </div>
);

const LinkCards = () => (
    <div className="link-cards">
        <LinkCard img="/images/Dogs/Dog1.jpg" title="Adopt" link="/adopt" />
        <LinkCard img="/images/Dogs/Dog2.jpg" title="Foster" link="/foster" />
        <LinkCard img="/images/Dogs/Malinois.jpg" title="Volunteer" link="/volunteer" />
        <LinkCard img="/images/Dogs/Pug.jpg" title="Donate" link="/donate" />
    </div>
);

export default Home;
