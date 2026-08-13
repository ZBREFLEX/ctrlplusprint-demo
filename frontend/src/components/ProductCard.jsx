import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { id, name, category, price, availability, slug, image } = product;

  // Determine accent color based on category
  let borderClass = 'border-gold';
  if (category === 'KEYCHAINS') borderClass = 'border-red';
  if (category === 'MIRROR HANGERS') borderClass = 'border-green';
  if (category === 'CUSTOM LOGOS') borderClass = 'border-blue';

  return (
    <div className={`product-card ${borderClass}`}>
      <Link to={`/shop/${slug}`} className="product-card-link">
        <div className="product-image-container">
          {image ? (
            <img src={image} alt={name} className="product-image" />
          ) : (
            <div className="product-image-placeholder">PRODUCT IMAGE</div>
          )}
        </div>
        <div className="product-info">
          <span className="product-category">{category}</span>
          <h3 className="product-name">{name}</h3>
          <div className="product-meta">
            <span className="product-price">₹{price}</span>
            <span className={`product-availability ${availability.toLowerCase().replace(/ /g, '-')}`}>
              &bull; {availability}
            </span>
          </div>
        </div>
      </Link>
      <div className="product-actions">
        <a 
          href={`https://wa.me/1234567890?text=Hi CTRLPLUSPRINT,%0A%0AI'm interested in the ${name}.%0AProduct ID: ${id}%0APrice: ₹${price}%0A%0ACould you provide more details?`}
          target="_blank" 
          rel="noreferrer" 
          className="btn-whatsapp-link"
        >
          ORDER ON WHATSAPP &rarr;
        </a>
      </div>
    </div>
  );
}
