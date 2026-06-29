import { motion } from 'framer-motion';

const balloons = [
  { id: 1, left: '8%', delay: 0 },
  { id: 2, left: '22%', delay: 0.6 },
  { id: 3, left: '72%', delay: 1.2 },
  { id: 4, left: '86%', delay: 0.4 }
];

export default function FloatingBalloons() {
  return (
    <div className="floating-balloons" aria-hidden="true">
      {balloons.map((balloon) => (
        <motion.div key={balloon.id} className={`balloon balloon-${balloon.id}`} animate={{ y: [0, -16, 0], rotate: [0, 3, 0] }} transition={{ duration: 3.5 + balloon.delay, repeat: Infinity, delay: balloon.delay }} style={{ left: balloon.left }} />
      ))}
    </div>
  );
}
