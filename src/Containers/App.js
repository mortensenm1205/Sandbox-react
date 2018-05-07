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
        render={() => <Home imgType="our_clients"/>}
      />
      {/*
        Placed <About /> and <Service /> in here and moved the corresponding routes to that
        those components just because they have nested components that would be too long to list in this one spot
      */}
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;
