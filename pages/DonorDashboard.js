let home_icon = "/home-2.svg"
let settings_icon = "/setting.svg"
let profile_pic = "/profile.svg"


function DonorDashboard() {
    return (
      <div className='DonorDashboard-Page'>
        {/* <!-- Side Navigation Bar --> */}
	    <div className="dashboard-sidenav">

		    {/* <!-- Logo --> */}
		    <div className="logo">
		    	<img src="images/logo.svg" alt="Logo"/>
		    </div>

		    {/* <!-- User Profile --> */}
		    <div className="profile">
		    	<img src={profile_pic} width = "20" alt="Profile Photo"/>
		    	<h3>Alby Johnson</h3>
		    </div>
		    {/* <!-- Navigation Links --> */}
		    <ul className="nav-links">
                <li><a className="dash" href="#"><img src={home_icon}  alt="Dashboard Icon"/>Dashboard</a></li>
                <li><a className="dash" href="#"><img src={settings_icon}  alt="Settings Icon"/>Settings </a></li>
                <li>    
                    {/* <!--logout button--> */}
                    <a href="#" className="logout">Logout</a>
                </li>
            </ul>
        </div>
	    {/* <!-- Main Content --> */}
	    <div className="main flex-container">
            <div className="flex-child">
                <form id="donor-details-form">
                {/* <!-- Details --> */}
                    <h1> Donor Details </h1>
                    <h2>Personal Details</h2>
                    <div className="form-control">
                        <label for="name" id="label-name"> Full Name: </label>

                        {/* <!-- Input Type Text --> */}
                        <input type="text" id="name" placeholder="Enter your Name"/>

                        <label for="contact" id="label-contact"> Contact: </label>
                        <input type="text" id="name" placeholder="Enter your Contact Number"/>

                        <label for="contact" id="label-contact"> Donar ID: </label>
                        <input type="text" id="name" placeholder="#18the98best876dancer"/>
            
                        <h2>Organ Details</h2>
                    </div>

                    <div className="form-control">
                        <label for="blood" id="blood-type"> Blood type  </label>
              
                        {/* <!-- Dropdown options --> */}
                        <select name="blood" id="blood">
                            <option>Select</option>
                            <option value="a+">A+</option>
                            <option value="b+">B+</option>
                            <option value="ab+">AB+</option>
                            <option value="o+">O+</option>
                            <option value="a-">A-</option>
                            <option value="b-">B-</option>
                            <option value="ab-">AB-</option>
                        <option value="-">O-</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label for="organ" id="organ-type"> Organ to be donated</label>
            
                        {/* <!-- Dropdown options --> */}
                        <select name="organ" id="organ">
                            <option>Select</option>
                            <option value="a+">Kidney</option>
                            <option value="b+">Liver</option>
                            <option value="ab+">Heart</option>
                            <option value="o+">Tissue</option>
                        </select>
                    </div>
                    <button type="submit" className="save-button">
                        <span>Save</span>
                    </button>
                </form>
            </div>
            <div className="flex-child">
                <form id="form2"/>
                    {/* <!-- Details --> */}
                    <div className="form-control">
                        <h1 > Matching Details </h1>
                        <div className="image-box">
                            <img src="images/nomatch.png" alt="Example image"/>
                        </div>
                    </div>
        
            </div>
        </div>
    </div>
    );
  }
  
  export default DonorDashboard;