import React from "react";
import { render } from "react-dom";
import App from "./Containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render(
  <Router>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
