import React from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const projectId = process.env.REACT_APP_WALLETCONNECT_PROJECT_ID || '';

const metadata = {
  name: 'RUGmySOL',
  description: 'The Most Advanced Memecoin on Solana',
  url: 'https://rugmysol.com',
  icons: ['https://rugmysol.com/logo.png']
}

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  },
  ssr: true,
  metadata
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#9C4FFF',
  }
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-rugmysol-dark text-white">
          <Header />
          <Hero />
          <Footer />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
