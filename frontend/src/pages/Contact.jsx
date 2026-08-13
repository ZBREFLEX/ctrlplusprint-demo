import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h1 className="contact-title">LET'S MAKE SOMETHING.</h1>
            <p className="contact-text">
              Have a product idea, custom logo or question?
            </p>
            
            <div className="contact-methods">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-primary contact-main-btn">
                <MessageCircle size={20} />
                WHATSAPP US
              </a>
              
              <div className="contact-secondary">
                <a href="mailto:hello@ctrlplusprint.com" className="secondary-link">Email: hello@ctrlplusprint.com</a>
                <a href="#" className="secondary-link">Instagram: @ctrlplusprint</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Email / Phone</label>
                <input type="text" id="contact" placeholder="How can we reach you?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your idea..."></textarea>
              </div>
              <button type="button" className="btn btn-outline" style={{width: '100%', justifyContent: 'center'}}>
                SEND ENQUIRY &rarr;
              </button>
              <p className="form-hint">For fastest response, please use WhatsApp.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
