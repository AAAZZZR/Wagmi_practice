// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
require("dotenv").config();
const {WHITELIST_CONTRACT_ADDRESS,METADATA_URL} = require("../Constant");

async function main() {


  const lockedAmount = hre.ethers.utils.parseEther("1");
  const CryptoNFT = await hre.ethers.getContractFactory("CryptoNFT");
  const cryptoNFT = await CryptoNFT.deploy(`${METADATA_URL}`, `${WHITELIST_CONTRACT_ADDRESS}`);

  await cryptoNFT.deployed();

  console.log(
    "CryptoNFT address is:", cryptoNFT.address, 
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
