import SideNavbar from '../Components/DonorDashboard/SideNavbar';
import DonorInfoForm from '../Components/DonorDashboard/DonorInfoForm';
import DonorMatch_NotFound from '../Components/DonorDashboard/DonorMatch_NotFound';
import DonorMatch_Found from '../Components/DonorDashboard/DonorMatch_Found';
import React, { useEffect, useState } from 'react';
import { GetDonorDetailsFunction } from '../Components/BackendFunctions/BE_DonorFunctions';
import { GetRecipientDetails, GetHospitalDetailsFunction, CheckIfDonorMatched,GetMatchDetails } from '../Components/BackendFunctions/BE_HospitalFunctions';



function DonorDashboardBody() {
  const [donorData, setDonorData] = useState(null);
  const [recipientData, setRecipientData] = useState(null);
  const [hospitalData, setHospitalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [matchFound, setMatchFound] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const donorData = await GetDonorDetailsFunction();
        setDonorData(donorData);
        console.log("DONOR",donorData);
  
        let check = await CheckIfDonorMatched( donorData[0] );
        // const check = 1;
        console.log("Matchfound before",matchFound);

        console.log("CHECK",check);

        if (check == 0) {
          setMatchFound(false);
        }else{
          console.log("Matchfound 1",matchFound);
          const matchDetails = await GetMatchDetails(check);
          console.log("Match details",matchDetails);

          const recipientDetails = await GetRecipientDetails(matchDetails[3]);
          setRecipientData(recipientDetails);
          console.log("Recipient Details ; ", recipientDetails);

          const hospitalDetails = await GetHospitalDetailsFunction( matchDetails[5] );
          setHospitalData(hospitalDetails);
          console.log("Hsopital Details : ",hospitalDetails);

          setMatchFound(true);
          console.log("Matchfound 2",matchFound);
        }

          
          // const recipientData = await GetRecipientDetails(donorData[10]);
          
          // console.log('RECIPIENT:', recipientData);

          // const hospitalData = await GetHospitalDetailsFunction(donorData[9]);
          
          // console.log('HOSPITAL:', hospitalData);
        

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

  return (
    <>
      <SideNavbar name={donorData && donorData[2]} />
      <div className="main-flex-container">
        <div className="flex-child">
          <DonorInfoForm data={donorData} />
        </div>
        <div className="flex-child">
          {matchFound ? (
            <DonorMatch_Found recipientData={recipientData} hospitalData={hospitalData} />
          ) : (
            <DonorMatch_NotFound />
          )}
        </div>
      </div>
    </>
  );
}

export default DonorDashboardBody;
