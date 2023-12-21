// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectHome, setRedirectHome] = useState(true);

  // Set redirectHome to false when the component mounts
  useEffect(() => {
    setRedirectHome(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setRedirectHome(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setRedirectHome(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              redirectHome ? (
                <Navigate to="/login" replace />
              ) : (
                <Home isAuthenticated={isAuthenticated} onLogout={handleLogout} redirectHome={redirectHome} />
              )
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <div style={{ marginTop: 'auto', textAlign: 'center' }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
