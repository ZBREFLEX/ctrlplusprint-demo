import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Folder, Image, Star, MessageCircle, ClipboardList, Mail, Settings, Users, FileText, Activity, Menu, X } from 'lucide-react';
import './Admin.css';

export default function AdminLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="admin-brand" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2>
              <span className="logo-letter-c">C</span>
              <span className="logo-letter-t">T</span>
              <span className="logo-letter-r">R</span>
              <span className="logo-letter-l">L</span>
              PLUSPRINT
            </h2>
            <p>ADMIN PANEL</p>
          </div>
          {mobileMenuOpen && (
            <button className="mobile-menu-btn" onClick={closeMobileMenu} style={{ display: 'block' }}>
              <X size={24} />
            </button>
          )}
        </div>

        <nav className="admin-nav">
          <Link to="/admin" className={`nav-item ${isActive('/admin')}`} onClick={closeMobileMenu}>
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <div className="nav-group">SHOP</div>
          <Link to="/admin/products" className={`nav-item ${isActive('/admin/products')}`} onClick={closeMobileMenu}>
            <ShoppingBag size={18} /> Products
          </Link>
          <Link to="/admin/categories" className={`nav-item ${isActive('/admin/categories')}`} onClick={closeMobileMenu}>
            <Folder size={18} /> Categories
          </Link>

          <div className="nav-group">CUSTOMERS</div>
          <Link to="/admin/enquiries" className={`nav-item ${isActive('/admin/enquiries')}`} onClick={closeMobileMenu}>
            <MessageCircle size={18} /> WhatsApp Enquiries
          </Link>
          <Link to="/admin/orders" className={`nav-item ${isActive('/admin/orders')}`} onClick={closeMobileMenu}>
            <ClipboardList size={18} /> Custom Orders
          </Link>
          <Link to="/admin/messages" className={`nav-item ${isActive('/admin/messages')}`} onClick={closeMobileMenu}>
            <Mail size={18} /> Contact Messages
          </Link>

          <div className="nav-group">CONTENT</div>
          <Link to="/admin/content" className={`nav-item ${isActive('/admin/content')}`} onClick={closeMobileMenu}>
            <FileText size={18} /> Pages Content
          </Link>

          <div className="nav-group">SYSTEM</div>
          <Link to="/admin/settings" className={`nav-item ${isActive('/admin/settings')}`} onClick={closeMobileMenu}>
            <Settings size={18} /> Settings
          </Link>
          <Link to="/admin/logs" className={`nav-item ${isActive('/admin/logs')}`} onClick={closeMobileMenu}>
            <Activity size={18} /> Activity Logs
          </Link>
        </nav>

        <div className="admin-user-info">
          <div className="user-avatar">A</div>
          <div className="user-details">
            <p className="user-name">Admin Name</p>
            <p className="user-role">Administrator</p>
          </div>
          <button className="logout-btn">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div className="topbar-left" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <Menu size={24} />
            </button>
          </div>
          <div className="topbar-right">
            <button className="notification-btn">🔔</button>
            <div className="admin-dropdown">Admin ▼</div>
          </div>
        </header>

        <div className="admin-content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
