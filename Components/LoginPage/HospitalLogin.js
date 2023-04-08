let metamask_logo = '/metamask-icon.svg'


function HostpitalLogin() {
    return (
      <div>
            
            <form className='LogHospital'>
              <h1>Login as a Donor</h1>
              <label className='LogHospitalFields'> Hospital ID:</label>
              <input className='LogHospitalFields' id='Email-logDonor' type="email" placeholder="Enter your Hospital ID" />
              <label className='LogHospitalFields'>Connect Metamask Wallet:</label>
              <button className='LogHospitalFields' id ='metamask-button' type="submit"> <img src={metamask_logo} width = "30" />  MetaMask</button>
              <button className='LogHospitalFields' id='log-but'>Login</button>
            </form>
            
      
      </div>
    );
  
  }

export default HostpitalLogin;