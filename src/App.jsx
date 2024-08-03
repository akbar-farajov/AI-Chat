import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const App = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className="bg-background-light dark:bg-background-dark h-[100vh]">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      >
        {!darkMode ? "dark" : "light"}
      </button>
      <div className="p-6">
        <h1 className="text-2xl text-black dark:text-white">Hello, world!</h1>
      </div>
    </div>
  );
};

export default App;
