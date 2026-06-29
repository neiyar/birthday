import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="section" id="gift">
      <div className="glass-card gift-card">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="gift-wrap">
          <motion.div className={`gift-box ${opened ? 'opened' : ''}`} whileHover={{ rotate: -3, scale: 1.02 }} onClick={() => setOpened(true)}>
            <div className="gift-lid" />
            <div className="gift-body">
              <FiGift />
            </div>
          </motion.div>
          <div className="gift-copy">
            <h2 className="text-3xl font-bold mb-3">Open Surprise</h2>
            <p className="text-pink-100 mb-5">A little treasure of love, memories, and warm wishes for you.</p>
            {opened && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="gift-message">For my sweet sister Umme Rumman, you are my forever blessing. Love you always ❤️</motion.div>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
