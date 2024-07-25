import React, { createContext, useState } from 'react';

// React Mui
import { createTheme } from "@mui/material/styles";

export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',

      },
    },
  });

  return (
    <DarkContext.Provider value={{ toggleDarkMode, toggleDarkTheme, darkTheme }}>
      {children}
    </DarkContext.Provider>
  );
};
