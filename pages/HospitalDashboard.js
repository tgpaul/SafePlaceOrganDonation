let home_icon = "/home-2.svg"
let settings_icon = "/setting.svg"
let profile_pic = "/profile.svg"
let logo = '/MainLogo.png';
import RecipientList from '../Components/HosptialDashboard/RecipientList';
import DonorList from '../Components/HosptialDashboard/DonarList';
import MatchingHistory from '../Components/HosptialDashboard/MatchingHistory';
import React, { useEffect, useState } from 'react';
import { GetHospitalDetailsFunction, GetHospitalID, GetRecipientCount, GetRecipientDetails } from '../Components/BackendFunctions/BE_HospitalFunctions';
// import patientList from '../Components/HosptialDashboard/DonarList2';
import Link from 'next/link';
import { GetDonorCount, GetDonorDetailsFunction, GetDonorFunction } from '../Components/BackendFunctions/BE_DonorFunctions';

function HospitalDashboard(){

  const MatchingList = [
    {
      organType: 'Heart',
      donorName: 'John Doe',
      recipientName: 'Jane Smith',
      approvalTime: '2022-03-15',
      status: 'Approved',
      action: 'Button1'
    },
    {
      organType: 'Liver',
      donorName: 'Alice Johnson',
      recipientName: 'Bob Thompson',
      approvalTime: '2022-03-16',
      status: 'Pending',
      action: 'Button2'
    },
    {
      organType: 'Kidney',
      donorName: 'Sarah Brown',
      recipientName: 'Michael Jackson',
      approvalTime: '2022-03-17',
      status: 'Approved',
      action: 'Button3'
    }
  ];


  const donorList = [
    {
      donorId: 1,
      donorName: "John Doe",
      organ: "Heart",
      bloodGroup: "AB+",
      phoneNumber: "123-456-7890",
      email: "john.doe@example.com"
    },
    {
      donorId: 2,
      donorName: "Jane Smith",
      organ: "Kidney",
      bloodGroup: "O-",
      phoneNumber: "987-654-3210",
      email: "john.doe@example.com"
    },
    {
      donorId: 3,
      donorName: "Alice Johnson",
      organ: "Liver",
      bloodGroup: "A+",
      phoneNumber: "456-789-0123",
      email: "john.doe@example.com"
    },
    // Add more objects as needed
  ];
  // let recipientID, recipientFirstName, recipientLastName, recipientResAddress, recipientContact, recipientBloodGroup, recipientOrganNeeded, recipientDonorID, recipientHospitalID;
  // let recipientFormat;
  // // let recipientList = [];
  


  // recipientFormat = {
  //   recipientID,
  //   recipientFirstName,
  //   recipientLastName,
  //   recipientResAddress,
  //   recipientContact,
  //   recipientBloodGroup,
  //   recipientOrganNeeded,
  //   recipientDonorID,
  //   recipientHospitalID
  // }

  // let donorID, donorMetaMaskID, donorName, donorContact, donorEmail, donorResAddress, donorBloodGroup, donorOrganToDonate, donorHospitalID, donorRecipientID;
  // let donorFormat;
  // let donorList = [];
  // donorFormat = {
  //   donorID,
  //   donorMetaMaskID,
  //   donorName,
  //   donorContact,
  //   donorEmail,
  //   donorResAddress,
  //   donorBloodGroup,
  //   donorOrganToDonate,donorHospitalID,
  //   donorRecipientID
  // }

  const recipientListMock = [
    {
      recipientID: 1,
      recipientName: "John Doe",
      recipientOrganNeeded: "Heart",
      recipientBloodGroup: "AB+",
      recipientContact: "123-456-7890",
      recipientResAddress: "john.doe@example.com"
    },
    {
      recipientID: 2,
      recipientName: "Johsasdasdn Doe",
      recipientOrganNeeded: "Heart",
      recipientBloodGroup: "AB+",
      recipientContact: "123-456-7890",
      recipientResAddress: "john.doe@example.com"
    },
    // Add more objects as needed
  ];

  const [hospitalID, setHospitalID] = useState(0);
  const [hospitalData, setHospitalData] = useState({ 0: "0", 1: "0", 2: "Hospital", 3: "null", 4: "00", 5: "aaa" });

  useEffect(() => {
    const fetchHospitalID = async () => {
      const response = await GetHospitalID();
      setHospitalID(response);
      console.log("hospital id = ", response)
      console.log("hospital id local= ", localStorage.getItem("HospitalID"))
    };
    fetchHospitalID(); 
  }, []);
  
  useEffect(() => {
    const fetchHospitalName= async () => {
      const response = await GetHospitalDetailsFunction(localStorage.getItem("HospitalID"));
      setHospitalData(response)
      console.log("hospital NAme = ", response[2])
      console.log("hospital id local= ", localStorage.getItem("HospitalID"))
    };
    fetchHospitalName(); 
  }, []);

  const [page, setPage] = useState("RecipientList");

  useEffect(() => {
    switch (page) {
      case "RecipientList":
        setComponent([<RecipientList recipientlist={recipientListMock} />]);
        console.log("reslist:" , recipientListMock )
        break;
      case "DonorList":
        setComponent([<DonorList donorlist={donorList} />]);
        break;
      case "MatchingHistory":
        setComponent([<MatchingHistory data={MatchingList} />]);
        break;
      default:
        setComponent([<RecipientList recipientlist={recipientListMock} />]);
        break;
    }
  }, [page]);

  const [component, setComponent] = useState(<RecipientList recipientlist={recipientListMock}/>);


  return (
    <div className='Hospital_Dashboard_Page'>
      <div className="Hospital-dash-sidenav">
        <div className="sidenav-logo">
          <img src={logo} alt="Logo" width="80" height="90" />
        </div>
        <div className="profile">
          <img src={profile_pic} alt="Profile Photo" />
          <h3>{hospitalData[2]}<br /><br />Dashboard</h3>
        </div>
        <ul className="nav-links">
          <li>
            <a className={`Sidenav_buttons ${page === 'RecipientList' ? 'active2' : ''}`}
              onClick={() => setPage('RecipientList')}>
              Recipient List
            </a>
          </li>
          <li>
            <a className={`Sidenav_buttons ${page === 'DonorList' ? 'active2' : ''}`}
              onClick={() => setPage('DonorList')}>
              Donor List
            </a>
          </li>
          <li>
            <a className={`Sidenav_buttons ${page === 'MatchingHistory' ? 'active2' : ''}`}
              onClick={() => setPage('MatchingHistory')}>
              Matching History
            </a>
          </li>
          <li>
            <a className="Sidenav_buttons " href="#">
              <img src={settings_icon} style={{ marginRight: 5 }} alt="Settings Icon" />
              Settings
            </a>
          </li>
          <li>
            <Link href="/" className="logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <>
        {component}
      </>
    </div>
  );
  
  }
  
  export default HospitalDashboard; 