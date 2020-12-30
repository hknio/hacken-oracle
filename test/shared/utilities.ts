import { network } from 'hardhat';
import yesno from 'yesno';

export const LINKAddress: string = (() => {
  switch (network.name) {
    case 'mainnet':
      return '0x514910771af9ca656af840dff83e8264ecf986ca'; // Mainnet
    case 'kovan':
      return '0xa36085F69e2889c224210F603D836748e7dC0088'; // Rinkeby
    case 'ropsten':
      return '0x20fE562d797A42Dcb3399062AE9546cd06f63280'; // Ropsten
    case 'hardhat':
    case 'localhost':
      return '0x0000000000000000000000000000000000000000';
    default:
      throw new Error(`Unknown network ${network?.name}`);
  }
})();

export async function requestConfirmation(message = 'Ready to continue?'): Promise<void> {
  const ok = await yesno({
    yesValues: ['', 'yes', 'y', 'yes'],
    question: message,
  });
  if (!ok) {
    throw new Error('Script cancelled.');
  }
}