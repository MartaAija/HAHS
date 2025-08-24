import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHelicopter, FaTachometerAlt, FaClock, FaWeight, FaUsers } from 'react-icons/fa';

const Fleet = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const specs = [
    {
      icon: <FaTachometerAlt />,
      label: "Cruise Speed",
      value: "115 mph (185 km/h)"
    },
    {
      icon: <FaClock />,
      label: "Endurance / Range",
      value: "Up to 3 hours / 345 miles (555 km)"
    },
    {
      icon: <FaWeight />,
      label: "Internal Load Capacity",
      value: "Up to 3,200 lb (1,451 kg)"
    },
    {
      icon: <FaWeight />,
      label: "External Load (Long-Line)",
      value: "Up to 3,350 lb (1,519 kg)"
    },
    {
      icon: <FaUsers />,
      label: "Seating Capacity",
      value: "Pilot + 4 passengers"
    }
  ];

  return (
    <section id="fleet" className="section fleet-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Our Fleet</h2>
          <p>Performance. Safety. Reliability.</p>
        </motion.div>

        <div className="fleet-content">
        <motion.div
        className="fleet-image"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="helicopter-video-container">
          <video
            src="/Heli.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "300px",       
              height: "auto",
              borderRadius: "12px", 
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)" 
            }}
            className="helicopter-video"
          />
        </div>
        <div className="helicopter-info">
          <h3>🚁 BELL 206 JETRANGER II</h3>
          <p>
            The Bell 206 JetRanger II is a versatile, single-engine helicopter known for its reliability, 
            performance, and safety features. Perfect for both commercial operations and adventure tourism.
          </p>
        </div>
      </motion.div>

          <motion.div
            className="fleet-specs"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>Performance Specs</h3>
            <div className="specs-grid">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  className="spec-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="spec-icon">
                    {spec.icon}
                  </div>
                  <div className="spec-content">
                    <h4>{spec.label}</h4>
                    <p>{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .fleet-section {
          background: #f8f9fa;
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

        .fleet-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .fleet-image {
          text-align: center;
        }

        .helicopter-flip-container {
          perspective: 1000px;
          margin-bottom: 2rem;
          width: 300px;
          height: 300px;
          margin-left: auto;
          margin-right: auto;
        }

        .helicopter-flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.8s ease;
          cursor: pointer;
        }

        .helicopter-flip-container:hover .helicopter-flip-card {
          transform: rotateY(180deg);
        }

        .helicopter-flip-front,
        .helicopter-flip-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .helicopter-flip-front {
          background: linear-gradient(135deg, #8b4513 0%, #4a2c1a 100%);
          position: relative;
        }

        .helicopter-flip-front::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(236, 126, 9, 0.1), rgba(139, 69, 19, 0.1));
          z-index: 1;
        }

        .helicopter-icon {
          font-size: 8rem;
          color: #ec7e09;
          position: relative;
          z-index: 2;
        }

        .helicopter-flip-back {
          background: #f8f9fa;
          transform: rotateY(180deg);
        }

        .helicopter-flip-back img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .helicopter-info h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .helicopter-info p {
          color: #666;
          line-height: 1.7;
        }

        .fleet-specs h3 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #1a1a1a;
        }

        .specs-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .spec-item:hover {
          transform: translateY(-2px);
        }

        .spec-icon {
          font-size: 2rem;
          color: #ec7e09;
          margin-right: 1.5rem;
          width: 50px;
          text-align: center;
        }

        .spec-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .spec-content p {
          color: #666;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .fleet-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .helicopter-flip-container {
            width: 250px;
            height: 250px;
          }
          
          .helicopter-icon {
            font-size: 6rem;
          }
          
          .spec-item {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Fleet; 