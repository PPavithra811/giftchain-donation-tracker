module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Ganache default host
      port: 8545,        // Ganache default port
      network_id: "*"    // Match any network
    }
  },

  compilers: {
    solc: {
      version: "0.8.20"  // Match your Solidity version
    }
  }
};
