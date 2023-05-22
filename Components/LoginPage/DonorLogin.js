import React, { useState } from 'react';
import { useEffect } from 'react';
import Web3 from 'web3';

import {DonorLoginFunction} from '../BackendFunctions/DonorFunctions';

let metamask_logo = '/metamask-icon.svg'
import connectMetamask from './metamask-connection';


function DonorLogin() {
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
        console.log(account);
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

  // const [email, setEmail] = useState('');

  const [state, setState] = React.useState({
    email: ''
  });

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // const handleConnectWallet = () => {
  //   // Add logic to connect to Metamask wallet
  //   connectMetamask();
  // };

  

  const handleLogin = async (event) => {
    event.preventDefault();
    const {email} = state;

    console.log(state)
    // Call signFunction with form values as parameters
    const test = await DonorLoginFunction(email);
    console.log(state);
  };

    return (
      <div>
            
            <form className='LogDonor'>
              <h1>Login as a Donor</h1>
              <label className='LogDonorFields'> Email Address:</label>
              <input className='LogDonorFields' id='Email-logDonor' type="email" placeholder="enter you email address" value={state.email} name="email" onChange={handleEmailChange} />
              <label className='LogDonorFields'>Connect Metamask Wallet:</label>
              <button className='LogDonorFields' id ='metamask-button' type="button" onClick={connectWallet}> <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogDonorFields' id='log-but' type="button" onClick={handleLogin}>Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default DonorLogin;