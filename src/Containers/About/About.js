import React from "react";
import { Route } from 'react-router-dom';

const About = props => {
  /*
    Here i'm placing in my Route's, will replace h1's with Blog and Our Team Component
  */
  return (
    <div>
      <Route
        exact
        path="/blog"
        render={() => {
          return <h1>Hello</h1>;
        }}
      />
      <Route
        exact
        path="/ourTeam"
        render={() => {
          return <h1>Hello again</h1>;
        }}
      />
    </div>
  );
};

export default About;
