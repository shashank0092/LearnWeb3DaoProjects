
const hre = require("hardhat");

const main=async()=>{
  const NFT=await hre.ethers.getContractFactory("NFT");
  const nft=await NFT.deploy("SHUKLA","SHU");
  await nft.deployed();
  console.log("NFT'S TOKEN'S SMART CONTRACT ADDRESS->",nft.address);
}

const runMain=async()=>{
  try{
    await main();
    process.exit(0);
  }
  catch(err){
    console.log(err);
    process.exit(1)
  }
}

runMain()