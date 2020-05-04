import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import App from "./components/App";

const AppRoot = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppRoot />, document.getElementById("root"));