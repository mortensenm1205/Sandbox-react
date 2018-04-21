import React from "react";
import Home from "./Home/Home";
import Services from "./Services/Services";
import About from "./About/About";
import NavBar from '../Components/Navbar';
import Footer from "../Components/Footer";
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
        path="/translation"
        render={() => {
          return <Services type="Translation" />;
        }}
      />
      <Route
        exact
        path="/interpretation"
        render={() => {
          return <Services type="Interpretation" />;
        }}
      />
      <Route
        exact
        path="/about"
        render={() => {
          return <About page="About" />;
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
