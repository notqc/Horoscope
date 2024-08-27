require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
};
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const {PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.20",
   defaultNetwork: "amoy",
   networks: {
     hardhat: {},
     amoy: {
       url: "https://rpc.ankr.com/polygon_amoy",
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
};
