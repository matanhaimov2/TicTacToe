import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main CSS
import './App.css';

// Pages
import GameLogic from './Pages/GameLogic/gameLogic';

// Functions
function gamelogic() {
  return <GameLogic />;
}

// Main Function
function App() {
  return (
    <div className="outer-wrapper">
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path='/' element={ gamelogic() } />
            <Route path='/*' element={ 'Not Found! 404' } />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
