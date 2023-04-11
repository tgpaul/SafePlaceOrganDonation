let phone_icon = "/recipient_slot_icons/phone.svg"
let id_icon = "/recipient_slot_icons/id.svg"
let blooddrop_icon = "/recipient_slot_icons/blood_drop_.svg"
let heart_icon = "/recipient_slot_icons/heart.svg"
let hospital_icon = "/recipient_slot_icons/hospital.svg"
let phoneHospital_icon = "/recipient_slot_icons/phoneHospital.svg"


import React from 'react';

const RecipeintMatchDetails = ({ Recipient }) => {
  return (
    <>
      <div className="slot">
        <div className="slot_icon"><img src={phone_icon} width="30" alt="phone_icon" /></div>
        <p className="slot_text">{Recipient.phoneNumber}</p>
      </div>
      <div className="slot">
        <div className="slot_icon"><img src={id_icon} width="30" alt="ID_icon" /></div>
        <p className="slot_text">{Recipient.idCode}</p>
      </div>
      <div className="slot">
        <div className="slot_icon"><img src={blooddrop_icon} width="30" alt="blood_drop icon" /></div>
        <p className="slot_text">{Recipient.bloodType}</p>
      </div>
      <div className="slot">
        <div className="slot_icon"><img src={heart_icon} width="30" alt="heart icon" /></div>
        <p className="slot_text">{Recipient.organs}</p>
      </div>
      <div className="slot">
        <div className="slot_icon"><img src={hospital_icon} width="30" alt="hospital_icon" /></div>
        <p className="slot_text">{Recipient.hospitalName}</p>
      </div>
      <div className="slot">
        <div className="slot_icon"><img src={phoneHospital_icon} width="30" alt="phone hospital_icon" /></div>
        <p className="slot_text">{Recipient.hospitalPhoneNumber}</p>
      </div>
    </>
  );
};

export default RecipeintMatchDetails;
