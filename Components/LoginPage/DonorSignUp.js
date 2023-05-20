import React from 'react';
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useSignMessage, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import { useAuthRequestChallengeEvm } from "@moralisweb3/next";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import SignUpFunction from '../BackendFunctions/donorfunctions';

let metamask_logo = '/metamask-icon.svg';

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
      console.log(account);

      const { url } = await signIn("moralis-auth", {
        message,
        signature,
        redirect: false,
        callbackUrl: "/user",
      });
      const button = document.getElementById("authButton");
      if (button) {
        button.style.borderColor = "green";
        button.style.backgroundColor = "#cdffcc"
      }
      

      push(url);
      
    } catch (error) {
      console.log("Error:", error);
    }
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, phoneNumber, email, address } = state;

    // Call signFunction with form values as parameters
    //SignUpFunction(account, firstname, lastname, phoneNumber, email, address);
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
      <button id="authButton" className='metamask-button' onClick={handleAuth}>
        <img src={metamask_logo} width="30" height="30" className="metamasklogo" alt="" /> Connect <span>Metamask</span>
      </button>
      <br></br>
      <button className='Sign-Up-button' onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}

export default DonorSignup;
