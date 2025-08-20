import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-background"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
        <div className="hero-overlay"></div>
    </motion.div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="logo-container"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <img 
            src="/HAHS_Logo.png" 
            alt="HAHS Logo" 
            className="hero-logo"
          />
        </motion.div>
        
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          High Altitude Heli Services
        </motion.h1>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          We invite you to step into a world where the sky is not the limit but only the beginning of an extraordinary journey.
        </motion.p>
        
        <motion.button
          className="cta-button"
          onClick={scrollToAbout}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 30px rgba(236, 126, 9, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          Discover Our Services
        </motion.button>
      </motion.div>
      
      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a1a 0%,rgba(45, 74, 74, 0.88) 50%,rgba(90, 138, 138, 0.83) 100%);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/heli_3.jpg') center/cover;
          opacity: 0.4;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.62) 0%, rgba(45, 74, 74, 0.37) 50%, rgba(90, 138, 138, 0.25) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
          color: white;
        }

        .logo-container {
          margin-bottom: 3rem;
        }

        .hero-logo {
          width: 300px;
          height: auto;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.4));
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 220, 200, 0.4) 85%, rgba(200, 150, 120, 0.5) 100%);
          padding: 2.5rem;
          border-radius: 25px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.95;
          line-height: 1.6;
          font-weight: 300;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
        }

        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #ec7e09, #ebab89);
          color: white;
          padding: 1.2rem 2.5rem;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(236, 126, 9, 0.3);
          border: none;
          cursor: pointer;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .hero-logo {
            width: 220px;
            padding: 2rem;
          }
          
          .hero-content {
            padding: 0 1.5rem;
          }
          
          .hero-title {
            margin-bottom: 1.5rem;
          }
          
          .hero-subtitle {
            margin-bottom: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 