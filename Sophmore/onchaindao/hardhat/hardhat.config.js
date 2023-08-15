require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url:process.env.RPC_URL,
      accounts:[process.env.PRIVATE_KEY],
    },
  },

  etherscan:{
    apiKey:process.env.ETHERSCAN_API_KEY
  }
};

// CryptoDevsNFT deployed to: 0x1478ba2E1a1c18b91856aB25CCC874B55AD488C3
// FakeNFTMarketplace deployed to: 0xe920327D4Fc8242503aC909CB72B1f57eB28fa35
// CryptoDevsDAO deployed to: 0x49F92227A84aAc571526Df39000D63AbaaC51dBA