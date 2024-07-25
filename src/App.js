import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main CSS
import './App.css';

// React MUI
import { ThemeProvider, CssBaseline } from "@mui/material";

// Pages
import GameLogic from './Pages/GameLogic/gameLogic';

// Components
import { DarkContext } from './Components/DarkContext';

// Main Function
function App() {

  const { darkTheme } = useContext(DarkContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="outer-wrapper">
        <div className='wrapper'>
          <Router>
            <Routes>
              <Route path='/' element={<GameLogic />} />
              <Route path='/*' element={'Not Found! 404'} />
            </Routes>
          </Router>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
