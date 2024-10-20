"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

// Define a context for theme
const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | null>(null);

// Create custom dark and light themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Theme Provider wrapper that manages theme state and localStorage
export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme); // Default to dark theme

  // Load theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme); // Default to dark if no theme is saved
    }
  }, []);

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme.palette.mode === "light" ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme.palette.mode); // Save the selected theme to localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProviderWrapper"
    );
  }
  return context;
};
