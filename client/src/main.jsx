import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./app/store";

import App from "./App.jsx";

import { CSSReset, AppStyles } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <CSSReset />
        <AppStyles />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
