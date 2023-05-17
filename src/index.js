import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// Find all widget divs
const widgetDivs = document.querySelectorAll(".tfg-widget");

/* root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
widgetDivs.forEach((div) => {
  ReactDOM.createRoot(div).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
