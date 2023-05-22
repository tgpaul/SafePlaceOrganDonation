import { useState } from 'react';
import React from 'react';
import { RegisterDonorFunction } from '../BackendFunctions/donorfunctions';

const DonorInfoForm = (donorData) => {
   // console.log("Name",donorData.data[2]);
  const [donor, setDonor] = useState({
    bloodType: donorData.data[6],
    organType: donorData.data[7],
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
    // saveDonorDetails(donor);
  };

  // const saveDonorDetails = (donorData) => {
  //   console.log('Saving donor details:', donorData);
  // };

  const isDisabled = donor.bloodType !== '' && donor.organType !== '';

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
        >
          <option value="">Select</option>
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
        <label htmlFor="organ" id="organ-type">
          Organ to be donated
        </label>
        <select
          name="organType"
          id="organ"
          value={donor.organType}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="kidney">Kidney</option>
          <option value="liver">Liver</option>
          <option value="heart">Heart</option>
          <option value="tissue">Tissue</option>
        </select>
      </div>

      <button type="submit" className="save-button">
        <span>Save</span>
      </button>
    </form>
  );
}

export default DonorInfoForm;
