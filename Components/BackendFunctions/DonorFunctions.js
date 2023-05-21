const Web3 = require('web3');
const DonorContract = require('../../blockchain/build-info/DonorContract.json');

let accounts, web3, donorContract;

async function SignUpFunction( firstname, lastname, contact, email, resAddress ){
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
        gasPrice: '0x09184e72a000', // custom gas price
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

export default SignUpFunction;