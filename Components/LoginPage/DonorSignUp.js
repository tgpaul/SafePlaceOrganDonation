import React, { useState } from 'react';
let metamask_logo = '/metamask-icon.svg'
import connectMetamask from './metamask-connection';

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";

import Web3 from 'web3';


// const connectMetamask = async () => {
//   // First, check if the user has Metamask installed and unlocked
//   if (window.ethereum) {
//     try {
//       // Request permission to access the user's accounts
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const web3 = new Web3(window.ethereum);
//       console.log('Connected to Metamask!');
//       // Now you can use the web3 instance to interact with the user's wallet
//       const accounts = await web3.eth.getAccounts();
//       console.log(accounts);
//     } catch (error) {
//       console.error(error);
//     }
//   } else {
//     console.error('Metamask is not installed!');
//   }
// }

function DonorSignup() {

  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { requestChallengeAsync } = useAuthRequestChallengeEvm();
  const { push } = useRouter();

  const handleAuth = async () => {
    try {
      
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({
      connector: new MetaMaskConnector(),
    });

    const { message } = await requestChallengeAsync({
      address: account,
      chainId: chain.id,
    });

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/user' page
    const { url } = await signIn("moralis-auth", {
      message,
      signature,
      redirect: false,
      callbackUrl: "/user",
    });

  }
 catch (error) {
      console.log("Eroor")
  }
    /**
     * instead of using signIn(..., redirect: "/user")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    // push(url);
  };

// aaaa

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResidentialAddressChange = (event) => {
    setResidentialAddress(event.target.value);
  };

  const handleConnectWallet = () => {
    // Add logic to connect to Metamask wallet
    connectMetamask();
  };

  const handleSignup = () => {
    // Add logic to handle signup
  };

  return (
    <div className='DonorSignUpBox'>
      <h1>Sign Up As A Donor</h1>
      <form className='SignUpGrid'>
        <label>
          First Name:
          <p><input type="text" value={firstName} onChange={handleFirstNameChange} /></p>
        </label>
        <label>
          Last Name:
          <p><input type="text" value={lastName} onChange={handleLastNameChange} /></p>
        </label>
        <label>
          Phone Number:
          <p><input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} /></p>
        </label>
        <label>
          Email:
          <p><input type="email" value={email} onChange={handleEmailChange} /></p>
        </label>
        <label className='residential-address'>
          Residential Address:
          <p><input className='residential-address-input' type="text" value={residentialAddress} onChange={handleResidentialAddressChange} /></p>
        </label>
      </form>
      <button className='metamask-button' onClick={handleAuth}><img src = {metamask_logo} width = "30" height = "30" className="metamasklogo" alt="" />  Connect <span>Metamask</span> </button>
      <br></br>
      <button className='Sign-Up-button' onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default DonorSignup;
