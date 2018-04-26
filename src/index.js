import React from "react";
import { render } from "react-dom";
import App from "./Containers/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from './Store/configStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore();

render(
    <Router>
      <MuiThemeProvider>
        <Provider store={store} >
          <App />
        </Provider>
      </MuiThemeProvider>
    </Router>,
  document.getElementById("root")
);
