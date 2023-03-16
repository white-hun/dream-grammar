import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const changeTheme = () => toggleDarkMode();
  return (
    <div>
      Product Detail
      <p>
        Darkmode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>Dark Mode</span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={changeTheme}>Toggle</button>
    </div>
  );
}
