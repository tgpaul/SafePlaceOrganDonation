const Web3 = require('web3');
const DonorContract = require('../../blockchain/build-info/DonorContract.json');

let accounts, web3, donorContract;

/**
 * Functions:-
 * 1. DonorSignUpFunction - Function to call DonorSignUp
 * 2. DonorLoginFunction - Function to call DonorLogin 
 **/

export async function DonorSignUpFunction( firstname, lastname, contact, email, resAddress ){
try{
    // popup - get the user's address
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    // using web3 just as a helper to generate the transaction
    // (see the `data` field and `encodeABI`) - not to sign it
    web3 = new Web3();
    donorContract = new web3.eth.Contract(DonorContract.abi, DonorContract.address);

    const transactionParameters = {
        from: accounts[0],
        to: DonorContract.address,
        data: donorContract.methods.DonorSignUp(
            firstname,
            lastname,
            contact,
            email,
            resAddress
        ).encodeABI(),
        gasPrice: '3000000000', // custom gas price
    };

     // popup - request the user to sign and broadcast the transaction
     await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    console.log("Transaction Complete");
    } catch(error){
        console.log("Error: ",error);
    }
    
}

export async function DonorLoginFunction( email ){
    const transactionParameters = {
        from: accounts[0],
        to: DonorContract.address,
        data: donorContract.methods.DonorSignUp(
            email
        ).encodeABI(),
        gasPrice: '3000000000', // custom gas price
    }; 

    console.log("Transaction Complete");
    await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
}
