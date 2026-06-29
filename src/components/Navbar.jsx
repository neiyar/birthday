import { FiHeart } from 'react-icons/fi';

const links = ['Home', 'Letter', 'Dua', 'Gallery', 'Wishes'];

export default function Navbar() {
  return (
    <nav className="navbar glass-card">
      <a href="#home" className="brand"><FiHeart /> Sis</a>
      <div className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
        ))}
      </div>
    </nav>
  );
}
