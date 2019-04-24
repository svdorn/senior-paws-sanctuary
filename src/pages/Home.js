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
                    <div className="home-header">
                        <div className="header-name">
                            <b>Senior Paws Sanctuary</b>
                        </div>
                        <div className="header-text">
                            Help us give senior dogs a comfortable home to live out their days in
                            peace.
                        </div>
                        <DonateButton />
                    </div>
                </div>
                <div className="frame-container">
                    <Swirl fill="#ffe289" />
                    <About />
                </div>
                <div className="frame-container background-yellow">
                    <Swirl fill="#edf7fc" />
                    <div>
                        <div className="link-cards-header">Get Involved!</div>
                        <LinkCards />
                    </div>
                </div>
                <div className="last-frame">
                    <Donate />
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

const Donate = () => (
    <div className="home-about">
        <div>
            Help us Take Care of Senior Dogs!
            <br />
            <img src={"/images/Icons/dog2.svg"} alt="Dog" height={70} />
        </div>
        <div>
            Your donation will help us take care of many Senior Dogs in need. To provide a
            comfortable, loving and safe environment for seniors to live out their last years in a
            suitable adoption home or a permanent foster donate below.
        </div>
        <DonateButton />
    </div>
);
const About = () => (
    <div className="home-about">
        <div>
            Welcome to Senior Paws Sanctuary!
            <br />
            <img src={"/images/Icons/dog.svg"} alt="Dog" height={70} />
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
