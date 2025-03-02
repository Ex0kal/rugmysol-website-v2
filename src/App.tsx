import React from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiConfig, createConfig } from 'wagmi';
import { mainnet } from 'viem/chains';
import { http } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || '379b738b6f181eb285615742827280ae';

const metadata = {
  name: 'RUGmySOL',
  description: 'The Most Advanced Memecoin on Solana',
  url: 'https://rugmysol.com',
  icons: ['https://rugmysol.com/logo.png']
};

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  }
});

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: mainnet,
  themeMode: 'dark'
});

function App() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-rugmysol-dark text-white">
          <Header />
          <Hero />
          <Footer />
        </div>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;
