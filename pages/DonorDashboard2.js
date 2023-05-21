import SideNavbar from '../Components/DonorDashboard/SideNavbar';
import DonorInfoForm from '../Components/DonorDashboard/DonorInfoForm';
import DonorMatch_NotFound from '../Components/DonorDashboard/DonorMatch_NotFound';
import DonorMatch_Found from '../Components/DonorDashboard/DonorMatch_Found';
import React from 'react';

let MatchFound = 1;

function DonorDashboardBody() {
  return (<>
    <SideNavbar name = {'Alby'}/>
    <div className="main-flex-container">
      
      <div className="flex-child">
        <DonorInfoForm/> 
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
