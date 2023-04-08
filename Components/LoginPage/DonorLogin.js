let metamask_logo = '/metamask-icon.svg'


function DonorLogin() {
    return (
      <div>
            
            <form className='LogDonor'>
              <h1>Login as a Donor</h1>
              <label className='LogDonorFields'> Email Address:</label>
              <input className='LogDonorFields' id='Email-logDonor' type="email" placeholder="enter you email address" />
              <label className='LogDonorFields'>Connect Metamask Wallet:</label>
              <button className='LogDonorFields' id ='metamask-button' type="submit"> <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogDonorFields' id='log-but'>Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default DonorLogin;