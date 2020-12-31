import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy-ethers';
import 'hardhat-deploy';
import 'hardhat-typechain';
import '@typechain/ethers-v5';
import '@nomiclabs/hardhat-etherscan';

import { HardhatUserConfig, task } from 'hardhat/config';
import { accounts } from './test/shared/accounts';
import * as dotenv from 'dotenv';

dotenv.config();

const secret: string = process.env.MNEMONIC_OR_PRIVATE_KEY as string;
const etherscanKey: string = process.env.ETHERSCAN_API_KEY as string;

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      gas: 99999999,
      gasPrice: 1,
      blockGasLimit: 999999999,
      allowUnlimitedContractSize: true,
      accounts: accounts,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [secret],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [secret],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [secret],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [secret],
    },
    coverage: {
      url: 'http://127.0.0.1:8555', // Coverage launches its own ganache-cli client
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanKey,
  },
  // gasReporter: {
  //   enabled: COINMARKETCAP_API_KEY ? true : false,
  //   // coinmarketcap: COINMARKETCAP_API_KEY,
  //   currency: 'GBP',
  //   src: './contracts'
  // }
};

export default config;
