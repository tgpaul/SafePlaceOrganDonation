import Router from 'next/router';
const Web3 = require('web3');
const HospitalContract = require('../../blockchain/build-info/HospitalRecipientContract.json');

let accounts, web3, hospitalContract;

/**
 * Functions:-
 * 1. 
 **/

async function init(){
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);
}

export async function GetRecipientDetails( recipientID ){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
        hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);

        const recipientDetails = await hospitalContract.methods.GetRecipient(recipientID).call();
        // console.log(recipientDetails);     

        return recipientDetails;
    }catch(error){
        console.log("Error: ", error);
    }
}

export async function GetHospitalDetailsFunction( hospitalID ){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
        console.log("hospiotal details1: ");  
        hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);
        console.log("hospiotal details2: "); 
        const hospitalDetails = await hospitalContract.methods.GetHospital(hospitalID).call();
        console.log("hospiotal details3: ",hospitalDetails);

        return hospitalDetails;
    }catch(error){
        console.log("Error: ", error);
    }
}
