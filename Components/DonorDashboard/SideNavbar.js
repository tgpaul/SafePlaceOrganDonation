let home_icon = "/home-2.svg"
let settings_icon = "/setting.svg"
let profile_pic = "/profile.svg"
let logo = '/MainLogo.png';

import Link from 'next/link';

function SideNavbar() {
    return (
      <div className="sidenav">
        <div className="sidenav-logo">
          <img src={logo} alt="Logo" width="80" height="90"/>
        </div>
        <div className="profile">
          <img src= {profile_pic} alt="Profile Photo" />
          <h3>Alby Johnson</h3>
        </div>
        <ul className="nav-links">
          <li>
            <a className="dash" href="#">
              <img src={home_icon} style={{marginRight: 5}} alt="Dashboard Icon" />
              Dashboard
            </a>
          </li>
          <li>
            <a className="settings" href="#">
              <img src={settings_icon} style={{marginRight: 5}} alt="Settings Icon" />
              Settings
            </a>
          </li>
          <li>
            <Link href="/" className="logout">
              {/* <a href="#" className="logout"> */}
                Logout
              {/* </a> */}
            </Link>
            
          </li>
        </ul>
      </div>
    );
  }
  
  export default SideNavbar;