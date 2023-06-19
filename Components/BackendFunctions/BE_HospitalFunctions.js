import Router from 'next/router';
import { useState } from 'react';
const Web3 = require('web3');
const HospitalContract = require('../../blockchain/build-info/HospitalRecipientContract.json');
const RPC_URL = "HTTP://127.0.0.1:7545";
//const RPC_URL = "https://rpc.sepolia.org";

let accounts, web3, hospitalContract;

/**
 * Functions:-
 * 1. 
 **/

let currentHospitalID = null;

export async function HospitalLoginFunction( hospitalID ){
    try{
        const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        const hospitalContract = new web3.eth.Contract(
            HospitalContract.abi,
            HospitalContract.address
        );
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });

        currentHospitalID = hospitalID;
        console.log("Current ID inside : ",currentHospitalID);


        let result = null;
        result = await hospitalContract.methods.HospitalLogin(currentHospitalID).call({
            from: accounts[0]
        });

        if (result[0] != 0) {
            console.log("Contract call successful", currentHospitalID);
            Router.push('/HospitalDashboard');
          } else {
            console.log("Contract call failed");
          }
        
    }catch(error){
        console.log("Error: ", error);
    }
}

export async function GetHospitalID(){
    return currentHospitalID;  
}

export async function GetHospitalDetailsFunction( hospitalID ){
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    const hospitalContract = new web3.eth.Contract(
        HospitalContract.abi,
        HospitalContract.address
    );
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const result = await hospitalContract.methods.GetHospital(currentHospitalID).call({
        from: accounts[0]
    }); 

    return result;
}

export async function AddNewRecipient( firstName, lastName, residentialAddress, phoneNumber,  bloodGroup, organNeeded){
    try{
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    const hospitalContract = new web3.eth.Contract(
        HospitalContract.abi,
        HospitalContract.address
    );

    console.log("GETTER: ",
        typeof firstName,
        typeof lastName,
        typeof bloodGroup,
        typeof organNeeded,
        typeof phoneNumber,
        typeof residentialAddress,
      );

    const transactionParameters = {
        from: accounts[0],
        to: HospitalContract.address,
        data: hospitalContract.methods.AddRecipient(
            firstName,
            lastName,
            residentialAddress,
            phoneNumber,
            bloodGroup,
            organNeeded
        ).encodeABI(),
        gasPrice: '3000000000', // custom gas price
    };

    const transactionHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    const receipt = await web3.eth.getTransactionReceipt(transactionHash);

    if (receipt.status == "0x1"){
        console.log("Recipient Added");

    }else {
        console.log("Recipient addition failed!");
    }
    }catch(error){
        console.log("Error: ",error);
    }
}   

export async function GetRecipientCount(){
    let result = null;
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
    const hospitalContract = new web3.eth.Contract(
        HospitalContract.abi,
        HospitalContract.address
    );
    try{
        result = await hospitalContract.methods.GetRecipientList().call({
            from: accounts[0]
        });

        if(result){
            console.log("Successful call to GetRecipientList");
            return result
        }
        else{
            console.log("Error in calling GetRecipientList");
        }
    }catch (error){
        console.log("Error: ",error);
    }
        
}


export async function GetRecipientDetails( recipientID ){
    try{
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        hospitalContract = new web3.eth.Contract(HospitalContract.abi,HospitalContract.address);

        const recipientDetails = await hospitalContract.methods.GetRecipient(recipientID).call({
            from: accounts[0]
        });

        return recipientDetails;
    }catch(error){
        console.log("Error: ", error);
    }
}

