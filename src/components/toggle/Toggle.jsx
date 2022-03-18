import React, { useContext } from "react";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "./toggle.css";
import { ThemeContext } from "../../context/context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleclick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleclick}
        style={{ right: theme.state.darkMode ? 32 : 0 }}
      ></div>
      {/* condition to add toggle */}
    </div>
  );
};

export default Toggle;
