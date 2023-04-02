import Link from 'next/link'


function MiniNav() {
    return (
        <nav className="mini-navbar">
          <ul className="mini-navbar-menu">
            <li className="mini-navbar-item" id='home-back-button'>
                <Link href="/">
                    Home
                </Link>
            </li>
            <li className="mini-navbar-item">
              <a href="#">Donor Login</a>
            </li>
            <li className="mini-navbar-item">
              <a href="#">Donor Sign Up</a>
            </li>
            <li className="mini-navbar-item">
            <a href="#">Hospital Login</a>
            </li>
          </ul>
        </nav>
      );
}

export default MiniNav;