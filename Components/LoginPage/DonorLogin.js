import React, { useState } from 'react';

let metamask_logo = '/metamask-icon.svg'
import connectMetamask from './metamask-connection';


function DonorLogin() {


  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
            
            <form className='LogDonor'>
              <h1>Login as a Donor</h1>
              <label className='LogDonorFields'> Email Address:</label>
              <input className='LogDonorFields' id='Email-logDonor' type="email" placeholder="enter you email address" value={email} onChange={handleEmailChange} />
              <label className='LogDonorFields'>Connect Metamask Wallet:</label>
              <button className='LogDonorFields' id ='metamask-button' type="button" onClick={handleConnectWallet}> <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogDonorFields' id='log-but' type="button" onClick={handleLogin}>Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default DonorLogin;