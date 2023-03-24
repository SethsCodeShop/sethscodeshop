import React from 'react';
import ImageCarousel from './ImageCarousel';

const Header = () => {
  return (
    <div className="text-center mb-4">
      {/* <img
        src={ProfileImage}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      /> */}
      <ImageCarousel />
      <header>
        <h1 className="display-4">Seth Garlett</h1>
        <p>
          <a href='mailto:skgarlett@gmail.com'>skgarlett@gmail.com</a> |{' '}
          <a
            href="https://www.linkedin.com/in/sethgarlett"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none"
          >
            LinkedIn
          </a>
          <a>{' '}|{' '}</a>
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
