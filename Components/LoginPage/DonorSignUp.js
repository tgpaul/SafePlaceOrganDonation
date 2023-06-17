import React from 'react';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
// import connectWallet from './metamaskConnection';

// import { signIn } from "next-auth/react";
// import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
// import { useRouter } from "next/router";
// import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
// import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import {DonorSignUpFunction} from '../BackendFunctions/BE_DonorFunctions';

let metamask_logo = '/metamask-icon.svg';

function DonorSignup() {
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
        const button = document.getElementById("authButton");
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

  const [state, setState] = React.useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstname, lastname, phoneNumber, email, address } = state;

    // Call signFunction with form values as parameters
    const test = await DonorSignUpFunction(firstname, lastname, phoneNumber, email, address);
    console.log(state);
  };

  const { firstname, lastname, phoneNumber, email, address } = state;

  return (
    <div className='DonorSignUpBox'>
      <h1>Sign Up As A Donor</h1>
      <form className='SignUpGrid'>
        <label>
          First Name:
          <p><input type="text" value={firstname} name="firstname" onChange={handleChange} /></p>
        </label>
        <label>
          Last Name:
          <p><input type="text" value={lastname} name="lastname" onChange={handleChange} /></p>
        </label>
        <label>
          Phone Number:
          <p><input type="tel" value={phoneNumber} name="phoneNumber" onChange={handleChange} /></p>
        </label>
        <label>
          Email:
          <p><input type="email" value={email} name="email" onChange={handleChange} /></p>
        </label>
        <label className='residential-address'>
          Residential Address:
          <p><input className='residential-address-input' type="text" value={address} name="address" onChange={handleChange} /></p>
        </label>
      </form>
      <button id="authButton" className='metamask-button' onClick={connectWallet}>
        <img src={metamask_logo} width="30" height="30" className="metamasklogo" alt="" /><span>Metamask</span>
      </button>
      <br></br>
      <button className='Sign-Up-button' onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default DonorSignup;
