import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
// import Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import all pages
import Adopt from "./pages/Adopt";
import Application from "./pages/Application";
import Contact from "./pages/Contact";
import CorporateSponsorships from "./pages/CorporateSponsorships";
import Donate from "./pages/Donate";
import Foster from "./pages/Foster";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import OurStory from "./pages/OurStory";
import Surrender from "./pages/Surrender";
import Volunteer from "./pages/Volunteer";

import "./App.css";

const palette = {
    primary: {
        main: "#ffe289"
    },
    secondary: {
        main: "#000000"
    }
};

const theme = createMuiTheme({ palette });

const App = () => (
    <Router>
        <ScrollToTop>
            <MuiThemeProvider theme={theme}>
                <Header />

                <div className="App">
                    <Route path="/" exact component={Home} />
                    <Route path="/adopt" component={Adopt} />
                    <Route path="/application" component={Application} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/corporate-sponsorships" component={CorporateSponsorships} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/foster" component={Foster} />
                    <Route path="/mission" component={Mission} />
                    <Route path="/our-story" component={OurStory} />
                    <Route path="/surrender" component={Surrender} />
                    <Route path="/volunteer" component={Volunteer} />
                </div>

                <Footer />
            </MuiThemeProvider>
        </ScrollToTop>
    </Router>
);

export default App;
