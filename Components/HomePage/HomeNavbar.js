let logo = '/MainLogo.png';
import Link from 'next/link'

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="60" height="65" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/About">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/Contact">
              Contact Us
            </Link>
          </li>
          <li className="NavbarLoginButton" id = "NavbarLoginButton">
            <Link href="/LoginPage">
              <button className="log-but">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar;