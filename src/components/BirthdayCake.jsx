import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function BirthdayCake({ onBlow }) {
  const [lit, setLit] = useState(true);
  const [revealed, setRevealed] = useState(false);

  const handleBlow = () => {
    setLit(false);
    setRevealed(true);
    confetti({ particleCount: 220, spread: 120, origin: { y: 0.6 } });
    onBlow?.();
  };

  return (
    <section className="section" id="cake">
      <div className="glass-card cake-card">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="cake-wrap">
          <div className="cake">
            <div className="cake-layer top" />
            <div className="cake-layer middle" />
            <div className="cake-layer bottom" />
            <div className="cake-icing" />
            <div className="cake-candles">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.span key={i} className={`candle ${lit ? 'lit' : 'gone'}`} animate={lit ? { y: [0, -2, 0] } : { opacity: 0 }} transition={{ duration: 0.7, repeat: lit ? Infinity : 0 }} />
              ))}
            </div>
            <motion.div className="flame" animate={lit ? { scale: [1, 1.15, 1], rotate: [0, 6, -6, 0] } : { opacity: 0 }} transition={{ duration: 0.5, repeat: lit ? Infinity : 0 }} />
          </div>
          <div className="cake-copy">
            <h2 className="text-3xl font-bold mb-3">Blow the Candles</h2>
            <p className="text-pink-100 mb-5">Make a wish and let the magic begin.</p>
            <button className="btn cake-btn" onClick={handleBlow}>🎂 Blow the Candles</button>
            {revealed && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="cake-message">Happy Birthday Princess ❤️</motion.div>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
