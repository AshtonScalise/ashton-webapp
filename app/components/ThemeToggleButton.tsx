"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useThemeContext } from "../wrappers/ThemeProviderWrapper";

const ThemeToggleButton = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      <Brightness4Icon />
    </IconButton>
  );
};

export default ThemeToggleButton;
