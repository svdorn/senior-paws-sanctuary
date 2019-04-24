import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
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

const App = () => (
    <Router>
        <ScrollToTop>
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
        </ScrollToTop>
    </Router>
);

export default App;
