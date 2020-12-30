import { parseEthAddress, parseBigNumber } from '../test/shared/parser';
import { Overrides } from 'ethers';
import { ethers } from 'hardhat';
import { CrystalOracle__factory} from '../typechain/factories/CrystalOracle__factory';
import { requestConfirmation, LINKAddress } from '../test/shared/utilities';

async function main() {
  await requestConfirmation();
  const gasPrice = parseBigNumber('GAS_PRICE_GWEI', 9);
  const overrides: Overrides = { gasPrice: gasPrice };
  const oracleAddress = parseEthAddress('ORACLE_CONTRACT_ADDRESS');
  const [account] = await ethers.getSigners();
  const crystal = await new CrystalOracle__factory(account).deploy(LINKAddress, oracleAddress, ethers.utils.parseUnits('0.1', 18), overrides);
  console.log('Deployed CrystalOracle contract to: ', crystal.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });