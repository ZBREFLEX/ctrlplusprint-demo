import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import './Shop.css';

// Mock data for initial build before connecting Django API
const mockProducts = [
  { id: 'KP-001', slug: 'bmw-m-logo', name: 'BMW M LOGO KEYCHAIN', category: 'KEYCHAINS', price: 299, availability: 'Available' },
  { id: 'MH-012', slug: 'jdm-tsurikawa', name: 'JDM TSURIKAWA', category: 'MIRROR HANGERS', price: 499, availability: 'Made to Order' },
  { id: 'CL-045', slug: 'custom-desk-logo', name: 'CUSTOM DESK LOGO', category: 'CUSTOM LOGOS', price: 999, availability: 'Available' },
  { id: 'CP-088', slug: 'headphone-stand', name: 'GEOMETRIC HEADPHONE STAND', category: 'CUSTOM CREATIONS', price: 1299, availability: 'Out of Stock' },
  { id: 'KP-002', slug: 'porsche-crest', name: 'PORSCHE CREST KEYCHAIN', category: 'KEYCHAINS', price: 349, availability: 'Available' },
  { id: 'MH-013', slug: 'turbo-spool', name: 'TURBO SPOOL', category: 'MIRROR HANGERS', price: 399, availability: 'Available' },
];

const categories = ['ALL PRODUCTS', 'KEYCHAINS', 'MIRROR HANGERS', 'CUSTOM LOGOS', 'CUSTOM CREATIONS'];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('ALL PRODUCTS');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = mockProducts.filter(p => {
    const matchesCategory = activeCategory === 'ALL PRODUCTS' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-shop">
      <div className="shop-header">
        <div className="container">
          <h1 className="shop-title">SHOP</h1>
          <p className="shop-subtitle">Explore our collection of custom 3D printed products.</p>
          <span className="product-count">{filteredProducts.length} PRODUCTS</span>
        </div>
      </div>

      <div className="shop-controls border-bottom">
        <div className="container">
          <div className="category-nav">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shop-toolbar border-bottom">
        <div className="container">
          <div className="toolbar-inner">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="SEARCH PRODUCTS..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-sort-controls">
              <button className="toolbar-btn">
                <SlidersHorizontal size={18} /> FILTERS
              </button>
              <select className="sort-select">
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="section shop-grid-section">
        <div className="container">
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
