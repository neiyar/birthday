import { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../photo/WhatsApp Image 2026-06-29 at 1.33.52 AM.jpeg';
import img2 from '../../photo/WhatsApp Image 2026-06-29 at 1.33.53 AM (1).jpeg';
import img3 from '../../photo/WhatsApp Image 2026-06-29 at 1.33.53 AM.jpeg';
import img4 from '../../photo/WhatsApp Image 2026-06-29 at 1.33.54 AM (1).jpeg';
import img5 from '../../photo/WhatsApp Image 2026-06-29 at 1.33.54 AM.jpeg';
import img6 from '../../photo/WhatsApp Image 2026-06-29 at 1.34.56 AM.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="section" id="gallery">
      <div className="section-heading">
        <h2>Sweet Moments</h2>
        <p>Memories wrapped in color and joy.</p>
      </div>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <motion.div key={src} className="gallery-card" whileHover={{ scale: 1.03, y: -5 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <img src={src} alt={`Birthday memory ${index + 1}`} onClick={() => setActiveImage(src)} />
          </motion.div>
        ))}
      </div>
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Expanded preview" />
        </div>
      )}
    </section>
  );
}
