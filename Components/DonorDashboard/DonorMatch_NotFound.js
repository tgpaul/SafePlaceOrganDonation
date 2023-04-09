let Match_not_found = "/match_not_found.svg";

function DonorMatch_NotFound(){

    return (
        <form id="form2">
          <div className="form-control">
            <h1>Matching Details</h1>
            <div className="image-box">
              <img src={Match_not_found} alt="Example image" />
              <p>Match Not Yet Found!</p>
            </div>
          </div>
        </form>
      );

}

export default DonorMatch_NotFound;