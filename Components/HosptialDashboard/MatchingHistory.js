import React, { useState, useEffect } from 'react';
import { GetMatchDetails, GetMatchIDs } from '../BackendFunctions/BE_HospitalFunctions';

const MatchingHistory = ({data}) =>  {
  const [mainMatchingList, setMatchingList] = useState([]);

useEffect(()=>{
  const fetchMatchingDetails = async () => {
    let count = await GetMatchIDs();
    console.log("Matching count",count);

    const matchingDetails = [];

    for( let i=0 ; i<count.length ; i++){
      let data = await GetMatchDetails(Number(count[i]));
      console.log("DATA",data);
      try{
        let matchingFormat = {
          organType: data[6],
          donorName: data[2],
          recipientName: data[4],
          approvalTime: data[8],
          matchingStatus: data[7]
        }

        matchingDetails.push(matchingFormat);
      }catch(error){
        console.log("Error:",error);
      }
    }

    setMatchingList(matchingDetails);

  };
  fetchMatchingDetails();
},[]);


    return (
      <div className="Table-container">
        <div className="search-container">
            <input  className = "search-bar" type="text" placeholder="Search"></input>
            {/* <button className="add">Add User</button> */}
        </div>
        <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
                <th>Organ Type</th>
                <th>Donor Name</th>
                <th>Recipient name</th>
                <th>Approval time</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {mainMatchingList.map((item, index) => (
            <tr key={index}>
              <td>{item.organType}</td>
              <td>{item.donorName}</td>
              <td>{item.recipientName}</td>
              <td>{item.approvalTime}</td>
              <td>{item.matchingStatus}</td>
              <td>
                <button id = "action">Action</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
  
  export default MatchingHistory;