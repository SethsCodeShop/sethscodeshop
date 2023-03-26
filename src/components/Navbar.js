import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Navbar = ({ onToggleTheme, darkTheme }) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [authMenuOpen, setAuthMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  function handleThemeMenuClick() {
    setThemeMenuOpen(!themeMenuOpen);
  }

  function handleAuthMenuClick() {
    setAuthMenuOpen(!authMenuOpen);
  }

  function handleNavbarTogglerClick() {
    if (isMobile) {
      setThemeMenuOpen(!themeMenuOpen);
      setAuthMenuOpen(!authMenuOpen);
    }
  }

  return (
    <nav className={`navbar navbar-expand-md ${darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top`}>
      <div className="container">
        <a className="navbar-brand">
          SethsCodeShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => handleNavbarTogglerClick()}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${themeMenuOpen || authMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {isMobile ? (
              <div>
                <button className="dropdown-item" onClick={onToggleTheme}>Toggle Theme</button>
                {!isAuthenticated ? (
                  <button className="dropdown-item" onClick={() => loginWithRedirect()}>Login</button>
                ) : null}
                {!isAuthenticated ? (
                  <button className="dropdown-item" onClick={() => loginWithRedirect()}>Sign up</button>
                ) : null}
                {isAuthenticated ? (
                  <button className="dropdown-item" onClick={() => logout()}>Logout</button>
                ) : null}
              </div>
            ) : null}
          </ul>
          <div className="d-flex align-items-center">
            {!isMobile ? (
              <div className="dropdown mr-2">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" onClick={handleThemeMenuClick}>
                  Theme
                </button>
                <div className={`dropdown-menu ${themeMenuOpen ? 'show' : ''}`} aria-labelledby="themeMenu">
                  <button className="dropdown-item" onClick={onToggleTheme}>Toggle Theme</button>
                </div>
              </div>
            ) : null}
            {!isMobile ? (
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" onClick={handleAuthMenuClick}>
                  {isAuthenticated ? 'Account' : 'Sign in/Sign up'}
                </button>
                <div className={`dropdown-menu ${authMenuOpen ? 'show' : ''}`} aria-labelledby="authMenu">
                  {isAuthenticated ? (
                    <button className="dropdown-item" onClick={() => logout()}>Logout</button>
                  ) : (
                    <button className="dropdown-item" onClick={() => loginWithRedirect()}>Login</button>
                  )}
                </div>
              </div>
            ) : null }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
