import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  duration: 2.5 + Math.random() * 2,
}));

export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
          }}
          style={{ left: heart.left }}
        />
      ))}
    </div>
  );
}
