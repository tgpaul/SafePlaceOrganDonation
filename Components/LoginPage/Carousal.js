import DonorSignup from './DonorSignUp.js'

import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    <div><DonorSignup /></div>,
    <div>Page 2 content</div>,
    <div>Page 3 content</div>
  ];

  const handlePageChange = (newIndex) => {
    setActiveIndex(newIndex);
  }

  return (
    <div>
      {/* This is a mini navbar used for the carousal, this replaced the previous MiniNavbar */}
      <nav>
        <button className='Corusal_buttons'>Home</button>
        {pages.map((page, index) => (
          <button className='Corusal_buttons' key={index} onClick={() => handlePageChange(index)}>
            {index === 0 ? 'Donor Login' : index === 1 ? 'Donor Signup' : 'Hospital Login'}
          </button>
        ))}
      </nav>
      <div>
        {pages[activeIndex]}
      </div>
    </div>
  );
}

export default Carousel;

