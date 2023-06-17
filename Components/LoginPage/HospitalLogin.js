import React, { useState } from 'react';
import { useEffect } from 'react';
import Web3 from 'web3';

import { GetHospitalDetailsFunction } from '../BackendFunctions/BE_HospitalFunctions'; 

let metamask_logo = '/metamask-icon.svg'


function HospitalLogin() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        setConnected(true);
        setAccount(account);
        const button = document.getElementById("metamask-button");
        if (button) {
          button.style.borderColor = "green";
          button.style.backgroundColor = "#cdffcc";
        }
        const weiBalance = await web3.eth.getBalance(account);
        const etherBalance = web3.utils.fromWei(weiBalance, 'ether');
        setBalance(etherBalance);
      } else {
        console.log('No Ethereum browser extension detected');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('connect', connectWallet);
    }
  }, []);

  const [state, setState] = React.useState({
    HospitalID: ''
  });

  const handleHospitalIDChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    const {HospitalID} = state;

    // Call signFunction with form values as parameters
    const test = await HospitalLoginFunction(Number(HospitalID));
    console.log("HERE : ",test);
  };



    return (
      <div>
            
            <form className='LogHospital'>
              <h1>Hostpital Login</h1>
              <label className='LogHospitalFields'> Hospital ID:</label>
              <input className='LogHospitalFields' id='Email-logDonor' type="email" placeholder="Enter your Hospital ID" value={state.HospitalID} name = "HospitalID" onChange={handleHospitalIDChange} />
              <label className='LogHospitalFields'>Connect Metamask Wallet:</label>
              <button className='LogHospitalFields' id ='metamask-button' type="button" onClick={connectWallet} > <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogHospitalFields' id='log-but' type="button" onClick={handleLogin} >Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default HospitalLogin;