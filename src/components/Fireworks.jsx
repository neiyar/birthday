import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Fireworks({ trigger }) {
  useEffect(() => {
    if (!trigger) return;
    const bursts = Array.from({ length: 4 });
    bursts.forEach((_, idx) => {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 90,
          origin: { x: (idx + 1) / 5, y: 0.5 },
        });
      }, idx * 250);
    });
  }, [trigger]);

  return null;
}
