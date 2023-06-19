import React, { useState, useEffect } from 'react';
import { GetDonorCount, GetDonorFunction } from '../../BackendFunctions/BE_DonorFunctions';

const MatchPopupTable = (props) => {

    const [mainDonorList, setDonorList] = useState([]);

  useEffect(() => {
    const fetchDonorDetails = async () => {
      let count = await GetDonorCount()
      console.log("Count",count);

      const donorDetails = [];

      for ( let i=0 ; i<count.length ; i++ ){
        let data = await GetDonorFunction(Number(count[i]));
        console.log("Data",data);
        try {
          let donorFormat = {
            donorId: Number(data[0]),
            donorWallet: data[1],
            donorName: data[2] + " " + data[3],
            donorContact: data[4],
            donorEmail: data[5],
            donorResAddrs: data[6],
            donorBloodGroup: data[7],
            donorOrganToDonate: data[8],
            donorHospitalID : data[9],
            donorRecipientID :data[10],
          }

          // setReciepeintList([...mainRecipientList, recipientFormat])
          donorDetails.push(donorFormat);
          // console.log("list", recipientFormat);
        } catch (error) {
          console.log("error fecting recipent");
        }
      }
      setDonorList(donorDetails)
      console.log("dononr details", donorDetails)
    };

    fetchDonorDetails();
  }, []);


    const handleApproveClick = async(donorID, donorName) => {
        console.log(donorID,donorName,props.recipientDetails[0])
    }


    return(
        <>
            <h2>For {props.recipientDetails[1]}, BloodGroup: {props.recipientDetails[2]}, Organ: {props.recipientDetails[3]}</h2>
            <div className="table-wrap">
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Organ</th>
                    <th>Blood group</th>
                    <th>Phone</th>
                    <th>Residential Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mainDonorList.map((item, index) => ( 
                    <tr key={index}>
                        <td>{item.donorId}</td>
                        <td>{item.donorName}</td>
                        <td>{item.donorOrganToDonate}</td>
                        <td>{item.donorBloodGroup}</td>
                        <td>{item.donorContact}</td>
                        <td>{item.donorEmail}</td>
                        <td>
                            <button id="action" onClick={() => handleApproveClick(item.donorId, item.donorName)}>Approve</button>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </>
    );
}

export default MatchPopupTable;

