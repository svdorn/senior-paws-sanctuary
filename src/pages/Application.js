import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Swirl from "../components/Swirl";
import TextField from "@material-ui/core/TextField";

import "./Pages.css";

class Application extends React.Component {
    state = {
        activeStep: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        streetAddress: "",
        city: "",
        state: "",
        zipCode: "",
        house: "",
        pets: ""
    };

    handleNext = () => {
        if (this.state.activeStep >= 2) {
            this.handleSubmit();
        } else {
            this.setState(state => ({
                activeStep: state.activeStep + 1
            }));
        }
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit = () => {
        document.getElementById("application-form").submit();
    };

    getStepContent = stepIndex => {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            streetAddress,
            city,
            state,
            zipCode,
            house,
            pets
        } = this.state;
        switch (stepIndex) {
            case 0:
                return (
                    <PersonalInformation
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        phoneNumber={phoneNumber}
                        streetAddress={streetAddress}
                        city={city}
                        state={state}
                        zipCode={zipCode}
                        handleChange={this.handleChange}
                    />
                );
            case 1:
                return <Questionnaire house={house} handleChange={this.handleChange} pets={pets} />;
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
                                <div className="application-buttons">
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

const PersonalInformation = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    streetAddress,
    city,
    state,
    zipCode,
    handleChange
}) => {
    return (
        <form
            action="https://dislack.com/send/5cba2caf7e1a631b44de68d8"
            method="post"
            className="application-form"
            id="application-form"
        >
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="First Name"
                variant="outlined"
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange("firstName")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="Last Name"
                variant="outlined"
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange("lastName")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                value={email}
                onChange={handleChange("email")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="Phone Number"
                variant="outlined"
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange("phoneNumber")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="Street Address"
                variant="outlined"
                type="text"
                name="streetAddress"
                value={streetAddress}
                onChange={handleChange("streetAddress")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="City"
                variant="outlined"
                type="text"
                name="city"
                value={city}
                onChange={handleChange("city")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="State"
                variant="outlined"
                type="text"
                name="state"
                value={state}
                onChange={handleChange("state")}
            />
            <TextField
                id="outlined-with-placeholder"
                className="text-field"
                label="Zip Code"
                variant="outlined"
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={handleChange("zipCode")}
            />
        </form>
    );
};

const Questionnaire = ({ house, pets, handleChange }) => {
    return (
        <div className="application-questionnaire">
            <FormControl component="fieldset">
                <FormLabel component="legend">Do you rent or own a house?</FormLabel>
                <RadioGroup
                    aria-label="House"
                    name="house"
                    value={house}
                    onChange={handleChange("house")}
                >
                    <FormControlLabel value="rent" control={<Radio />} label="Rent" />
                    <FormControlLabel value="own" control={<Radio />} label="Own" />
                </RadioGroup>
            </FormControl>
            <br />
            <FormControl component="fieldset" className="application-radio-group">
                <FormLabel component="legend">Do you have pets?</FormLabel>
                <RadioGroup
                    aria-label="Pets"
                    name="pets"
                    value={pets}
                    onChange={handleChange("pets")}
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

const PetSelection = () => {
    return (
        <div>
            <img src={"/images/Icons/dog2.svg"} alt="Dog" height={70} />
            <br />
            <div style={{ margin: "auto", maxWidth: "700px" }}>
                We currently don't have any dogs avaliable for adoption. Please submit your
                application and we will reach out to you when we have dogs available.
            </div>
        </div>
    );
};

export default Application;
