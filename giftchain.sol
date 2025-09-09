// contracts/GiftChain.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GiftChai Donation 
        string donor;
        uint amount;
    

    Donation[] public donations;

    function donate(string memory _donor) public payable {
        donations.push(Donation(_donor, msg.value));
    

    function getAllDonations() public view returns (Donation[] memory) 
        return donations;
    

