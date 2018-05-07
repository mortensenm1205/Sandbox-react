import React from "react";
import { Route } from 'react-router-dom';
import Blog from '../../Components/Blog';

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
          return <Blog />;
        }}
      />
    </div>
  );
};

export default About;
