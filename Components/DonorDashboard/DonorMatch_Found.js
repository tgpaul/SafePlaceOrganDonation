let phone_icon = "/recipient_slot_icons/phone.svg"
let id_icon = "/recipient_slot_icons/id.svg"
let blooddrop_icon = "/recipient_slot_icons/blood_drop_.svg"
let heart_icon = "/recipient_slot_icons/heart.svg"
let hospital_icon = "/recipient_slot_icons/hospital.svg"
let phoneHospital_icon = "/recipient_slot_icons/phoneHospital.svg"
let profile_pic = "/profile.svg"

function DonorMatch_Found(){

    return (
        <form id="form2">
          <div className="card-control">
            <h1 className="card-heading">Matching Details</h1>
            <div className="recipientCard">
                <h1>RECIPIENT DETAILS</h1>
                <img src= {profile_pic} alt="Donor Photo" />
                <h3>Princy Sugahthan</h3>
                <div className="detail_slots">
                    <div className="slot">
                        <div className="slot_icon"><img src= {phone_icon} width="30" alt="phone_icon" /></div>
                        <p className="slot_text">+91 83838 12131</p>
                    </div>
                    <div className="slot">
                        <div className="slot_icon"><img src= {id_icon} width="30" alt="ID_icon" /></div>
                        <p className="slot_text">#cau8cua888sss</p>
                    </div>
                    <div className="slot">
                        <div className="slot_icon"><img src= {blooddrop_icon} width="30" alt="blood_drop icon" /></div>
                        <p className="slot_text">AB Positive</p>
                    </div>
                    <div className="slot">
                        <div className="slot_icon"><img src= {heart_icon} width="30" alt="heart icon" /></div>
                        <p className="slot_text">Heart, Liver</p>
                    </div>
                    <div className="slot">
                        <div className="slot_icon"><img src= {hospital_icon} width="30" alt="hospital_icon" /></div>
                        <p className="slot_text">Baby Memorial Hospital</p>
                    </div>
                    <div className="slot">
                        <div className="slot_icon"><img src= {phoneHospital_icon} width="30" alt="phone hospital_icon" /></div>
                        <p className="slot_text">+91 91231 21321</p>
                    </div>
                </div>
            </div>
          </div>
        </form>
      );

}

export default DonorMatch_Found;