require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const API_URI=process.env.API_URI;
const METAMASK_KEY=process.env.METAMASK_KEY


module.exports = {
  solidity: "0.8.18",

  networks:{
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/${API_URI}`,
      accounts:[METAMASK_KEY],
    }
  }
};
