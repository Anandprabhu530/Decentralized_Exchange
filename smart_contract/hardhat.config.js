//https://eth-sepolia.g.alchemy.com/v2/kMYb9do5tuKnzU_VIarew2_ipyMoAndv

require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/kMYb9do5tuKnzU_VIarew2_ipyMoAndv',
      accounts: ['476d3786a125a73e05d3d89fbc6dcf26261fe262b3a711780da8fefcb74d5e9f']
    }
  }
}

