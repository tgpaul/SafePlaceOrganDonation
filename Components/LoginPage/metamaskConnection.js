import React from 'react';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

// const [connected, setConnected] = useState(false);
// const [account, setAccount] = useState('');
// const [balance, setBalance] = useState('');

const connectWallet = async () => {
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState('');
    const [balance, setBalance] = useState('');
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

    useEffect(() => {
        if (window.ethereum) {
          window.ethereum.on('connect', connectWallet);
        }
    }, []);
  };



export default connectWallet;