let logo = '/logowhite.png';
import metamask_logo from '../public/metamask-icon.svg'
import DonorSignup from '../Components/LoginPage/DonorSignUp.js'
// import MiniNav from '../Components/LoginPage/MiniNavbar.js'
import Carousel from '../Components/LoginPage/Carousal';



function LoginPage() {
    return (
      <section className="Login">
        <div className="Login-Left">
            <img src={logo} className="login-logo" alt="Image" width="80"/>
          <div className='Login-text-section'>
            <h1 className="Login-heading">Tranforms Hope</h1>
            <h1 className="Login-heading">in to Reality</h1>
            <p className="Login-paragraph">
              Join the future of giving today and become the hero in someone’s story. 
              Blockchain-powered organ donation makes giving the ultimate gift easy and secure.        </p>
          </div>
        </div>
        <div className="Login-Right">
          {/* <div><MiniNav /></div> */}
          <Carousel/>
        </div>
      </section>
    );
  }


function LoginComponentDonor() {
  return (
    <div>
          
          <form className='LogDonor'>
            <h1>Login as a Donor</h1>
            <label className='LogDonorFields'> Email Address:</label>
            <input className='LogDonorFields' id='Email-logDonor' type="email" placeholder="enter you email address" />
            <label className='LogDonorFields'>Connect Metamask Wallet:</label>
            <button className='LogDonorFields' id ='Metamask-Button' type="submit"> <img src={metamask_logo} width = "30" />  MetaMask</button>
            <button className='LogDonorFields' id='log-but'>Login</button>
          </form>
          
    
    </div>
  );

}



export default LoginPage;