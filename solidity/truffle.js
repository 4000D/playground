require("babel-register");
require("babel-polyfill");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "*",
      gas: 4500000,
    },
    onther: {
      host: "onther.io",
      port: 60010,
      network_id: "777",
      from: "0x71283a1d35f63e35a34476f6ad0a85a49317181b", // accounts[0]
      gas: 4700000,
      gasPrice: 18e9,
    },
  }
};
