import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiStar, FiHeart } from 'react-icons/fi';
import confetti from 'canvas-confetti';

export default function Hero({ onCelebrate }) {
  const handleCelebrate = () => {
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.6 } });
    onCelebrate?.();
  };

  return (
    <section className="hero" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300/10 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-card"
      >
        <div className="hero-content">
          <motion.div className="badge" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
            <FiStar /> Surprise Birthday Experience
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            Happy 15th Birthday<br />
            <span className="text-gold">My Dear Sister</span> <FiHeart className="inline text-red-400" />
          </motion.h1>
          <p className="text-sm text-gray-300 mb-4">From: <span className="font-bold text-pink-300">Neiyar Subhani</span></p>
          <p className="text-sm text-gray-300 mb-6">To: <span className="font-bold text-pink-300">Umme Rumman (Khushi)</span></p>
          <TypeAnimation
            sequence={['A magical celebration just for you ✨', 1400, 'A beautiful day full of love 🌙', 1400, 'Forever cherished, always adored 💖', 1400]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="hero-typing"
          />
          <motion.button className="btn hero-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={handleCelebrate}>
            Celebrate
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
