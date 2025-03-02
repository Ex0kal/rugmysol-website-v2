import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 mt-16 bg-rugmysol-dark/50 backdrop-blur-lg border-t border-rugmysol-purple/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
              About $RSOL
            </h3>
            <p className="text-rugmysol-blue/80">
              The most advanced memecoin that will definitely not rug you (maybe)! 🎭
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
                >
                  Tokenomics
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-right"
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-rugmysol-purple to-rugmysol-blue text-transparent bg-clip-text">
              Community
            </h3>
            <div className="flex justify-end space-x-6">
              <a
                href="https://twitter.com/rugmysol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://t.me/rugmysol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
              >
                Telegram
              </a>
              <a
                href="https://discord.gg/rugmysol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rugmysol-blue/80 hover:text-rugmysol-purple transition-colors duration-300"
              >
                Discord
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 pt-8 border-t border-rugmysol-purple/20 text-center"
        >
          <p className="text-rugmysol-blue/60">
            2025 RUGmySOL ($RSOL). All rights reserved (or maybe not).
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
