import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_SUPPLY = 500000;
const INITIAL_PROGRESS = 40; // 40%
const MAX_RANDOM_INCREMENT = 0.2; // Max 0.2% increase per update for more noticeable changes

const PresaleProgress: React.FC = () => {
  const [progress, setProgress] = useState(INITIAL_PROGRESS);
  const [soldAmount, setSoldAmount] = useState(TOTAL_SUPPLY * (INITIAL_PROGRESS / 100));
  
  useEffect(() => {
    // Randomly increment progress
    const interval = setInterval(() => {
      if (progress < 100) {
        const increment = Math.random() * MAX_RANDOM_INCREMENT;
        setProgress(prev => {
          const newProgress = Math.min(100, prev + increment);
          setSoldAmount(TOTAL_SUPPLY * (newProgress / 100));
          return newProgress;
        });
      }
    }, 40000); // Update every 40 seconds

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-rugmysol-dark/30 backdrop-blur-lg rounded-2xl border border-rugmysol-purple/20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Presale Progress</h2>
        <p className="text-rugmysol-blue">
          <span className="font-mono text-xl">
            {soldAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
          <span className="text-white/70"> / </span>
          <span className="text-white/90">{TOTAL_SUPPLY.toLocaleString()} $RSOL</span>
        </p>
      </div>

      <div className="relative h-6 bg-rugmysol-dark rounded-full overflow-hidden border border-rugmysol-purple/30">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-sm font-bold text-white drop-shadow-lg">
            {progress.toFixed(1)}%
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <AnimatePresence>
          {progress < 100 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-rugmysol-blue font-medium mb-2">
                Presale is live! Don't miss out!
              </p>
              <button
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-white font-bold
                hover:from-rugmysol-purple/90 hover:to-rugmysol-blue/90 transform hover:scale-105 
                transition-all duration-300 shadow-lg"
              >
                Buy $RSOL Now
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-green-400 font-bold"
            >
              Presale Completed! Airdrop Starting Soon!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PresaleProgress;
