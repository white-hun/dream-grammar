import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./AppXY.css";
// import App from "./App";
// import AppProfile from "./AppProfile";
// import AppCounter from "./AppCounter";
// import AppProducts from "./AppProducts";
// import AppXY from "./AppXY";
// import AppMentor from "./AppMentor";
// import AppMentors from "./AppMentors";
// import AppMentorsImmer from "./AppMentorsImmer";
import Appfrom from "./Appfrom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appfrom />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
