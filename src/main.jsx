import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers/index.js";

const store = configureStore({
  reducer: allReducers,
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
