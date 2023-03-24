import React, { useState } from 'react';
import Headshot from '../images/Headshot.jpeg';
import LinkedIn from '../images/LinkedIn.jpg';

const Images = [
  {
    src: Headshot,
    altText: 'Headshot',
  },
  {
    src: LinkedIn,
    altText: 'LinkedIn'
  }
];

const ImageCarousel = () => {
  const [carouselNumber, setCarouselNumber] = useState(0);

  const handlePrevClick = () => {
    setCarouselNumber(carouselNumber === 0 ? Images.length - 1 : carouselNumber - 1);
  };

  const handleNextClick = () => {
    setCarouselNumber((carouselNumber + 1) % Images.length);
  };

  return (
    <div id="ProfileImageCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {Images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === carouselNumber ? 'active' : ''}`}>
            <img
              src={image.src}
              alt={image.altText}
              className="rounded-circle mb-3"
              style={{ width: '350px', height: '350px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" role="button" data-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" role="button" data-slide="next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ImageCarousel;