
import RecipeintMatchDetails from "./RecipeintMatchDetails"

function DonorMatch_Found(){


    const Recipient = {
        phoneNumber: '+91 83838 12131',
        idCode: '#causss',
        bloodType: 'AB Positive',
        organs: 'Heart, Liver',
        hospitalName: 'Baby Memorial Hospital',
        hospitalPhoneNumber: '+91 91231 21321',
        profile_pic : "/profile.svg"
      };
      

    return (
        <form id="form2">
          <div className="card-control">
            <h1 className="card-heading">Matching Details</h1>
            <div className="recipientCard">
                <h1>RECIPIENT DETAILS</h1>
                <img src= {Recipient.profile_pic} alt="Donor Photo" />
                <h3>Princy Sugahthan</h3>
                <div className="detail_slots">
                    <RecipeintMatchDetails Recipient={Recipient}/>
                </div>
            </div>
          </div>
        </form>
      );

}

export default DonorMatch_Found;