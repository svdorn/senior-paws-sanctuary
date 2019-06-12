import React from "react";
import Paper from "@material-ui/core/Paper";
import Swirl from "../components/Swirl";

import "./Pages.css";

class OurStory extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Our Story</h1>
                </div>
                <Paper className="our-story">
                    In May of 2018, I was working at the local animal shelter in Madison, Wisconsin
                    when I passed a stray dog coming in. He was walking very slowly and seemed to be
                    very old. When he and my coworker walked up, he ran right into me! As I pet him,
                    I quickly realized he was not only blind, but deaf as well. I visited him every
                    day while we waited for someone to claim him, growing attached and even naming
                    him Louis. Unfortunately no one did and he was scheduled to be euthanized
                    because the shelter didn’t have the resources to take care of his medical needs.
                    I decided to take him home and let him live out his days in peace. Louis and I
                    spent 2 short but wonderful months together before his quality of life
                    deteriorated to the point that he had to be humanely euthanized. During this
                    time, I realized that that are so many more dogs out there that don’t stand a
                    chance in shelters because of their age. I decided to create Senior Paws
                    Sanctuary, a rescue organization dedicated to giving homeless senior dogs a
                    place to live out their days in peace.
                    <div>
                        Mollie Hockersmith
                        <br />
                        Executive Director of Senior Paws Sanctuary
                    </div>
                </Paper>
            </div>
        );
    }
}

export default OurStory;
