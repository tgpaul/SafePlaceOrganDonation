import SideNavbar from '../Components/DonorDashboard/SideNavbar';
import DonorInfoForm from '../Components/DonorDashboard/DonorInfoForm';
import DonorMatch_NotFound from '../Components/DonorDashboard/DonorMatch_NotFound';
import DonorMatch_Found from '../Components/DonorDashboard/DonorMatch_Found';
import React, { useEffect, useState } from 'react';
import { GetDonorFunction } from '../BackendFunctions/DonorFunctions';

let MatchFound = 0;

function DonorDashboardBody() {
  const [donorData, setDonorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetDonorFunction();
        setDonorData(data);
        console.log("DONOR : ",data);
        setLoading(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if(donorData[9] != '0' && donorData[10]!='0'){
    MatchFound = 1;
  }

  return (
    <>
      <SideNavbar name={donorData[2]} />
      <div className="main-flex-container">
        <div className="flex-child">
          <DonorInfoForm data={donorData} />
        </div>
        <div className="flex-child">
          {MatchFound === 0 ? (
            <DonorMatch_NotFound />
          ) : (
            <DonorMatch_Found />
          )}
        </div>
      </div>
    </>
  );
}

export default DonorDashboardBody;