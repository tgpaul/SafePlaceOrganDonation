const DonorList = ({donorlist}) =>{
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
          {donorlist.map((item, index) => (
            <tr key={index}>
              <td>{item.donorId}</td>
              <td>{item.donorName}</td>
              <td>{item.donorOrganToDonate}</td>
              <td>{item.donorBloodGroup}</td>
              <td>{item.donorContact}</td>
              <td>{item.donorEmail}</td>
              <td>
                <button id = "action">Find Match</button>
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