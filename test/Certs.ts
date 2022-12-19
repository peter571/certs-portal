import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";
import { getContractFactory } from "hardhat/types";

describe("Certs", () => {
  // let certs: getContractFactory;
  const uri = "asdfgkhklgkgk";
  const serialNumber = 12345;

  describe("Add certificate:", () => {
    it("It should add certicate and emit New Cert Event", async () => {
      const Certs = await hre.ethers.getContractFactory("Certs");
      const certs = await Certs.deploy();

      expect(await certs.addCertificate(uri, serialNumber)).to.emit(
        certs,
        "NewCert"
      );
    });
  });

  describe("Reverts with custom errors", () => {
    it("Reverts the transaction when the serial number has already been added", async () => {
      const Certs = await hre.ethers.getContractFactory("Certs");
      const certs = await Certs.deploy();

      await certs.deployed();

      await (await certs.addCertificate(uri, serialNumber)).wait();

      expect(await certs.addCertificate(uri, serialNumber)).to.be.revertedWith(
        "Cert serial Number already exists!"
      );
    });

    it("Reverts the transaction when the serial number is zero", async () => {
      const Certs = await hre.ethers.getContractFactory("Certs");
      const certs = await Certs.deploy();

      expect(await certs.addCertificate(uri, 0)).to.be.revertedWith(
        "Serial Number cannot be zero"
      );
    });
  });
});
