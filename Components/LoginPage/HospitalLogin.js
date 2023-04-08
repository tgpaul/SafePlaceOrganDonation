import React, { useState } from 'react';
import connectMetamask from './metamask-connection';
let metamask_logo = '/metamask-icon.svg'


function HospitalLogin() {

  const [HospitalID, setHospitalID] = useState('');

  const handleHospitalIDChange = (event) => {
    setHospitalID(event.target.value);
  };

  const handleConnectWallet = () => {
    // Add logic to connect to Metamask wallet
    connectMetamask();
  };

  const handleLogin = () => {
    // Add logic to handle signup
  };



    return (
      <div>
            
            <form className='LogHospital'>
              <h1>Hostpital Login</h1>
              <label className='LogHospitalFields'> Hospital ID:</label>
              <input className='LogHospitalFields' id='Email-logDonor' type="email" placeholder="Enter your Hospital ID" value={HospitalID} onChange={handleHospitalIDChange} />
              <label className='LogHospitalFields'>Connect Metamask Wallet:</label>
              <button className='LogHospitalFields' id ='metamask-button' type="button" onClick={handleConnectWallet} > <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogHospitalFields' id='log-but' type="button" onClick={handleLogin} >Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default HospitalLogin;