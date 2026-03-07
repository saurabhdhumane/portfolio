import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="p-5 rounded-full bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
        >
          <Code2 size={48} />
        </motion.div>

        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold tracking-[0.3em] text-sm"
        >
          INITIALIZING...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;