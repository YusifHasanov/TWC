import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./root/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript, extendTheme } from "@chakra-ui/react";
import "react-alice-carousel/lib/alice-carousel.css";
import myTheme from "./features/chakraUI/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
