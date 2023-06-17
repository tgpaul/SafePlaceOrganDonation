import Router from 'next/router';
const Web3 = require('web3');
const HospitalContract = require('../../blockchain/build-info/HospitalRecipientContract.json');
const RPC_URL = "HTTP://127.0.0.1:7545";
//const RPC_URL = "https://rpc.sepolia.org";

let accounts, web3, hospitalContract;

/**
 * Functions:-
 * 1. 
 **/

async function init(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);
}

export async function GetRecipientDetails( recipientID ){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);

        const recipientDetails = await hospitalContract.methods.GetRecipient(recipientID).call();
        // console.log(recipientDetails);     

        return recipientDetails;
    }catch(error){
        console.log("Error: ", error);
    }
}

export async function GetHospitalDetailsFunction( _hospitalID ){
    try{
        const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        const hospitalContract = new web3.eth.Contract(
            HospitalContract.abi,
            HospitalContract.address
        );
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        let result = null;
        result = await hospitalContract.methods.HospitalLogin(_hospitalID).call({
            from: accounts[0]
        });
        console.log("Account: ",accounts[0]);
        console.log("Result: ",result);

        if (result[0] != 0) {
            console.log("Contract call successful");
            Router.push("/HospitalDashboard");
          } else {
            console.log("Contract call failed");
          }
        
        console.log("BE FUNCTIONS : ",result);
        return result;
    }catch(error){
        console.log("Error: ", error);
    }
}
