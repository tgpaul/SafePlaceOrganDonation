
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

contract DonorContract{
//STRUCTURES
    // Donor structure
    struct Donor {
        address metamaskID;
        string firstName;
        string lastName;

        string contact;
        string email;
        string resAddress;

        string bloodGroup;
        string organToDonate;

        bool isRegisteredDonor;
    }

    //Key-value pair of addresses and 'Donor' objects
    mapping(address => Donor) donors;
    // array of addresses of all donors
    address[] donorAddresses;

//EVENTS
    event newDonorEvent(address);
    event donorRegisteredEvent(address);
    event getDonorEvent(
        address indexed metamaskID,
        string firstName,
        string lastName,
        string contact,
        string email,
        string resAddress,
        string bloodGroup,
        string organToDonate,
        bool isRegisteredDonor
    );
    event getAllDonorsEvent(Donor[] donors);

//FUNCTIONS

    // Function to sign-up as donor. 'isRegisteredDonor' is still set to false.
    function donorSignUp(string memory _firstName,
                        string memory _lastName,
                        string memory _contact,
                        string memory _email,
                        string memory _resAddress) public{

        require(donors[msg.sender].metamaskID == address(0), "Sign-Up Error : Donor is already registered!");
        //IMPLEMENT TRY CATCH

        // creating a new donor object with details
        Donor memory newDonorObject = Donor({
            metamaskID: msg.sender,
            firstName: _firstName,
            lastName: _lastName,
            contact: _contact,
            email: _email,
            resAddress: _resAddress,
            bloodGroup: "",
            organToDonate: "",
            isRegisteredDonor: false
        });

        // Updating data and array, and then emit the sender address to let the FE know of the completion of the registration.
        donors[msg.sender] = newDonorObject;
        donorAddresses.push(msg.sender);
        emit newDonorEvent(msg.sender);
    }



    // Function to complete the registration.
    function donorRegistration(string memory _bloodGroup, string memory _organToDonate) public{
        // 'isRegisteredDonor' is set only after the BG and organ is specified
        require(donors[msg.sender].isRegisteredDonor == false, "Error Registration : Organ and Blood Group has already been set!");

        // Update data
        donors[msg.sender].bloodGroup = _bloodGroup;
        donors[msg.sender].organToDonate = _organToDonate;
        donors[msg.sender].isRegisteredDonor = true;

        emit donorRegisteredEvent(msg.sender);
    }



    // Function to return details of a specific donor
    function getDonor(address addr) public returns(Donor memory){
        require(donors[msg.sender].metamaskID != address(0),"Error Log-in : This user is not registered to this app!");
        // Donor object
        Donor memory newDonorObject = donors[addr];
        emit getDonorEvent(newDonorObject.metamaskID, newDonorObject.firstName, newDonorObject.lastName, newDonorObject.contact, newDonorObject.email, newDonorObject.resAddress, newDonorObject.bloodGroup, newDonorObject.organToDonate, newDonorObject.isRegisteredDonor);
        return newDonorObject;
    }

    // Function to get all the details of all the donors
    function getAllDonors() public returns(Donor[] memory){
        Donor[] memory allDonors = new Donor[](donorAddresses.length);
        for(uint i=0;i<donorAddresses.length;i++){
            allDonors[i] = donors[donorAddresses[i]];
        }
        emit getAllDonorsEvent(allDonors);
        return allDonors;
    }

    // Function that returns the array of addresses of all the donors
    function getDonorAddresses() public view returns(address[] memory){
        return donorAddresses;
    }
}