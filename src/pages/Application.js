import React from "react";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Swirl from "../components/Swirl";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
        zipCode: ""
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

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
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
            zipCode
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
                return <Questionnaire />;
            case 2:
                return <PetSelection />;
            default:
                return "Unknown stepIndex";
        }
    };

    render() {
        const { activeStep } = this.state;

        console.log("phone number: ", this.state.phoneNumber);
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
            id="form-contact"
            className="application-form"
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
            <FormControl>
                <InputLabel htmlFor="age-simple">State</InputLabel>
                <Select
                    value={state}
                    onChange={handleChange("state")}
                    inputProps={{
                        name: "state",
                        id: "state-simple"
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {states.map(state => (
                        <MenuItem value={state}>{state}</MenuItem>
                    ))}
                </Select>
            </FormControl>
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

const Questionnaire = () => {
    return "Questionnaire";
};

const PetSelection = () => {
    return "here";
};

const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];

export default Application;
