//SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

contract DonorContract{

//STRUCTURES
    //Donor Structure
    struct Donor{
        uint donorID;
        address metamaskID;
        
        string firstName;
        string lastName;
        
        string contact;
        string email;
        string resAddress;

        string bloodGroup;
        string organToDonate;

        //IDs of the hospital and recipient that this donor has been matched to. Initially set to 0.
        // NOTE: Zero value means none existing. Like a 0 for recipientID implies that, that recipient does not exist.
        uint hospitalID;
        uint recipientID;
    }

    //Count of Donor objects
    uint donorCount;

    //Donor objects and a list of all addresses
    //This also creates a public getter function for the 'donors' objects. Pass the uint 'donorID' to get that object.
    mapping ( uint => Donor ) public donors;
    mapping ( address => uint ) public donorAddressList;


//EVENTS
    //Common event for transact functions
    event TaskCompletedEvent( uint );

    //Events to get the donor details
    //Event1: Get 'donorCount'
    event GetDonorCountEvent( uint );
    //Event2: Get donor details. Event to emit all donor details.
    event GetDonorEvent( uint, address, string, string, string, string, string, string, string, uint, uint );

//FUNCTIONS
    //Function to sign-up a donor. Initial sign-up.
    function DonorSignUp(
        string memory _firstName,
        string memory _lastName,
        string memory _contact,
        string memory _email,
        string memory _resAddress
    ) public returns( uint ){
        //Error that address already used
        require( donorAddressList[msg.sender] == 0,"SignUp Error: This metamask ID already has an account linked to it!" );
        //Error that email already used
        require( keccak256(abi.encodePacked(donors[donorAddressList[msg.sender]].email)) == keccak256(abi.encodePacked("")), 
                "SignUp Error: This Email ID already has an account linked to it!" );
        
        //0 is null
        donorCount++;

        //Creating the mapped object
        donors[donorCount].donorID      = donorCount;
        donors[donorCount].metamaskID   = msg.sender;
        donors[donorCount].firstName    = _firstName;
        donors[donorCount].lastName     = _lastName;
        donors[donorCount].contact      = _contact;
        donors[donorCount].email        = _email;
        donors[donorCount].resAddress   = _resAddress;
            //bloodGroup and organToDonate is by default ""
            //hospitalID and recipientID is by default 0
    
        //Update list, emit and return
        donorAddressList[msg.sender] = donorCount;

        emit TaskCompletedEvent( donorCount );

        return( donors[donorCount].donorID );
    }






    //Function to complete registration
    function DonorRegistration( string memory _bloodGroup, string memory _organ ) public returns( uint ) {
        //Error that the user does not exist.
        require( donorAddressList[msg.sender] != 0,"Registration Error: This metamask ID does not have an account linked to it!" );

        donors[donorAddressList[msg.sender]].bloodGroup     = _bloodGroup;
        donors[donorAddressList[msg.sender]].organToDonate  = _organ;

        emit TaskCompletedEvent( donorAddressList[msg.sender] );

        return( donors[donorAddressList[msg.sender]].donorID );
    }






    //Function for donor login - return sender details
    function DonorLogin( string memory _email ) public 
    returns( uint, address, string memory, string memory, string memory, string memory, string memory, string memory, string memory, uint, uint ){
        //Error that the user does not exist with this address.
        require( donorAddressList[msg.sender] != 0,"Login Error: This metamask ID does not have an account linked to it!" );
        //Error that the given email does not match the stored email.
        require(keccak256(abi.encodePacked(donors[donorAddressList[msg.sender]].email)) == keccak256(abi.encodePacked(_email)), 
                "Login Error: EmailID and Metamask address do not match!" );
      
        emit GetDonorEvent(
            donors[donorAddressList[msg.sender]].donorID,
            donors[donorAddressList[msg.sender]].metamaskID,
            donors[donorAddressList[msg.sender]].firstName,
            donors[donorAddressList[msg.sender]].lastName,
            donors[donorAddressList[msg.sender]].contact,
            donors[donorAddressList[msg.sender]].email,
            donors[donorAddressList[msg.sender]].resAddress,
            donors[donorAddressList[msg.sender]].bloodGroup,
            donors[donorAddressList[msg.sender]].organToDonate,
            donors[donorAddressList[msg.sender]].hospitalID,
            donors[donorAddressList[msg.sender]].recipientID
        );

        return(
            donors[donorAddressList[msg.sender]].donorID,
            donors[donorAddressList[msg.sender]].metamaskID,
            donors[donorAddressList[msg.sender]].firstName,
            donors[donorAddressList[msg.sender]].lastName,
            donors[donorAddressList[msg.sender]].contact,
            donors[donorAddressList[msg.sender]].email,
            donors[donorAddressList[msg.sender]].resAddress,
            donors[donorAddressList[msg.sender]].bloodGroup,
            donors[donorAddressList[msg.sender]].organToDonate,
            donors[donorAddressList[msg.sender]].hospitalID,
            donors[donorAddressList[msg.sender]].recipientID 
        );
    }






    //Functions to return the details of all donors
    //part1: function to return the 'donorAddressList'
    function GetDonorCount() public returns( uint ){
        emit GetDonorCountEvent( donorCount );
        return( donorCount );
    }

    //part2: function that will be iteratively called - This function needs to be iteratively called to get deatils of all donors
    function GetDonor( uint _donorID ) public
    returns( uint, address, string memory, string memory, string memory, string memory, string memory, string memory, string memory, uint, uint ){
        //Error this donor does not exist.
        require( donors[_donorID].donorID == _donorID, "Getter Error: Cannot find this donor!" );
        
        emit GetDonorEvent(
            donors[donorAddressList[msg.sender]].donorID,
            donors[donorAddressList[msg.sender]].metamaskID,
            donors[donorAddressList[msg.sender]].firstName,
            donors[donorAddressList[msg.sender]].lastName,
            donors[donorAddressList[msg.sender]].contact,
            donors[donorAddressList[msg.sender]].email,
            donors[donorAddressList[msg.sender]].resAddress,
            donors[donorAddressList[msg.sender]].bloodGroup,
            donors[donorAddressList[msg.sender]].organToDonate,
            donors[donorAddressList[msg.sender]].hospitalID,
            donors[donorAddressList[msg.sender]].recipientID
        );

        return(
            donors[donorAddressList[msg.sender]].donorID,
            donors[donorAddressList[msg.sender]].metamaskID,
            donors[donorAddressList[msg.sender]].firstName,
            donors[donorAddressList[msg.sender]].lastName,
            donors[donorAddressList[msg.sender]].contact,
            donors[donorAddressList[msg.sender]].email,
            donors[donorAddressList[msg.sender]].resAddress,
            donors[donorAddressList[msg.sender]].bloodGroup,
            donors[donorAddressList[msg.sender]].organToDonate,
            donors[donorAddressList[msg.sender]].hospitalID,
            donors[donorAddressList[msg.sender]].recipientID 
        );
    }
}