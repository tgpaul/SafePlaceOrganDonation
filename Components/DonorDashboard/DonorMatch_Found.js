import React, { useState, useEffect } from 'react';
import RecipeintMatchDetails from "./RecipeintMatchDetails"

const DonorMatch_Found = ({recipientData, hospitalData}) =>{
  // const [recipient, setRecipient] = useState(null);
  console.log("Recipient data inside match: ",recipientData)
  console.log("Hospital data inside match: ",hospitalData)
  // useEffect(() => {
  //   if (recipientData && hospitalData) {
  //     setRecipient({
  //       phoneNumber: recipientData[4],
  //       idCode: recipientData[0],
  //       bloodType: recipientData[5],
  //       organs: recipientData[6],
  //       hospitalName: hospitalData[2],
  //       hospitalPhoneNumber: hospitalData[4],
  //       // profile_pic : hospitalData[]
  //     });
  //   }
  // }, [recipientData, hospitalData]);

      

    return (
        <form id="form2">
          <div className="card-control">
            <h1 className="card-heading">Matching Details</h1>
            <div className="recipientCard">
                <h1>RECIPIENT DETAILS</h1>
                {/* <img src= {Recipient.profile_pic} alt="Donor Photo" /> */}
                <h3>
                  <div className="slot">
                    <p className="slot_text">{recipientData[1]}</p>
                  </div>
                </h3>
                <div className="detail_slots">
                    <RecipeintMatchDetails recipientData={recipientData} hospitalData = {hospitalData}/>
                </div>
            </div>
          </div>
        </form>
      );

}
export default DonorMatch_Found;