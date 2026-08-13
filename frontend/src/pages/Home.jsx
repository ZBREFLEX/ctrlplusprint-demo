import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ShieldCheck, Box, Zap, MessageCircle, ArrowRight } from "lucide-react";
import heroCompositionImg from "../assets/hero-composition.jpg";
import catKeychainsImg from "../assets/cat-keychains.jpg";
import catHangersImg from "../assets/cat-hangers.png";
import catLogosImg from "../assets/cat-logos.png";
import catCreationsImg from "../assets/cat-creations.jpg";
import "./Home.css";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-home">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Left: Text Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              WE PRINT
              <br />
              WHAT YOU
              <br />
              <span className="text-gold">IMAGINE.</span>
            </h1>
            <p className="hero-subtitle">
              Custom 3D printed products
              <br />
              made around your ideas.
            </p>

            <div className="hero-actions">
              <a
                href="https://wa.me/918590803009"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={20} />
                ORDER ON WHATSAPP
              </a>
              <Link to="/shop" className="btn btn-outline">
                EXPLORE SHOP &rarr;
              </Link>
            </div>

            <div className="trust-indicators">
              <div className="trust-item">
                <ShieldCheck
                  size={20}
                  className="trust-icon"
                  style={{ color: "var(--color-accent-red)" }}
                />
                <span>
                  PREMIUM
                  <br />
                  QUALITY
                </span>
              </div>
              <div className="trust-item">
                <Box
                  size={20}
                  className="trust-icon"
                  style={{ color: "var(--color-accent-green)" }}
                />
                <span>
                  CUSTOM
                  <br />
                  DESIGNS
                </span>
              </div>
              <div className="trust-item">
                <Zap
                  size={20}
                  className="trust-icon"
                  style={{ color: "var(--color-accent-blue)" }}
                />
                <span>
                  FAST
                  <br />
                  SERVICE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Composition Image */}
          <div className="hero-visual">
            <img
              src={heroCompositionImg}
              alt="3D Printed Products Composition"
              className="hero-composition-image"
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES SECTION */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow text-gold">
              EXPLORE OUR CATEGORIES
            </span>
            <h2 className="section-title">WHAT CAN WE MAKE?</h2>
          </div>

          <div className="categories-grid">
            {/* Category 1: Red */}
            <Link
              to="/shop?category=keychains"
              className="category-card border-red"
            >
              <img
                src={catKeychainsImg}
                alt="Keychains"
                className="cat-image"
              />
              <div className="cat-info">
                <span className="cat-subtitle">3D PRINTED</span>
                <h3 className="cat-title">KEYCHAINS</h3>
                <div className="cat-arrow bg-red">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Category 2: Green */}
            <Link
              to="/shop?category=mirror-hangers"
              className="category-card border-green"
            >
              <img
                src={catHangersImg}
                alt="Mirror Hangers"
                className="cat-image"
              />
              <div className="cat-info">
                <span className="cat-subtitle">MIRROR</span>
                <h3 className="cat-title">HANGERS</h3>
                <div className="cat-arrow bg-green">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Category 3: Blue */}
            <Link
              to="/shop?category=custom-logos"
              className="category-card border-blue"
            >
              <img src={catLogosImg} alt="Custom Logos" className="cat-image" />
              <div className="cat-info">
                <span className="cat-subtitle">CUSTOM</span>
                <h3 className="cat-title">LOGOS</h3>
                <div className="cat-arrow bg-blue">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>

            {/* Category 4: Gold */}
            <Link
              to="/shop?category=custom-creations"
              className="category-card border-gold"
            >
              <img
                src={catCreationsImg}
                alt="Custom Creations"
                className="cat-image"
              />
              <div className="cat-info">
                <span className="cat-subtitle">CUSTOM</span>
                <h3 className="cat-title">CREATIONS</h3>
                <div className="cat-arrow bg-gold">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HOW WE CREATE */}
      <section className="section how-we-create">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow text-gold">HOW WE CREATE</span>
            <h2 className="section-title">FROM IDEA TO OBJECT</h2>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            <div className="timeline-step">
              <div className="step-bg-number">01</div>
              <div className="step-icon text-red">
                <Box size={32} />
              </div>
              <h4 className="text-red">IDEA</h4>
              <p>Share your idea, image or concept with us.</p>
            </div>

            <div className="timeline-step">
              <div className="step-bg-number">02</div>
              <div className="step-icon text-green">
                <Box size={32} />
              </div>
              <h4 className="text-green">DESIGN</h4>
              <p>We create a digital 3D model for you.</p>
            </div>

            <div className="timeline-step">
              <div className="step-bg-number">03</div>
              <div className="step-icon text-blue">
                <Box size={32} />
              </div>
              <h4 className="text-blue">PRINT</h4>
              <p>We print using high quality materials & precision.</p>
            </div>

            <div className="timeline-step">
              <div className="step-bg-number">04</div>
              <div className="step-icon text-gold">
                <Box size={32} />
              </div>
              <h4 className="text-gold">OBJECT</h4>
              <p>You get your physical, custom 3D printed object.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow text-gold">
              WHY CHOOSE CTRLPLUSPRINT?
            </span>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <ShieldCheck size={40} className="feature-icon text-red" />
              <h4>
                Premium
                <br />
                Quality
              </h4>
              <p>High quality materials with perfect finishing.</p>
            </div>
            <div className="divider-vertical"></div>
            <div className="feature-item">
              <Box size={40} className="feature-icon text-green" />
              <h4>
                Custom
                <br />
                Designs
              </h4>
              <p>100% personalized products for you.</p>
            </div>
            <div className="divider-vertical"></div>
            <div className="feature-item">
              <Zap size={40} className="feature-icon text-blue" />
              <h4>
                Fast
                <br />
                Turnaround
              </h4>
              <p>Quick production & on-time delivery.</p>
            </div>
            <div className="divider-vertical"></div>
            <div className="feature-item">
              <MessageCircle size={40} className="feature-icon text-gold" />
              <h4>
                Customer
                <br />
                Support
              </h4>
              <p>We're here to help you at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM ORDER CTA */}
      <section className="section custom-cta-section">
        <div className="container">
          <div className="custom-cta-box">
            <div className="cta-content">
              <h2>
                HAVE YOUR OWN IDEA?
                <br />
                LET'S MAKE IT <span className="text-gold">REAL.</span>
              </h2>
              <p>
                Send us your design, logo, name or concept and we'll take care
                of the rest.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                START CUSTOM ORDER
              </a>
            </div>

            <div className="cta-visual">
              <div className="cta-products-placeholder">
                CUSTOM CREATIONS RENDER
              </div>
            </div>

            {/* Decorative bottom lines */}
            <div className="decor-lines">
              <div className="decor-line bg-red"></div>
              <div className="decor-line bg-green"></div>
              <div className="decor-line bg-blue"></div>
              <div className="decor-line bg-gold"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
