// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Certs {
    address public institutionAdmin;

    //Struct to hold details of the certificate
    struct Certificate {
        uint256 serialNumber;
        string certUri;
    }

    //Mapping to map all certificates using the serial number as the key
    mapping(uint256 => Certificate) public certificates;

    constructor() {
        //The deployer of the contract is the institution
        institutionAdmin = msg.sender;
    }

    modifier isAdmin() {
        require(
            msg.sender == institutionAdmin,
            "Only admin can call this function."
        );
        _;
    }

    event NewCert(
        string certUri,
        uint256 serialNumber
    );

    function checkCertExists(uint256 _serialNumber)
        internal
        view
        returns (bool)
    {
        Certificate storage c = certificates[_serialNumber];
        if (c.serialNumber == 0) {
            return false;
        } else {
            return true;
        }
    }

    function addCertificate(
        string memory _certUri,
        uint256 _serialNumber
    ) external isAdmin {
        require(
            !checkCertExists(_serialNumber),
            "Cert serial Number already exists!"
        );
        require(_serialNumber != 0, "Serial Number cannot be zero");
        Certificate storage c = certificates[_serialNumber];

        c.certUri = _certUri;
        c.serialNumber = _serialNumber;

        emit NewCert(_certUri, _serialNumber);
    }

    function getCertificate(uint256 serialNumber)
        external
        view
        returns (Certificate memory)
    {
        require(checkCertExists(serialNumber), "Cert does not exists!");
        return certificates[serialNumber];
    }
}
