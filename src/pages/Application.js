import React from "react";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Swirl from "../components/Swirl";
import TextField from "@material-ui/core/TextField";

import "./Pages.css";

class Application extends React.Component {
    state = {
        activeStep: 0,
        name: "",
        email: "",
        subject: "",
        message: ""
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1
        }));
    };
    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    };

    getStepContent = stepIndex => {
        switch (stepIndex) {
            case 0:
                return (
                    <PersonalInformation
                        name={this.state.name}
                        email={this.state.email}
                        subject={this.state.subject}
                        message={this.state.message}
                        handleChange={this.handleChange}
                    />
                );
            case 1:
                return <Questionnaire />;
            case 2:
                return <PetSelection />;
            default:
                return "Unknown stepIndex";
        }
    };

    render() {
        const { activeStep } = this.state;
        return (
            <div className="container">
                <div className="first-frame-container first-frame-header background-yellow">
                    <Swirl fill="#edf7fc" />
                    <h1 className="header">Adoption Application</h1>
                </div>
                <div>
                    <Stepper
                        activeStep={activeStep}
                        style={{
                            background: "transparent",
                            margin: "auto",
                            width: "92%",
                            maxWidth: "700px"
                        }}
                    >
                        {steps.map(label => (
                            <Step key={label} style={{ maxWidth: "200px", margin: "auto" }}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Button onClick={this.handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <div>
                                {this.getStepContent(activeStep)}
                                <div styleName="application-buttons">
                                    <Button disabled={activeStep === 0} onClick={this.handleBack}>
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleNext}
                                        style={{ marginLeft: "20px" }}
                                    >
                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const steps = ["Personal Information", "Questionnaire", "Pet Selection"];

const PersonalInformation = ({ name, email, subject, message, handleChange }) => {
    return (
        <div className="application-form">
            <form
                action="https://dislack.com/send/5cba2caf7e1a631b44de68d8"
                method="post"
                id="form-contact"
            >
                <TextField
                    id="outlined-with-placeholder"
                    className="text-field"
                    label="Name"
                    variant="outlined"
                    type="text"
                    name="name"
                    value={name}
                    onChange={() => handleChange("name")}
                />
                <TextField
                    id="outlined-with-placeholder"
                    className="text-field"
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    value={email}
                    onChange={() => handleChange("email")}
                />
                <TextField
                    id="outlined-with-placeholder"
                    className="text-field"
                    label="Subject"
                    type="text"
                    name="subject"
                    variant="outlined"
                    value={subject}
                    onChange={() => handleChange("subject")}
                />
                <TextField
                    id="outlined-with-placeholder"
                    className="text-field-multiline"
                    rows="4"
                    label="Message"
                    type="text"
                    name="message"
                    variant="outlined"
                    multiline
                    value={message}
                    onChange={() => handleChange("message")}
                />
            </form>
        </div>
    );
};

const Questionnaire = () => {
    return "Questionnaire";
};

const PetSelection = () => {
    return "here";
};

export default Application;
