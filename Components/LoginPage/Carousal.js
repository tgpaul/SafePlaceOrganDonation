import DonorSignup from './DonorSignUp.js'
import Link from 'next/link'

import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const pages = [
    <div>Page 1 content</div>,
    <div><DonorSignup /></div>,
    <div>Page 3 content</div>
  ];

  const handlePageChange = (newIndex) => {
    setActiveIndex(newIndex);
  }

  return (
    <>
      {/* This is a mini navbar used for the carousal, this replaced the previous MiniNavbar */}
      <nav className='Carousal-NavBar'>
        <Link href="/PageHome">
            <button className="Corusal_buttons">Home</button>
        </Link>
        {pages.map((page, index) => (
            <button className='Corusal_buttons' key={index} onClick={() => handlePageChange(index)}>
              {index === 0 ? 'Donor Login' : index === 1 ? 'Donor Signup' : 'Hospital Login'}
            </button>
        ))}
      </nav>
      {pages[activeIndex]}
    </>
  );
}

export default Carousel;

