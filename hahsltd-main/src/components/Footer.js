import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/highaltitudeheli?utm_source=ig_web_button_share_sheet&igsh=MW56ZjNlOWZ4ZzB6ZA==",
      label: "Instagram"
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/p/High-Altitude-Heli-Services-Ltd-61578903873920/",
      label: "Facebook"
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>High Altitude Heli Services</h2>
            <p>Elevate your experience</p>
            <p>Creston, British Columbia (BC), Canada</p>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4>Follow Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; 2024 High Altitude Heli Services Ltd. All rights reserved.</p>
          <motion.button
            className="scroll-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #4a2c1a 0%, #8b4513 100%);
          color: white;
          padding: 1rem 1rem 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 3rem;
          align-items: center;
          margin-bottom: 2rem;
        }

        .footer-info h2 {
          margin-top: 10px;
          margin-bottom: 5px;
        }

        .footer-info p {
          color:rgb(170, 170, 170);
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .footer-social h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: rgb(255, 255, 255);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.3rem;
          text-decoration: none;
          transition: all 0.3s ease;
          background: linear-gradient(45deg, #ec7e09, #ebab89);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .footer-bottom p {
          color: rgb(208, 207, 207);
          font-size: 0.9rem;
        }

        .scroll-top {
          background: linear-gradient(45deg, #ec7e09, #ebab89);
          color: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
          }

          .social-links {
          display: flex;
          justify-content: center;
        }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 