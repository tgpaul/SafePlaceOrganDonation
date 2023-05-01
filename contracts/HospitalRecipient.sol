//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract HospitalRecipient {

//STRUCTURES
    //Hospital 
    struct Hospital{
        uint hospitalID;
        address metamaskID;

        string name;
        string location;
        string contact;
        string email;
    }

    struct Recipient{
        uint recipientID;

        string firstName;
        string lastName;
        string resAddress;
        string contact;

        string bloodGroup;
        string organNeeded;

        uint donorID;
        uint hospitalID;
    }

//MAPPINGS 
    //Hospital objects
    mapping ( uint => Hospital ) public hospitals;
    //Recipient objects
    mapping ( uint => Recipient ) public recipients;
    //List of hospital addresses
    mapping ( address => uint ) public hospitalAddressList;
    //Relation between each hospital and recipients. One to many relation. List of recipients in a specific hospital.
    mapping ( uint => uint[]) public recipientList;

    uint hospitalCount;
    uint recipientCount;

//EVENTS
    event CreateHospitalEvent( uint );
    event GetHospitalEvent( uint, address, string, string, string, string );
    event TaskCompletedEvent( uint );
    event GetRecipientListEvent ( uint[] );
    event GetRecipientEvent ( uint, string, string, string, string, string, string, uint, uint );




//FUNCTIONS
    //Function to create a new hospital
    function CreateHospital(
        address _metamaskID,
        string memory _name,
        string memory _location,
        string memory _contact,
        string memory _email
    ) public returns( uint ){
        require( hospitalAddressList[_metamaskID] == 0,"Hospital Creation Error: A hospital with this metamask ID already exists!" );
        require( keccak256(abi.encodePacked(hospitals[hospitalAddressList[msg.sender]].email)) == keccak256(abi.encodePacked("")),"Hospital Creation Error: A hospital with this email ID already exists!" );

        //0 is null
        hospitalCount++;

        //creating the new object
        hospitals[hospitalCount].hospitalID = hospitalCount;
        hospitals[hospitalCount].metamaskID = _metamaskID;
        hospitals[hospitalCount].name       = _name;
        hospitals[hospitalCount].location   = _location;
        hospitals[hospitalCount].contact    = _contact;
        hospitals[hospitalCount].email      = _email;

        //Update list, emit and return
        hospitalAddressList[msg.sender] = hospitalCount;

        emit CreateHospitalEvent( hospitalCount );

        return( hospitalCount );
    }   




    //Function for hospital login
    function HospitalLogin( uint _hospitalID ) public 
    returns( uint, address, string memory, string memory, string memory, string memory ){
        //Error that this metamask address does not have a hospital
        require( hospitalAddressList[msg.sender] != 0, "Hospital Login Error: No hospitals found with this metamaskID!");
        //Error that the given ID and the metamask addresses' hospitalID does not match
        require( hospitals[hospitalAddressList[msg.sender]].hospitalID == _hospitalID,
                "Hospital Login Error: MetamaskID and HospitalID does not match");
        
        emit GetHospitalEvent(
            hospitals[hospitalAddressList[msg.sender]].hospitalID,
            hospitals[hospitalAddressList[msg.sender]].metamaskID,
            hospitals[hospitalAddressList[msg.sender]].name,
            hospitals[hospitalAddressList[msg.sender]].location,
            hospitals[hospitalAddressList[msg.sender]].contact,
            hospitals[hospitalAddressList[msg.sender]].email
        );

        return(
            hospitals[hospitalAddressList[msg.sender]].hospitalID,
            hospitals[hospitalAddressList[msg.sender]].metamaskID,
            hospitals[hospitalAddressList[msg.sender]].name,
            hospitals[hospitalAddressList[msg.sender]].location,
            hospitals[hospitalAddressList[msg.sender]].contact,
            hospitals[hospitalAddressList[msg.sender]].email
        );
    }




    //Function to add recipient. Called by the hospital.
    function AddRecipient(
        string memory _firstName,
        string memory _lastName,
        string memory _resAddress,
        string memory _contact,
        string memory _bloodGroup,
        string memory _organNeeded
    ) public returns( uint ){
        
        //0 is null
        recipientCount++;

        //creating the recipient object
        recipients[recipientCount].recipientID  = recipientCount;
        recipients[recipientCount].firstName    = _firstName;
        recipients[recipientCount].lastName     = _lastName;
        recipients[recipientCount].resAddress   = _resAddress;
        recipients[recipientCount].contact      = _contact;
        recipients[recipientCount].bloodGroup   = _bloodGroup;
        recipients[recipientCount].organNeeded  = _organNeeded;
        recipients[recipientCount].hospitalID   = hospitalAddressList[msg.sender];
            //The donor ID is not set right now. It stays as 0, i.e, no donor assigned.

        recipientList[hospitalAddressList[msg.sender]].push(recipientCount);

        emit TaskCompletedEvent( recipientCount );

        return recipientCount;
    }




    //Function to return details of all the recipients
    //part1: return the array of recipient IDs in that hospital
    function GetRecipientList() public returns( uint[] memory ){
        emit GetRecipientListEvent( recipientList[hospitalAddressList[msg.sender]] );
        return ( recipientList[hospitalAddressList[msg.sender]] );
    }

    //part2: return the details of a recipient when given the recipient's ID
    function GetRecipient( uint _recipientID ) public returns( uint, string memory, string memory, string memory, string memory, string memory, string memory, uint, uint){
        //Error that the recipient with the given ID does not exist
        require( recipients[_recipientID].recipientID != 0, "Recipient Getter Error: Error finding the recipient" );

        //Recipient object
        Recipient memory rec;
        rec.recipientID = recipients[_recipientID].recipientID;
        rec.firstName   = recipients[_recipientID].firstName;
        rec.lastName    = recipients[_recipientID].lastName;
        rec.resAddress  = recipients[_recipientID].resAddress;
        rec.contact     = recipients[_recipientID].contact;
        rec.bloodGroup  = recipients[_recipientID].bloodGroup;
        rec.organNeeded = recipients[_recipientID].organNeeded;
        rec.donorID     = recipients[_recipientID].donorID;
        rec.hospitalID  = recipients[_recipientID].hospitalID;

        emit GetRecipientEvent( 
            rec.recipientID,
            rec.firstName,
            rec.lastName,
            rec.resAddress,
            rec.contact,
            rec.bloodGroup,
            rec.organNeeded,
            rec.donorID,
            rec.hospitalID
        );

        return ( 
            rec.recipientID,
            rec.firstName,
            rec.lastName,
            rec.resAddress,
            rec.contact,
            rec.bloodGroup,
            rec.organNeeded,
            rec.donorID,
            rec.hospitalID
         );
    }

    //The split-up function to do the matching
    function RecipientSplitMatch ( uint _hospitalID, uint _recipientID, uint _donorID ) public returns ( uint )
    {
        //Check whether the given recipient and hospital exists
        require( recipients[_recipientID].recipientID != 0, "Match Error : Cannot find this recipient!" );
        require( hospitals[_hospitalID].hospitalID != 0, "Match Error : Cannot find this hospital!" );

        //Update the object and then emit for validation
        recipients[_recipientID].donorID = _donorID;

        emit TaskCompletedEvent( recipients[_recipientID].recipientID );

        return ( recipients[_recipientID].recipientID );
    }
}