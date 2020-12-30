type Account = {
  privateKey: string;
  balance: string;
  address: string;
};

type MockAccount = {
  secretKey: string;
  balance: string;
};

export const accounts: Account[] = [
  {
    privateKey: '0xc5e8f61d1ab959b397eecc0a37a6517b8e67a0e7cf1f4bce5591f3ed80199122',
    balance: '100000000000000000000000',
    address: '0xc783df8a850f42e7F7e57013759C285caa701eB6',
  },
  {
    privateKey: '0xd49743deccbccc5dc7baa8e69e5be03298da8688a15dd202e20f15d5e0e9a9fb',
    balance: '100000000000000000000000',
    address: '0xeAD9C93b79Ae7C1591b1FB5323BD777E86e150d4',
  },
  {
    privateKey: '0x23c601ae397441f3ef6f1075dcb0031ff17fb079837beadaf3c84d96c6f3e569',
    balance: '100000000000000000000000',
    address: '0xE5904695748fe4A84b40b3fc79De2277660BD1D3',
  },
  {
    privateKey: '0xee9d129c1997549ee09c0757af5939b2483d80ad649a0eda68e8b0357ad11131',
    balance: '100000000000000000000000',
    address: '0x92561F28Ec438Ee9831D00D1D59fbDC981b762b2',
  },
  {
    privateKey: '0x87630b2d1de0fbd5044eb6891b3d9d98c34c8d310c852f98550ba774480e47cc',
    balance: '100000000000000000000000',
    address: '0x2fFd013AaA7B5a7DA93336C2251075202b33FB2B',
  },
  {
    privateKey: '0x275cc4a2bfd4f612625204a20a2280ab53a6da2d14860c47a9f5affe58ad86d4',
    balance: '100000000000000000000000',
    address: '0x9FC9C2DfBA3b6cF204C37a5F690619772b926e39',
  },
  {
    privateKey: '0x7f307c41137d1ed409f0a7b028f6c7596f12734b1d289b58099b99d60a96efff',
    balance: '100000000000000000000000',
    address: '0xFbC51a9582D031f2ceaaD3959256596C5D3a5468',
  },
  {
    privateKey: '0x2a8aede924268f84156a00761de73998dac7bf703408754b776ff3f873bcec60',
    balance: '100000000000000000000000',
    address: '0x84Fae3d3Cba24A97817b2a18c2421d462dbBCe9f',
  },
  {
    privateKey: '0x8b24fd94f1ce869d81a34b95351e7f97b2cd88a891d5c00abc33d0ec9501902e',
    balance: '100000000000000000000000',
    address: '0xfa3BdC8709226Da0dA13A4d904c8b66f16c3c8BA',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b29085',
    balance: '100000000000000000000000',
    address: '0x6c365935CA8710200C7595F0a72EB6023A7706Cd',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b29086',
    balance: '100000000000000000000000',
    address: '0xD7de703D9BBC4602242D0f3149E5fFCD30Eb3ADF',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b29087',
    balance: '100000000000000000000000',
    address: '0x532792B73C0C6E7565912E7039C59986f7E1dD1f',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b29088',
    balance: '100000000000000000000000',
    address: '0xEa960515F8b4C237730F028cBAcF0a28E7F45dE0',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b29089',
    balance: '100000000000000000000000',
    address: '0x3d91185a02774C70287F6c74Dd26d13DFB58ff16',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908a',
    balance: '100000000000000000000000',
    address: '0x5585738127d12542a8fd6C71c19d2E4CECDaB08a',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908b',
    balance: '100000000000000000000000',
    address: '0x0e0b5a3F244686Cf9E7811754379B9114D42f78B',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908c',
    balance: '100000000000000000000000',
    address: '0x704cF59B16Fd50Efd575342B46Ce9C5e07076A4a',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908d',
    balance: '100000000000000000000000',
    address: '0x0a057a7172d0466AEF80976D7E8c80647DfD35e3',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908e',
    balance: '100000000000000000000000',
    address: '0x68dfc526037E9030c8F813D014919CC89E7d4d74',
  },
  {
    privateKey: '0x28d1bfbbafe9d1d4f5a11c3c16ab6bf9084de48d99fbac4058bdfa3c80b2908f',
    balance: '100000000000000000000000',
    address: '0x26C43a1D431A4e5eE86cD55Ed7Ef9Edf3641e901',
  },
];

export const mockAccounts: MockAccount[] = accounts.map(a => ({ secretKey: a.privateKey, balance: a.balance }));
