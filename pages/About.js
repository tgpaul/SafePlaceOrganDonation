import React from 'react';
import Link from 'next/link';
let logo = './logowhite.png';

function About() {
  return (
    <><div className="about-navbar">
            <Link href="/" className="link">Home</Link>
      </div>
    <div className="container">
        
      <div className="hero-section">
        <img src={logo} alt="Organ Donation Management System Logo" />
        <h1>Blockchain-based Organ Donation Management System</h1>
      </div>
      <div className="content-section">
        <h2>Why donate organs?</h2>
        <p>Organ donation can save lives and improve the quality of life for many people. By donating organs, you can help someone else in need and make a difference in their life.</p>
        <h2>How will blockchain improve the existing system?</h2>
        <p>Blockchain technology can help improve the organ donation system by providing a secure and transparent way to manage organ donations. It can help reduce fraud and improve the tracking of donations, making it easier to match donors with recipients and ensure that the right organs are going to the right people. With blockchain, the organ donation process can become more efficient, reliable, and trustworthy.</p>
      </div>
      
    </div></>
  );
}

export default About;