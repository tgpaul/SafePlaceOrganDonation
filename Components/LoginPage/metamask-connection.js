import Web3 from 'web3';


const connectMetamask = async () => {
    // First, check if the user has Metamask installed and unlocked
    if (window.ethereum) {
      try {
        // Request permission to access the user's accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        console.log('Connected to Metamask!');
        // Now you can use the web3 instance to interact with the user's wallet
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Metamask is not installed!');
    }
  }

export default connectMetamask;