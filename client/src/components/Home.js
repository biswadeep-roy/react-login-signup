import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = ({ isAuthenticated, onLogout, redirectHome }) => {
  return (
    <div>
      <Navbar onLogout={onLogout} isAuthenticated={isAuthenticated} />
      <div className="container mt-5">
        <h2>Welcome to the Home Page</h2>
        {isAuthenticated ? (
          <p>You are logged in. Feel free to explore the content!</p>
        ) : (
          <p>
            Please <a href="/login">log in</a> or <a href="/register">register</a> to access the features.
          </p>
        )}
      </div>
      
    </div>
    
  );
};

export default Home;
