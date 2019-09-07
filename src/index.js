import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";

import avengersData from "../data/avengersData";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <ul className="navbar">
                <li>
                    <NavLink exact to="/" activeClassName="activeNavButton">
                        Home
          </NavLink>
                </li>
                <li>
                    <NavLink to="/avengers" activeClassName="activeNavButton">
                        Avengers
          </NavLink>
                </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route
                exact
                path="/avengers"
                render={props => (
                    <AvengersList {...props} avengersList={avengersData} />
                )}
            />
            <Route
                path="/avengers/:avengerId"
                render={props => (
                    <Avenger {...props} avengersList={avengersData} /> // spread in props --> same as "match={props.match} location={props.location} history={props.history}"
                )}
            />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    rootElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
