import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './ProductDetail.css';

// Using mock data for now
const mockProducts = [
  { id: 'KP-001', slug: 'bmw-m-logo', name: 'BMW M LOGO KEYCHAIN', category: 'KEYCHAINS', price: 299, availability: 'Available', description: 'Custom 3D printed BMW M logo keychain. Made with durable PLA. Perfect for car enthusiasts.', material: 'PLA Plastic', size: '50mm x 15mm x 5mm', customization: 'Name can be added to the back.' },
];

export default function ProductDetail() {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const product = mockProducts.find(p => p.slug === slug) || {
    id: 'MOCK-123',
    name: slug.replace(/-/g, ' ').toUpperCase(),
    category: 'CATEGORY',
    price: 499,
    availability: 'Available',
    description: 'Detailed description of the 3D printed object goes here. It is durable and aesthetically pleasing.',
    material: 'PETG / PLA',
    size: 'Standard',
    customization: 'Fully customizable'
  };

  const whatsappMessage = `Hi CTRLPLUSPRINT,%0A%0AI'm interested in the ${product.name}.%0AProduct ID: ${product.id}%0APrice: ₹${product.price}%0A%0ACould you provide more details?`;

  return (
    <div className="page-product-detail">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/shop">SHOP</Link> / <span>{product.name}</span>
        </div>
        
        <div className="product-detail-grid">
          <div className="product-gallery">
            <div className="main-image-placeholder">PRODUCT RENDER</div>
            <div className="thumbnail-strip">
              <div className="thumbnail active"></div>
              <div className="thumbnail"></div>
              <div className="thumbnail"></div>
            </div>
          </div>
          
          <div className="product-info-panel">
            <span className="detail-category">{product.category}</span>
            <h1 className="detail-name">{product.name}</h1>
            
            <div className="detail-meta">
              <span className="detail-price">₹{product.price}</span>
              <span className={`detail-availability ${product.availability.toLowerCase().replace(/ /g, '-')}`}>
                &bull; {product.availability}
              </span>
            </div>

            <p className="detail-description">{product.description}</p>
            
            <div className="detail-specs">
              <div className="spec-row">
                <span className="spec-label">MATERIAL</span>
                <span className="spec-value">{product.material}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">SIZE</span>
                <span className="spec-value">{product.size}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">CUSTOMIZATION</span>
                <span className="spec-value">{product.customization}</span>
              </div>
            </div>

            <div className="detail-actions">
              <a 
                href={`https://wa.me/1234567890?text=${whatsappMessage}`}
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary btn-full"
              >
                <MessageCircle size={18} /> ORDER ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
