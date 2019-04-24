import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Foster extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container home-first-frame">
                    <Swirl fill="#edf7fc" />
                    Foster
                </div>
            </div>
        );
    }
}

export default Foster;
