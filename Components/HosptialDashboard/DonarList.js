import React, { useState, useEffect } from 'react';
import { GetDonorCount, GetDonorFunction } from '../BackendFunctions/BE_DonorFunctions';


const DonorList = ({donorlist}) =>{
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











    return (
      <div className="Table-container">
        <div className="search-container">
            <input className = "search-bar" type="text" placeholder="Search"></input>
            {/* <button className="add">Add User</button> */}
        </div>
        <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th>Donar ID</th>
              <th>Donar Name</th>
              <th>Organ</th>
              <th>Blood group</th>
              <th>Phone</th>
              <th>Email</th>
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
                <button id = "action">More Info</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default DonorList;