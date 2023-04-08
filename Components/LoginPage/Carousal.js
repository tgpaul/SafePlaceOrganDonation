import DonorSignup from './DonorSignUp.js'
import DonorLogin from './DonorLogin.js'
import HospitalLogin from './HospitalLogin.js';
import Link from 'next/link'

import React, { useState, useEffect  } from 'react';

const Carousel = () => {
  const [page, setPage] = useState("DonorLogin");

  useEffect(() => {
    // This function is called when the component mounts
    // and when the 'page' state changes.
    switch (page) {
      case "DonorLogin":
        setComponent(<DonorLogin/>);
        break;
      case "DonorSignup":
        setComponent(<DonorSignup/>);
        break;
      case "HospitalLogin":
        setComponent(<HospitalLogin/>);
        break;
      default:
        setComponent(<div>DonorLogin</div>);
        break;
    }
  }, [page]);

  const [component, setComponent] = useState(<DonorSignup/>);

  return (
    <>
      {/* This is a mini navbar used for the carousal, this replaced the previous MiniNavbar */}
      <nav className='Carousal-NavBar'>
        <ul>
          <Link className="Corusal_buttons " id = "Corusal_Home_button" href="/PageHome">
              Home
          </Link>
          <a
            className={`Corusal_buttons ${page === 'DonorLogin' ? 'active' : ''}`}
            onClick={() => setPage('DonorLogin')}
          >
            Donor Login
          </a>
          <a
            className={`Corusal_buttons ${page === 'DonorSignup' ? 'active' : ''}`}
            onClick={() => setPage('DonorSignup')}
          >
            Donor Signup
          </a>
          <a
            className={`Corusal_buttons ${page === 'HospitalLogin' ? 'active' : ''}`}
            onClick={() => setPage('HospitalLogin')}
          >
            Hospital Login
          </a>
        </ul>
      </nav>
      {component}
    </>
  );
}

export default Carousel;

