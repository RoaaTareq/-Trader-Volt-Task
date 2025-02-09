// /src/index.js

import React from "react";
import ReactDOM from "react-dom/client"; // Changed from 'react-dom'
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
