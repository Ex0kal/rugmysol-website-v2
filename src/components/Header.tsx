import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

const Header: React.FC = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-rugmysol-dark/50 backdrop-blur-lg border-b border-rugmysol-purple/20">
      <div className="flex items-center">
        <div className="w-16 h-16 mr-4 relative group">
          <img
            src="/logo.png"
            alt="RUGmySOL"
            className="w-full h-full object-contain rounded-lg transform transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rugmysol-purple/20 to-rugmysol-blue/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
          $RSOL
        </h1>
      </div>
      
      <div>
        {isConnected ? (
          <div className="flex items-center gap-4">
            <span className="text-rugmysol-blue font-medium">
              {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
            </span>
            <button
              onClick={() => disconnect()}
              className="px-4 py-2 rounded-lg bg-rugmysol-dark border border-rugmysol-purple/50 text-rugmysol-purple hover:bg-rugmysol-purple/10 transition-all duration-300"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={() => open()}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-white font-bold
            hover:from-rugmysol-purple/90 hover:to-rugmysol-blue/90 transform hover:scale-105 
            transition-all duration-300 animate-glow shadow-lg"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
