import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroCompositionImg from '../assets/hero-composition.jpg';
import catKeychainsImg from '../assets/cat-keychains.jpg';
import catLogosImg from '../assets/cat-logos.png';
import catCreationsImg from '../assets/cat-creations.jpg';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // Create a timeline linked to the scroll progress of the container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-scroll-area",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      }
    });

    // Fade out quote 1, fade in quote 2
    tl.to(".quote-1", { autoAlpha: 0, y: -50, duration: 1 })
      .to(".bg-1", { opacity: 0, duration: 1 }, "<")
      .fromTo(".quote-2", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 }, "<")
      .fromTo(".bg-2", { opacity: 0, scale: 1.1 }, { opacity: 0.3, scale: 1, duration: 1 }, "<")
      
      // Pause
      .to({}, { duration: 0.5 })
      
      // Fade out quote 2, fade in quote 3
      .to(".quote-2", { autoAlpha: 0, y: -50, duration: 1 })
      .to(".bg-2", { opacity: 0, duration: 1 }, "<")
      .fromTo(".quote-3", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 }, "<")
      .fromTo(".bg-3", { opacity: 0, scale: 1.1 }, { opacity: 0.3, scale: 1, duration: 1 }, "<")
      
      // Pause
      .to({}, { duration: 0.5 })
      
      // Fade out quote 3, fade in quote 4
      .to(".quote-3", { autoAlpha: 0, y: -50, duration: 1 })
      .to(".bg-3", { opacity: 0, duration: 1 }, "<")
      .fromTo(".quote-4", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 }, "<")
      .fromTo(".bg-4", { opacity: 0, scale: 1.1 }, { opacity: 0.3, scale: 1, duration: 1 }, "<")
      
      // Final Pause
      .to({}, { duration: 1 });

  }, { scope: containerRef });

  return (
    <div className="page-about" ref={containerRef}>
      <div className="story-scroll-area">
        <div className="story-sticky-container">
          
          {/* Background Images */}
          <div className="story-backgrounds">
            <img src={heroCompositionImg} className="story-bg bg-1" alt="Background 1" />
            <img src={catKeychainsImg} className="story-bg bg-2" alt="Background 2" />
            <img src={catLogosImg} className="story-bg bg-3" alt="Background 3" />
            <img src={catCreationsImg} className="story-bg bg-4" alt="Background 4" />
            <div className="bg-overlay"></div>
          </div>

          {/* Quotes */}
          <div className="story-quotes">
            <div className="story-quote quote-1">
              <h2>WE TURN DIGITAL IDEAS INTO PHYSICAL <span className="text-gold">REALITY.</span></h2>
            </div>
            
            <div className="story-quote quote-2">
              <h2>EVERY PIECE IS UNIQUELY YOURS.<br/>WE BELIEVE IN TRUE <span className="text-red">CUSTOMIZATION.</span></h2>
            </div>
            
            <div className="story-quote quote-3">
              <h2>FROM A SIMPLE SKETCH TO A <br/>3D PRINTED <span className="text-blue">MASTERPIECE.</span></h2>
            </div>
            
            <div className="story-quote quote-4">
              <h2>NO MASS PRODUCTION.<br/>JUST PRECISION, QUALITY, AND <span className="text-green">IMAGINATION.</span></h2>
              <div style={{ marginTop: '3rem', pointerEvents: 'auto' }}>
                <a href="https://wa.me/918590803009" target="_blank" rel="noreferrer" className="btn btn-primary">
                  START A CUSTOM ORDER
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-line"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
