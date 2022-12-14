
require("@nomiclabs/hardhat-waffle")
module.exports={
  solidity: "0.8.9",

  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli:{
      url: "https://eth-goerli.g.alchemy.com/v2/2fEys4vmcOZ1TOY6y5OjFg1hkYY8IsWo",
      accounts: ["8113c92e0b197926e4aa92d859f4e25bfae177c474138690debe6f926fafea1b"]
    }
  }
}
// Hash ket : 0xC8EE405DDE895aF9dD3a09985592e0625Da37015
// npx hardhat run scripts/deploy.js --network localhost
// https://eth-rinkeby.alchemyapi.io/v2/xDBLWgwe-guPU5MgiFrpGFDse4wFfKfL
// 0x509Ce6E51f85AB7b22C62D4dE2A908EB4Ac33f24
// 0xd32a5152aB73bf3ff250364Cbee179d48912f6f4