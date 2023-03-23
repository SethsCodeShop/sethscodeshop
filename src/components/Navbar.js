import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          SethsCodeShop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
                {!isAuthenticated && (
                <li className="nav-item">
                    <a className="nav-link nav-link" onClick={() => loginWithRedirect()} rel="noopener noreferrer">
                    Sign in/Sign up
                    </a>
                </li>
                )}
                {isAuthenticated && (
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    {user.name}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item nav-link" href="#" onClick={() => logout()}>
                        Logout
                    </a>
                    </div>
                </li>
                )}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
