import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './About.css';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-about">
      <section className="section about-hero">
        <div className="container text-center">
          <h1 className="about-title">WE TURN DIGITAL IDEAS INTO PHYSICAL OBJECTS.</h1>
        </div>
      </section>

      <section className="section about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <p>CTRLPLUSPRINT transforms digital concepts, designs, logos and ideas into physical 3D printed objects. We are a modern creative product brand that happens to use 3D printing.</p>
              <p>Our philosophy is simple: Make it yours. We believe in providing premium, customizable products without the traditional manufacturing wait times.</p>
            </div>
            
            <div className="about-process">
              <div className="process-vertical">
                <div className="process-node">IDEA</div>
                <div className="process-arrow">&darr;</div>
                <div className="process-node">DESIGN</div>
                <div className="process-arrow">&darr;</div>
                <div className="process-node">PRINT</div>
                <div className="process-arrow">&darr;</div>
                <div className="process-node">OBJECT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-what-we-create">
        <div className="container text-center">
          <h3 className="section-heading text-center">WHAT WE CREATE</h3>
          <div className="creation-list">
            <span className="creation-item">Keychains</span>
            <span className="creation-item">Mirror Hangers</span>
            <span className="creation-item">Custom Logos</span>
            <span className="creation-item">Custom Creations</span>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container text-center">
          <h2 className="final-cta-title" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem'}}>HAVE AN IDEA?</h2>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn btn-primary">
            START A CUSTOM ORDER &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}
