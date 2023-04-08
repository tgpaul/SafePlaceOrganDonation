let logo = '/logowhite.png';
let smily = '/smily face.png'
import Carousel from '../Components/LoginPage/Carousal';



function LoginPage() {
    return (
      <section className="Login">
        <div className="Login-Left">
            <img src={logo} className="login-logo" alt="Image" width="80"/>
          <div className='Login-text-section'>
            <h1 className="Login-heading">Tranforms Hope</h1>
            <h1 className="Login-heading">in to Reality<img src={smily} className="smily" alt="Image" width="55"/></h1>
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



export default LoginPage;