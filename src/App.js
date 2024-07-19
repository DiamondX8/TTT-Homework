import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Color} from './View/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Color />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
