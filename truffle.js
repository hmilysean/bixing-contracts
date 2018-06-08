// 在这里我们需要通过 js 调用以太坊钱包，通过 npm install truffle-hdwallet-provider 安装这个库
var HDWalletProvider = require("truffle-hdwallet-provider"); 
var infura_apikey = "your apikey"; // infura 为你提供的 apikey 请与你申请到的 key 保持一致，此处仅为示例
var mnemonic = "your mnemonic"; // 你以太坊钱包的 mnemonic ，可以从 Metamask 当中导出，mnemonic 可以获取你钱包的所有访问权限，请妥善保存，在开发中切勿提交到 git
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    privatenet: {
      host: "127.0.0.1",
      port: 8989,
      network_id: "314590" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      gas: 4012388,
      gasPrice: 30000000000
    },
    main: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/"+infura_apikey)
      },
      network_id: 3,
      gas: 22388,
      gasPrice: 2
    }
  }
};
