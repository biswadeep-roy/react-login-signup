import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      navigate('/login', { replace: true }); // Navigate to login page
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={styles.navbar}>
      <Link className="navbar-brand" to="/">
        login-signup
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Add Others As Needed<span className="sr-only">(current)</span>
            </Link>
          </li>
         
        </ul>
        <a href="/login" className="btn btn-outline-danger ml-2" onClick={handleLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '5px', // Add 2px padding to both sides
  },
};

export default Navbar;
