import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h1>My App</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;