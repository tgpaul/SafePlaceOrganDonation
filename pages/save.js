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
  let recipientID, recipientFirstName, recipientLastName, recipientResAddress, recipientContact, recipientBloodGroup, recipientOrganNeeded, recipientDonorID, recipientHospitalID;
  let recipientFormat;
  let recipientList = [];
  


  recipientFormat = {
    recipientID,
    recipientFirstName,
    recipientLastName,
    recipientResAddress,
    recipientContact,
    recipientBloodGroup,
    recipientOrganNeeded,
    recipientDonorID,
    recipientHospitalID
  }

  // const recipientList = [
  //   {
  //     patientId: 1,
  //     patientName: "John Doe",
  //     organ: "Heart",
  //     bloodGroup: "AB+",
  //     phoneNumber: "123-456-7890",
  //     email: "john.doe@example.com"
  //   },
  //   {
  //     patientId: 2,
  //     patientName: "Johnhshs Doe",
  //     organ: "Kidney",
  //     bloodGroup: "O-",
  //     phoneNumber: "987-654-3210",
  //     email: "john.doe@example.com"
  //   },
  //   {
  //     patientId: 2,
  //     patientName: "Johnaaa Doe",
  //     organ: "Liver",
  //     bloodGroup: "A+",
  //     phoneNumber: "456-789-0123",
  //     email: "john.doe@example.com"
  //   },
  //   // Add more objects as needed
  // ];

  const [hospitalID, setHospitalID] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);

  // useEffect(() => {
  //   sessionStorage.setItem('hospitalData', JSON.stringify(hospitalData));
  //   sessionStorage.setItem('hospitalID', hospitalID);
  // }, [hospitalData, hospitalID]);
  
  // useEffect(() => {
  //   const savedHospitalData = sessionStorage.getItem('hospitalData');
  //   const savedHospitalID = sessionStorage.getItem('hospitalID');
  
  //   if (savedHospitalData) {
  //     setHospitalData(JSON.parse(savedHospitalData));
  //   }
  
  //   if (savedHospitalID) {
  //     setHospitalID(savedHospitalID);
  //   }
  // }, []);
  

  useEffect( ()=>{
    async function fetchHospitalData(){
      try{
        const hospitalData = await GetHospitalDetailsFunction(hospitalID);
        setHospitalData(hospitalData);
      } catch(error){
        console.log("Error : ", error);
      }
    }
    
    async function fetchHospitalID(){
        const ID = await GetHospitalID();
        setHospitalID(ID);
    }
  
    fetchHospitalID();
    fetchHospitalData();    
  },[]);


  const [page, setPage] = useState("RecipientList");

  
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [recipientCount, setRecipientCount] = useState(null);

  useEffect(()=>{
    async function fetchRecipientCount(){
      let count = await GetRecipientCount();
      setRecipientCount(count);
      console.log("Recipient Count:",recipientCount);
      setIsDataFetched(true);
      
    }

    async function fetchRecipientData(){
      console.log("inside:",recipientCount,"Length",recipientCount.length);
      for( let i=0 ; i<=recipientCount.length ; i++){
        let data = await GetRecipientDetails(i);
        // console.log("Recipient",i," ",data);
        try{
          recipientFormat = {
            recipientID: data[0],
            recipientName: data[1]+data[2],
            recipientResAddress: data[3],
            recipientContact: data[4],
            recipientBloodGroup: data[5],
            recipientOrganNeeded: data[6],
            recipientDonorID: data[7],
            recipientHospitalID: data[8]
          };
          // console.log("Recipient",i," ",recipientFormat);

          recipientList.push(recipientFormat);

          
        } catch(error){
            console.log("Error:",error);
        }
      }
      console.log(recipientList);
    }

    if (recipientCount === null && !isDataFetched) {
      fetchRecipientCount();
    } else if (isDataFetched) {
      fetchRecipientData();
    }
  },[page, recipientCount, isDataFetched]);
  
  useEffect(() => {
    // This function is called when the component mounts
    // and when the 'page' state changes.
    switch (page) {
      case "RecipientList":
        // console.log("List in caller: ",recipientList);
        setComponent(<RecipientList recipientlist={recipientList}/>);
        break;
      case "DonorList":
        setComponent(<DonorList donorlist={donorList}/>);
        break;
      case "MatchingHistory":
        setComponent(<MatchingHistory data={MatchingList}/>);
        break;
      default:
        setComponent(<RecipientList recipientlist={recipientList}/>);
        break;
    }
  }, [page]);

  const [component, setComponent] = useState(<RecipientList recipientlist={recipientList}/>);


  return (
    <div className='Hospital_Dashboard_Page'>
      <div className="Hospital-dash-sidenav">
        <div className="sidenav-logo">
          <img src={logo} alt="Logo" width="80" height="90"/>
        </div>
      <div className="profile">
        <img src= {profile_pic} alt="Profile Photo" />
        <h3>{hospitalData ? hospitalData[2] : "Hospital"}<br />Dashboard</h3>
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