import { motion } from 'framer-motion';

const wishes = [
  'Stay Happy ❤️',
  'Dream Big ✨',
  'Always Smile 😊',
  'May Allah Bless You 🌙',
  'Happy Birthday Princess 👑'
];

export default function Wishes() {
  return (
    <section className="section" id="wishes">
      <div className="section-heading">
        <h2>Birthday Wishes</h2>
        <p>Little notes of love and blessings.</p>
      </div>
      <div className="wishes-grid">
        {wishes.map((wish, index) => (
          <motion.div key={wish} className="glass-card wish-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ rotate: -2, scale: 1.02 }}>
            {wish}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
