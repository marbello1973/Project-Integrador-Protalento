import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/store.ts";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
