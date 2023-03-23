import React from 'react';
import ProfileImage from '../images/LinkedIn.jpg';

const Header = () => {
  return (
    <div className="text-center mb-4">
      <img
        src={ProfileImage}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <header>
        <h1 className="display-4">Seth Garlett</h1>
        <p>
          <a href='mailto:skgarlett@gmail.com'>skgarlett@gmail.com</a> | Number Upon Request |{' '}
          <a
            href="https://www.linkedin.com/in/sethgarlett"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            LinkedIn |{' '}
          </a>
          <a 
            href='https://github.com/SethsCodeShop?tab=repositories'
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            GitHub
          </a>
        </p>
      </header>
    </div>
  );
};

export default Header;
