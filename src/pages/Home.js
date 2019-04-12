import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "../components/Card";

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
                    <div style={{ textAlign: "center", fontSize: "40px" }}>
                        <img height={400} src="/images/logo.png" />
                        <div style={{ fontSize: "20px", width: "500px", margin: "auto" }}>
                            Senior Paws Sanctuary is a nonprofit organization dedicated to giving
                            senior dogs a comfortable home to live out their days in peace.
                        </div>
                        <div
                            style={{
                                marginTop: "50px"
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: "#5cdb59",
                                    color: "#ffffff",
                                    fontSize: "24px",
                                    padding: "12px 36px"
                                }}
                            >
                                DONATE
                            </Button>
                        </div>
                    </div>
                </div>

                <Cards />
            </div>
        );
    }
}

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

const images = [
    {
        label: `Headshot_1`,
        imgPath: "/images/Lily/Headshot_1.jpg"
    },
    {
        label: `Bodyshot_1`,
        imgPath: "/images/Lily/Bodyshot_1.jpg"
    },
    {
        label: `Danceshot_1`,
        imgPath: "/images/Lily/Danceshot_1.jpg"
    },
    {
        label: `Headshot_2`,
        imgPath: "/images/Lily/Headshot_2.jpg"
    },
    {
        label: `Bodyshot_2`,
        imgPath: "/images/Lily/Bodyshot_2.jpg"
    },
    {
        label: `Danceshot_2`,
        imgPath: "/images/Lily/Danceshot_2.jpg"
    }
];

export default Home;
