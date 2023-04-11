const MatchingHistory = ({data}) =>  {
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.organType}</td>
              <td>{item.donorName}</td>
              <td>{item.recipientName}</td>
              <td>{item.approvalTime}</td>
              <td>{item.status}</td>
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