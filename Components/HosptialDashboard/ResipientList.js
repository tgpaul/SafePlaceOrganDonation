const RecipientList= ({recipientlist}) => {
    return (
      <div className="Table-container">
        <div className="search-container">
            <input className = "search-bar" type="text" placeholder="Search"></input>
            <button className="add">Add User</button>
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
  
  export default RecipientList;