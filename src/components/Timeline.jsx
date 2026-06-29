import { motion } from 'framer-motion';

const events = [
  { year: 'Born', icon: '👶', text: 'A precious beginning' },
  { year: '5 Years', icon: '🎈', text: 'Joyful laughter and bright smiles' },
  { year: '10 Years', icon: '🌸', text: 'Growing into a graceful soul' },
  { year: '15 Years', icon: '👑', text: 'A queen in bloom' }
];

export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="section-heading">
        <h2>Growing Beautifully</h2>
        <p>Every chapter more radiant than the last.</p>
      </div>
      <div className="timeline">
        {events.map((event, index) => (
          <motion.div key={event.year} className="timeline-item" initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
            <div className="timeline-dot" />
            <div className="glass-card timeline-card">
              <span>{event.icon}</span>
              <h3>{event.year}</h3>
              <p>{event.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
