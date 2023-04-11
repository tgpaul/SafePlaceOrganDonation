let home_icon = "/home-2.svg"
let settings_icon = "/setting.svg"
let profile_pic = "/profile.svg"
let logo = '/MainLogo.png';


import React, { useState, useEffect  } from 'react';

import Link from 'next/link';

function HospitalDashboard() {

  const [page, setPage] = useState("RecipientList");

  useEffect(() => {
    // This function is called when the component mounts
    // and when the 'page' state changes.
    switch (page) {
      case "RecipientList":
        setComponent(<div>RecipientListxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>);
        break;
      case "DonorList":
        setComponent(<div>DonorList</div>);
        break;
      case "MatchingHistory":
        setComponent(<div>MatchingHistory</div>);
        break;
      default:
        setComponent(<div>RecipientList</div>);
        break;
    }
  }, [page]);

  const [component, setComponent] = useState(<div>RecipientList</div>);






  
    return (
      <div className='Hospital_Dashboard_Page'>
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
            <a className={`Sidenav_buttons ${page === 'RecipientList' ? 'active2' : ''}`}
              onClick={() => setPage('RecipientList')}
              >
              Recipient List
            </a>
          </li>
          <li>
            <a className={`Sidenav_buttons ${page === 'DonorList' ? 'active2' : ''}`}
              onClick={() => setPage('DonorList')}
              >
              Donor List
            </a>
          </li>
          <li>
            <a className={`Sidenav_buttons ${page === 'MatchingHistory' ? 'active2' : ''}`}
              onClick={() => setPage('MatchingHistory')}
              >
              Matching History
            </a>
          </li>
          <li>
            <a className="Sidenav_buttons " href="#">
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
      {component}
      </div>
    );
  }
  
  export default HospitalDashboard;