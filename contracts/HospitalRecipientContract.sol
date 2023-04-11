//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HospitalRecipientContract{
//STRUCTURES
    // Hospital structure
    struct Hospital {
        uint hospitalID;
        address metamaskID;

        string name;
        string location;
        string contact;
        string email;

        uint[] recipientList;
    }

    // Recipient Structure
    struct Recipient {
        uint recipientID;

        string firstName;
        string lastName;

        string resAddress;
        string contact;

        string bloodGroup;
        string organNeeded;

        address donorAddress;
        address hospitalAddress;
    }

    uint hospitalCount;
    uint recipientCount;

    mapping (address => Hospital) public hospitals;
    mapping (uint => Recipient) public recipients;

    // Function to create a new hospital. Controlled by admin
    function addHospital(string memory _name, string memory _location, string memory _contact, string memory _email) public returns(uint){
        // Create a new hospital object
        Hospital storage newHospital = hospitals[msg.sender];
        newHospital.hospitalID = hospitalCount;
        newHospital.metamaskID = msg.sender;
        newHospital.name = _name;
        newHospital.location = _location;
        newHospital.contact = _contact;
        newHospital.email = _email;


        // Increment hospital count
        hospitalCount++;
        return hospitalCount-1;
    }

    // Function to create a new recipient. Called by the hospital.
    function addRecipient(
        string memory _firstName,
        string memory _lastName,
        string memory _resAddress,
        string memory _contact,
        string memory _bloodGroup,
        string memory _organNeeded,
        address _donorAddress
    ) public returns(uint){
        recipients[recipientCount] = Recipient(
            recipientCount,
            _firstName,
            _lastName,
            _resAddress,
            _contact,
            _bloodGroup,
            _organNeeded,
            address(0),
            msg.sender
    );
        hospitals[msg.sender].recipientList.push(recipientCount);
        recipientCount++;
        return recipientCount;
    }

    
    

}