import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "react-router-scroll-top";

import "./App.css";

const App = () => (
    <Router>
        <ScrollToTop>
            <Header />

            <div className="App">
                <Route path="/" exact component={Home} />
            </div>

            <Footer />
        </ScrollToTop>
    </Router>
);

export default App;
