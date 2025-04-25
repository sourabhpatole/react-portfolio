import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/context";

const terms = ["0a1372ad-8614-424f-9313-a10342a93522"];
const hasAgreed = false;
const onAgree = () => {
  console.log("Agreed");
};
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
