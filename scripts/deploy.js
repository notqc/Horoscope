const hre = require("hardhat");

async function main() {
  console.log("Deploying Contract...");
  const horoscope = await hre.ethers.deployContract(
    "contracts/horoscopeNFT.sol:horoscopeNFT"
  );
  console.log("Contract deployed to address:", horoscope.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  async function main() {
    const Horoscope = await ethers.deployContract("contracts/horoscopeNFT.sol:horoscopeNFT");
    const horoscope = await Horoscope.waitForDeployment();
    console.log("Deploying Contract...")
    console.log("Contract deployed to address:",  await horoscope.getAddress());
  }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
