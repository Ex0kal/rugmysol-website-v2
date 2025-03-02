import React from 'react';
import { motion } from 'framer-motion';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import PresaleProgress from './PresaleProgress';

const Hero: React.FC = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  return (
    <div className="container mx-auto px-4 py-16 text-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-rugmysol-purple/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-rugmysol-blue/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
            RUGmySOL
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-rugmysol-blue/80 mb-8">
          The Most Advanced Memecoin on Solana! 🚀
        </p>
      </motion.div>

      <motion.div
        className="relative w-64 h-64 mx-auto mb-12"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Animated glow effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue rounded-full opacity-20 blur-xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-rugmysol-blue to-rugmysol-purple rounded-full opacity-10 blur-lg animate-ping" />
        <img
          src="/logo.png"
          alt="RUGmySOL Logo"
          className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(156,79,255,0.5)]"
        />
      </motion.div>

      {/* Airdrop Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="space-y-6 relative z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative inline-block"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
              🎁 Airdrop is LIVE! 🎁
            </span>
            {/* Animated particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-rugmysol-purple rounded-full"
              animate={{
                y: [-10, 10],
                x: [10, -10],
                opacity: [1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-rugmysol-blue rounded-full"
              animate={{
                y: [10, -10],
                x: [-10, 10],
                opacity: [1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </h2>
        </motion.div>

        <p className="text-xl text-rugmysol-blue/80 max-w-2xl mx-auto mb-8">
          Connect your wallet now to claim your $RSOL tokens before they're gone!
        </p>
        
        {!isConnected && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => open()}
            className="relative px-8 py-4 text-2xl rounded-xl bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue 
            text-white font-bold hover:from-rugmysol-purple/90 hover:to-rugmysol-blue/90 
            transform transition-all duration-300 animate-glow shadow-lg group"
          >
            <span className="relative z-10">🚀 Connect Wallet & Get $RSOL 🚀</span>
            {/* Button glow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue rounded-xl opacity-0 
              group-hover:opacity-50 blur-xl transition-opacity duration-300" />
          </motion.button>
        )}

        <PresaleProgress />

        {/* Animated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "🔥 1M Supply",
              description: "Limited supply, unlimited memes!"
            },
            {
              title: "🎯 Fair Launch",
              description: "100% community-driven project"
            },
            {
              title: "🚀 Moon Soon",
              description: "Join the $RSOL revolution!"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-rugmysol-dark/40 backdrop-blur-lg rounded-xl p-6 border border-rugmysol-purple/20
              hover:border-rugmysol-blue/40 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              {/* Card hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rugmysol-purple/20 to-rugmysol-blue/20 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
              <p className="text-rugmysol-blue/80 relative z-10">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
