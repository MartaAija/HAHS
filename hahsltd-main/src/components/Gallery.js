import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes, FaPlay } from 'react-icons/fa';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/Bilde3.jpg',
      alt: 'Helicopter 1',
      type: 'image'
    },
    {
      id: 2,
      src: '/Bilde4.jpg',
      alt: 'Helicopter 2',
      type: 'image'
    },
    {
      id: 3,
      src: '/Bilde5.jpg',
      alt: 'Helicopter 3',
      type: 'image'
    },
    {
      id: 4,
      src: '/Bilde6.jpg',
      alt: 'Helicopter 4',
      type: 'image'
    },
    {
      id: 5,
      src: '/Bilde7.jpg',
      alt: 'Helicopter 5',
      type: 'image'
    },
    {
      id: 6,
      src: '/Heli 1.jpg',
      alt: 'Helicopter 6',
      type: 'image'
    }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Experience the Skies</h2>
          <p>Capturing moments from above</p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openModal(item)}
            >
              <img src={item.src} alt={item.alt} />
              <div className="gallery-overlay">
                {item.type === 'video' && <FaPlay className="play-icon" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-section {
          background: linear-gradient(180deg, white 0%, #f8f8f8 8%, #f0f0f0 15%, #e8e8e8 22%, #d4a574 35%, #c19a6b 50%, #a67c52 70%, #8b4513 85%, #4a2c1a 100%);
          color: #333;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .section-header p {
          font-size: 1.2rem;
          color: #666;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .gallery-item:hover {
          box-shadow: 0 12px 35px rgba(0,0,0,0.2);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .play-icon {
          color: white;
          font-size: 3rem;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .modal-content {
          position: relative;
          max-width: calc(100vw - 4rem); /* margin around */
          max-height: calc(100vh - 4rem); /* margin around */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content img {
          max-width: 100%;
          max-height: auto;
          object-fit: contain;
          border-radius: 10px;
        }

        .modal-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
          
          .modal-overlay {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery; 