import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./state/ThemeContext";
import "./styles.css";

export default function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? "dark" : "";
  return (
    <div className={"App " + themeClass}>
      <ThemeToggle />
    </div>
  );
}
