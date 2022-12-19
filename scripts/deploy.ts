import { ethers } from "hardhat";

async function main() {

  const Certs = await ethers.getContractFactory("Certs");
  const certs = await Certs.deploy();

  await certs.deployed();

  console.log(`Deployed to ${certs.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
