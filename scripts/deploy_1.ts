import { parseEthAddress, parseBigNumber } from '../test/shared/parser';
import { Overrides } from 'ethers';
import { ethers } from 'hardhat';
import { Oracle__factory } from '../typechain/factories/Oracle__factory';
import { requestConfirmation, LINKAddress } from '../test/shared/utilities';

async function main() {
  await requestConfirmation();
  const gasPrice = parseBigNumber('GAS_PRICE_GWEI', 9);
  const overrides: Overrides = { gasPrice: gasPrice };
  const [account] = await ethers.getSigners();
  const oracle = await new Oracle__factory(account).deploy(LINKAddress, overrides);
  console.log('Deployed Oracle contract to: ', oracle.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });