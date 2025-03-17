


'use client';

import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { useEffect, useState } from 'react';
import '@rainbow-me/rainbowkit/styles.css';

// Global flag to track initialization
let isInitialized = false;

// Patch the CustomElementRegistry to prevent errors
const patchCustomElementRegistry = () => {
  if (typeof window !== 'undefined' && !isInitialized) {
    const originalDefine = window.customElements.define;
    window.customElements.define = function (name, constructor, options) {
      if (!window.customElements.get(name)) {
        originalDefine.call(window.customElements, name, constructor, options);
      } else {
        console.warn(`Custom element "${name}" has already been defined, skipping registration`);
      }
    };
    isInitialized = true;
  }
};

const InjectiveTestnet = {
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

const config = getDefaultConfig({
  appName: 'InjectPay',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  chains: [InjectiveTestnet],
});

// Create query client outside of component to avoid recreation
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Patch custom elements registry to prevent errors
    patchCustomElementRegistry();
    
    // Mark as mounted after patching
    setMounted(true);
  }, []);

  // Only render children when mounted to prevent SSR issues
  if (!mounted) {
    return null;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
