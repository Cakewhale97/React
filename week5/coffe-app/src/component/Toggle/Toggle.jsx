import { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.style.setProperty(
        "--light-background",
        "#3E2723"
      );
      document.documentElement.style.setProperty("--light-text", "#ffffff");
    } else {
      document.documentElement.style.setProperty(
        "--light-background",
        "#F0EDEB"
      );
      document.documentElement.style.setProperty("--light-text", "#000000");
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
