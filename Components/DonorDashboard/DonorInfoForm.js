import { useState, useEffect } from 'react';
import React from 'react';
import { RegisterDonorFunction } from '../BackendFunctions/BE_DonorFunctions';

const DonorInfoForm = (donorData) => {
  const [isDisabled, setDisabled] = useState(false);

  const [donor, setDonor] = useState({
    bloodType: donorData.data[7],
    organType: donorData.data[8],
    name: donorData.data[2],
    contact: donorData.data[4],
    donorId: donorData.data[0]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDonor((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const test = await RegisterDonorFunction(donor.bloodType, donor.organType);
    if(donor.bloodType !== '' && donor.organType !== ''){
      setDisabled(true)
    }
    // saveDonorDetails(donor);
  };

  // const saveDonorDetails = (donorData) => {
  //   console.log('Saving donor details:', donorData);
  // };

  useEffect(() => {
    if(donor.bloodType !== '' && donor.organType !== ''){
      setDisabled(true)
    }
    console.log("idis", isDisabled)
  }, []);

  return (
    <form id="form1" onSubmit={handleSubmit}>
      <h1>Donor Details</h1>
      <h2>Personal Details</h2>
      <div className="form-control">
        <label htmlFor="name" id="label-name">
          Full Name:
        </label>
        <input type="text" id="name" value={donor.name} disabled />

        <label htmlFor="contact" id="label-contact">
          Contact:
        </label>
        <input type="text" id="contact" value={donor.contact} disabled />

        <label htmlFor="donor-id" id="label-donor-id">
          Donor ID:
        </label>
        <input type="text" id="donor-id" value={donor.donorId} disabled />

        <h2>Organ Details</h2>
      </div>

      <div className="form-control">
        <label htmlFor="blood" id="blood-type">
          Blood type
        </label>
        <select
          name="bloodType"
          id="blood"
          value={donor.bloodType}
          onChange={handleChange}
          disabled={isDisabled}
        >
          <option value="">Select</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O+">O+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div className="form-control">
        <label htmlFor="organ" id="organ-type">
          Organ to be donated
        </label>
        <select
          name="organType"
          id="organ"
          value={donor.organType}
          onChange={handleChange}
          disabled={isDisabled}
        >
          <option value="">Select</option>
          <option value="Kidney">Kidney</option>
          <option value="Liver">Liver</option>
          <option value="Heart">Heart</option>
          <option value="Tissue">Tissue</option>
        </select>
      </div>

      <button type="submit" className="save-button"  disabled={isDisabled} >
        <span>Save</span>
      </button>
    </form>
  );
}

export default DonorInfoForm;
