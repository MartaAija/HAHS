import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEye, FaHeart, FaBullseye } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <FaEye />,
      title: "Vision",
      description: "Our vision is to become a world-known one-stop destination for all helicopter-related solutions. If we don't know the answer, we will find it for you through our global networks. We are eager to be the main provider for both individuals and businesses seeking helicopter solutions tailored to their individual needs."
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      description: "Our passion for helicopters extends beyond transportation. It encompasses a commitment to excellence in every aspect of aerial service. Whether it is aerial logistics, maintenance, or creating unforgettable and adventurous tourism experiences, we take pride in our dedication to delivering exceptional quality and personalized attention to detail."
    },
    {
      icon: <FaBullseye />,
      title: "Mission",
      description: "Our mission is to exceed expectations by seamlessly combining luxury with practicality, ensuring that each flight is not just a journey but an unforgettable adventure. Guided by our core values of safety, reliability, and personalized service. We invite you to join us as we elevate your expectations and redefine the possibilities of helicopter travel."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>About Our Company</h2>
          <p>Excellence in every flight, adventure in every journey</p>
        </motion.div>

        <motion.div
          className="company-description"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>
            High Altitude Heli Services (HAHS) is a locally owned and operated helicopter service based in Creston, BC. 
            With a focus on reliability, safety, and precision, we provide a wide range of services including tourism flights, 
            aerial logistics, wildfire support, and drone-based inspections. Whether you're chasing breathtaking views or 
            high-altitude performance, we get you there—when no one else can.
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #f8f9fa;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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

        .company-description {
          max-width: 800px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .company-description p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.8;
          font-weight: 400;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .feature-card:hover {
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .feature-icon {
          font-size: 3rem;
          color: #ec7e09;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #8b4513;
        }

        .feature-card p {
          color: #666;
          line-height: 1.7;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          
          .feature-card {
            padding: 2rem;
          }
          
          .company-description {
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About; 