import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import About from "./About/About";
import NavBar from '../Components/Navbar';
import { Route } from "react-router-dom";
   
const App = () => {
  return (
    <div>
      <NavBar />
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
