import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="brand-logo">
          {/* Mockup for the logo, using styled text to somewhat emulate the colors if image missing */}
          <span className="logo-text">
            <span style={{color: 'var(--color-accent-red)'}}>C</span>
            <span style={{color: 'var(--color-accent-green)'}}>T</span>
            <span style={{color: 'var(--color-accent-blue)'}}>R</span>
            <span style={{color: 'var(--color-accent-gold)'}}>L</span>
            PLUSPRINT
          </span>
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/" className="active">HOME</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
        
        <div className="header-actions">
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp-outline header-cta">
            <MessageCircle size={18} />
            WHATSAPP US
          </a>
        </div>
      </div>
    </header>
  );
}
