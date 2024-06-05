import '../assets/styles/App.css';
import React, { useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate}  from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import DashboardPage from './DashboardPage.js';
import LoginPage from './LoginPage.js';
import TankTalkerAIPage from './TankTalkerAI/TankTalkerAIPage.js'
import HomePage from "./HomePage.js";
function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/tanktalkerai" element={<TankTalkerAIPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
