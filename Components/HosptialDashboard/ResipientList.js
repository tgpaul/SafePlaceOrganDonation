import React, { useState } from 'react';
import { AddNewRecipient } from '../BackendFunctions/BE_HospitalFunctions';

const RecipientList = ({ recipientlist }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [organNeeded, setOrganNeeded] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleAddRecipient = () => {
    // Here you can perform any necessary actions with the entered recipient details
    // For simplicity, let's just log the details for now
    console.log("CALLER: ",{
      firstName,
      lastName,
      bloodGroup,
      organNeeded,
      phoneNumber,
      residentialAddress,
    });

    AddNewRecipient(
      firstName,
      lastName,
      residentialAddress,
      phoneNumber,
      bloodGroup,
      organNeeded
    );

    

    // Clear the form fields
    setFirstName('');
    setLastName('');
    setBloodGroup('');
    setOrganNeeded('');
    setPhoneNumber('');
    setResidentialAddress('');

    // Close the popup
    togglePopup();
  };

  return (
    <div className="Table-container">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Recipient</h2>
            <div className='popup-grid'>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Blood Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
            <input
              type="text"
              placeholder="Organ Needed"
              value={organNeeded}
              onChange={(e) => setOrganNeeded(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Residential Address"
              value={residentialAddress}
              onChange={(e) => setResidentialAddress(e.target.value)}
            />
            
            </div>
            <div className='popup-button-container'>
            <button className='popup-button' onClick={handleAddRecipient}>Add Recipient</button>
            <button className='popup-button' onClick={togglePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="add" onClick={togglePopup}>
          Add Recipient
        </button>
      </div>
      <div className="table-wrap">
        <table className="table">
          <thead className="thead-primary">
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Organ</th>
              <th>Blood group</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recipientlist.map((item, index) => (
              <tr key={index}>
                <td>{item.patientId}</td>
                <td>{item.patientName}</td>
                <td>{item.organ}</td>
                <td>{item.bloodGroup}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>
                  <button id="action">Find Match</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecipientList;
