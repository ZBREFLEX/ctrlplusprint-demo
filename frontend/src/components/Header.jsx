import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="brand-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="logo-text">
            <span className="logo-letter-c">C</span>
            <span className="logo-letter-t">T</span>
            <span className="logo-letter-r">R</span>
            <span className="logo-letter-l">L</span>
            PLUSPRINT
          </span>
        </Link>

        <nav className="desktop-nav">
          <Link to="/" className="active">
            HOME
          </Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <div className="header-actions">
          <a
            href="https://wa.me/918590803009"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp-outline header-cta"
          >
            <MessageCircle size={18} />
            <span className="cta-text">WHATSAPP US</span>
          </a>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <Link to="/" className="active" onClick={toggleMobileMenu}>HOME</Link>
          <Link to="/shop" onClick={toggleMobileMenu}>SHOP</Link>
          <Link to="/about" onClick={toggleMobileMenu}>ABOUT</Link>
          <Link to="/contact" onClick={toggleMobileMenu}>CONTACT</Link>
        </nav>
      )}
    </header>
  );
}
