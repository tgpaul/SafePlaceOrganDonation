const Web3 = require('web3');
const DonorContract = require('./blockchain/build-info/DonorContract.json');
const HospitalRecipientContract = require('./HospitalRecipientContract.json');

// Create a web3 instance
const web3 = new Web3('https://rpc.sepolia.dev'); // Ethereum provider URL

// Create smart contract objects
const donorContractAddress = '0x8e18EE5A2100889ad9B76dD5E8Dba0770Af71461'; // Address of the Donor contract
const donorContractABI = DonorContract.abi;
const donorContract = new web3.eth.Contract(donorContractABI, donorContractAddress);

const hospitalRecipientContractAddress = '0x3C0AE3c7A367B12F81F51ae274980Fca5c9569EB'; // Address of the HospitalRecipient contract
const hospitalRecipientContractABI = HospitalRecipientContract.abi;
const hospitalRecipientContract = new web3.eth.Contract(hospitalRecipientContractABI, hospitalRecipientContractAddress);

// Exporting the smart contract objects for external use
module.exports = {
  donorContract,
  hospitalRecipientContract,
};