import { parseEthAddress, parseBigNumber } from '../test/shared/parser';
import { Overrides } from 'ethers';
import { ethers } from 'hardhat';
import { Oracle__factory } from '../typechain/factories/Oracle__factory';
import { requestConfirmation } from '../test/shared/utilities';

async function main() {
  await requestConfirmation();
  const gasPrice = parseBigNumber('GAS_PRICE_GWEI', 9);
  const overrides: Overrides = { gasPrice: gasPrice };
  const oracleAddress = parseEthAddress('ORACLE_CONTRACT_ADDRESS');
  const nodeAddress = parseEthAddress('CHAINLINK_NODE_ADDRESS');
  const [account] = await ethers.getSigners();
  const oracle = new Oracle__factory(account).attach(oracleAddress);
  await oracle.setFulfillmentPermission(nodeAddress, true, overrides);
  console.log('Set fulfillment permission for: ', nodeAddress);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });