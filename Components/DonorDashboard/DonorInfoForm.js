function DonorInfoForm(){

    return (
        <form id="form1">
        <h1>Donor Details</h1>
        <h2>Personal Details</h2>
        <div className="form-control">
          <label htmlFor="name" id="label-name">Full Name:</label>
          <input type="text" id="name" placeholder="Enter your Name" />

          <label htmlFor="contact" id="label-contact">Contact:</label>
          <input type="text" id="contact" placeholder="Enter your Contact Number" />

          <label htmlFor="donor-id" id="label-donor-id">Donor ID:</label>
          <input type="text" id="donor-id" placeholder="#18the98best876dancer" />
          
          <h2>Organ Details</h2>
        </div>

        <div className="form-control">
          <label htmlFor="blood" id="blood-type">Blood type</label>
          <select name="blood" id="blood">
            <option>Select</option>
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
          <label htmlFor="organ" id="organ-type">Organ to be donated</label>
          <select name="organ" id="organ">
            <option>Select</option>
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