const {donorContract, hospitalRecipientContract} = require("./ContarctObjects");

/*
    Functions: - 
    SignUp
*/

async function SignUpFunction( donorAddress, firstname, lastname, contact, email, resAddress ) {
    try {
        const ID = await donorContract.methods.DonorSignUp(firstname, lastname,contact, email,resAddress).send({from: donorAddress});
    } catch (error) {
        console.error('Error creating donor:', error);
    }
}

export default SignUpFunction;