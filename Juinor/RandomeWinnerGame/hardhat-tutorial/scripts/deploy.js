const {ethers}=require("hardhat")
require("dotenv").config({path:".env"})
const{FEE,KEY_HASH,LINK_TOKEN,VRF_COORDINATOR}=require("../constants/index")

async function main(){
  const randomWinnerGame = await hre.ethers.deployContract("RandomWinnerGame",[VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE]);
  await randomWinnerGame.waitForDeployment();
  console.log("Verify Contract Address:", randomWinnerGame.target);
  console.log("Sleeping.....");
  await sleep(30000);
  await hre.run("verify:verify", {
    address: randomWinnerGame.target,
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});