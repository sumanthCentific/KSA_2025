import React, { useState, useEffect } from 'react';
import beachImage from "../../assets/beach-image.jpg";
import foodImage from "../../assets/food-image.jpg";
import leapImage from "../../assets/leap-image.jpg";
import avatar01 from "../../assets/images/avatar-images.jpg";
import avatar02 from "../../assets/images/avatar-images-2.jpg";


const Carousel = () => {
  const images = [avatar01,avatar02,beachImage, foodImage, leapImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="carousel-container ">
      <div className="carousel-wrapper mt-5">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />

        {/* Navigation buttons */}
        <div className="carousel-buttons d-none">
          <button className="prev" onClick={prevImage}>
            &#10094;
          </button>
          <button className="next" onClick={nextImage}>
            &#10095;
          </button>
        </div>

        {/* Dot indicators */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span 
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
