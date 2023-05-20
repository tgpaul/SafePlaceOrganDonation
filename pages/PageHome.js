// import hero_doc from '../public/hero-Doc.png';
let hero_doc = '/hero-Doc.png'
import Navbar from '../Components/HomePage/HomeNavbar';
import Link from 'next/link'


function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Tranforms <span id='hope'>Hope</span> </h1>
          <h1 className="hero-heading">in to Reality</h1>
          <p className="hero-paragraph">
          Join the future of giving today and become the hero in someone’s story. 
          Blockchain-powered organ donation makes giving the ultimate gift easy and secure.        </p>
          <div className="hero-buttons">
            <Link href="/LoginPage">
              <button className="login-button">Login</button>
            </Link>
            <Link href="/HowItWorks">
              <button className="how-it-works-button">How It Works</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src = {hero_doc} className="hero-png" alt="" />
        </div>
      </section>
    );
  }



function HomePage() {
    //console.log("paul here");
    return (
      <div className='App'>
        <Navbar />
        <Hero />
      </div>
    );
  }

  export default HomePage;