import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Mission extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Mission</h1>
                </div>
                <div className="mission">
                    <div className="mission-statement">
                        Senior Paws Sanctuary is a nonprofit organization dedicated to giving senior
                        dogs a comfortable home to live out their days in peace.
                    </div>
                    <div className="mission-values">
                        <h1>Our Values</h1>
                        <div>
                            <Value
                                title="Compassion"
                                content="Compassion is at the heart of our organization. Senior dogs face lower adoption rates and higher euthanization rates in shelters because they are deemed as unfit adoption candidates. We value compassion because we give these dogs a second chance at life by giving them a peaceful home to live out their days."
                            />
                            <Value
                                title="Commitment"
                                content="We value commitment because our vision is for every dog in the world to have a comfortable place to live out their days. An organization like this faces many setbacks, including low adoption rates and high veterinary expenses. It is vital for our stakeholders to stay committed to our cause to continue saving lives."
                            />
                            <Value
                                title="Education"
                                content="The end goal of our organization is to find loving homes for senior dogs in the Madison area. Education is a fundamental value to our mission because the public holds unfair stereotypes about senior dogs, which limits their chance of adoption. By increasing awareness about how great senior dogs are as pets, we can increase the number of people looking for seniors and save more dogs."
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const Value = ({ title, content }) => (
    <p>
        <h3>{title}</h3>
        {content}
    </p>
);

export default Mission;
