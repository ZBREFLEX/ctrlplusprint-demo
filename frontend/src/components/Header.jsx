import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="brand-logo">
          <span className="logo-text">
            <span className="logo-letter-c">C</span>
            <span className="logo-letter-t">T</span>
            <span className="logo-letter-r">R</span>
            <span className="logo-letter-l">L</span>
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
          <a href="https://wa.me/918590803009" target="_blank" rel="noreferrer" className="btn btn-whatsapp-outline header-cta">
            <MessageCircle size={18} />
            WHATSAPP US
          </a>
        </div>
      </div>
    </header>
  );
}
