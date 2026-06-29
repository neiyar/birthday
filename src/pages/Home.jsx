import { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BirthdayCake from '../components/BirthdayCake';
import GiftBox from '../components/GiftBox';
import Gallery from '../components/Gallery';
import Wishes from '../components/Wishes';
import Timeline from '../components/Timeline';
import Fireworks from '../components/Fireworks';
import FloatingBalloons from '../components/FloatingBalloons';
import FloatingHearts from '../components/FloatingHearts';
import MusicPlayer from '../components/MusicPlayer';
import Footer from '../components/Footer';
import CursorEffect from '../components/CursorEffect';

export default function Home() {
  const [celebrated, setCelebrated] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  const letter = useMemo(() => (
    <motion.section className="section" id="letter" style={{ y, scale }}>
      <div className="section-heading">
        <h2>Birthday Letter</h2>
        <p>From the heart of your brother</p>
      </div>
      <div className="letter-card" data-aos="fade-up">
        <p>
          Happy 15th Birthday, My Dear Sister Umme Rumman.
        </p>
        <p>
          May Allah bless you with happiness, good health, success, peace and a beautiful future.
        </p>
        <p>
          You make our family happier with your smile.
        </p>
        <p>
          Always stay happy.
        </p>
        <p>
          Love you forever.
        </p>
        <p className="font-bold text-pink-300">
          Your Brother, Neiyar Subhani ❤️
        </p>
      </div>
    </motion.section>
  ), [scale, y]);

  const dua = useMemo(() => (
    <section className="section" id="dua" data-aos="zoom-in">
      <div className="section-heading">
        <h2> Dua</h2>
        <p>Blessings for the beautiful soul</p>
      </div>
      <div className="glass-card dua-card">
        <p>اللهم بارك لها في عمرها</p>
        <p>وارزقها الصحة والسعادة</p>
        <p>واجعل مستقبلها مليئًا بالخير</p>
        <p>🤲آمين</p>
      </div>
    </section>
  ), []);

  return (
    <div className="page-shell">
      <CursorEffect />
      <FloatingBalloons />
      <FloatingHearts />
      <Navbar />
      <Hero onCelebrate={() => setCelebrated(true)} />
      <Fireworks trigger={celebrated} />
      <BirthdayCake onBlow={() => setCelebrated(true)} />
      <GiftBox />
      {letter}
      {dua}
      <Gallery />
      <Timeline />
      <Wishes />
      <MusicPlayer />
      <Footer />
    </div>
  );
}
