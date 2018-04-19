import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import About from "./About/About";
import { Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route
        exact
        path="/"
        render={() => {
          return <Home page="Home" />;
        }}
      />
      <Route
        exact
        path="/services"
        render={() => {
          return <Services page="Services" />;
        }}
      />
      <Route
        exact
        path="/about"
        render={() => {
          return <About page="About" />;
        }}
      />
    </div>
  );
};

export default App;
