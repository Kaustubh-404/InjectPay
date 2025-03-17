export const HARDCODED_USERS = {
    organization: {
      id: '1',
      email: 'admin@techcorp.com',
      password: 'admin123',
      name: 'TechCorp Inc.',
      type: 'organization'
    },
    employee: {
      id: '1',
      email: 'john@techcorp.com',
      password: 'employee123',
      name: 'John Doe',
      type: 'employee',
      walletAddress: 'put the wallet address'
    }
  };
  
//   export const CHAIN_CONFIG = {
//   id: 5201420,
//   name: 'SONIC Testnet',
//   network: 'SONIC-testnet',
//   nativeCurrency: {
//     name: 'ETN',
//     symbol: 'ETN',
//     decimals: 18,
//   },
//   rpcUrls: {
//     public: { http: ['https://rpc.ankr.com/SONIC_testnet'] },
//     default: { http: ['https://rpc.ankr.com/SONIC_testnet'] },
//   },
//   blockExplorers: {
//     default: { name: 'SONIC Explorer', url: 'https://blockexplorer.thesecurityteam.rocks/' },
//   },
// } as const;


export const CHAIN_CONFIG = {
  id: 2424,
  name: 'inEVM testnet',
  network: 'inEVM testnet',
  nativeCurrency: {
    name: 'INJ',
    symbol: 'INJ',
    decimals: 18,
  },
  rpcUrls: {
    public: { http: ['https://testnet.rpc.inevm.com/http'] },
    default: { http: ['https://testnet.rpc.inevm.com/http'] },
  },
  blockExplorers: {
    default: { name: 'InjectiveInEVMScan', url: 'https://inevm-testnet.explorer.caldera.xyz' },
  },
} as const;
