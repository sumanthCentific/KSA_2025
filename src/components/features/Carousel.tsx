import React, { useState } from 'react';

interface CarouselProps {
  images: string[]; // An array of image URLs
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after the last image
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Go to the last image if at the first one
    );
  };

  return (
    <div className="carousel-container" style={styles.carouselContainer}>
      <button onClick={prevImage} className="prev-button" style={styles.button}>
        &lt; {/* Previous Button */}
      </button>
      <img src={images[currentIndex]} alt={`carousel-image-${currentIndex}`} style={styles.image} />
      <button onClick={nextImage} className="next-button" style={styles.button}>
        &gt; {/* Next Button */}
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  carouselContainer: {
    position: 'relative',
    width: '600px',
    height: '400px',
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '24px',
    cursor: 'pointer',
    borderRadius: '50%',
  },
};

export default Carousel;
