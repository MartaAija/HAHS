import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFire, FaMountain, FaWrench } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: "Commercial Services",
      icon: <FaFire />,
      items: [
        "Firefighting / Wildfire Management",
        "Mineral Exploration / Bird Tow / Drill Support",
        "Fish & Wildlife Survey / Tracking",
        "Oil & Gas Pipeline Inspection & Servicing",
        "Infrared Thermography"
      ]
    },
    {
      title: "Adventure & Tourism",
      icon: <FaMountain />,
      items: [
        "Scenic Tours",
        "Custom Charter Flights",
        "Romance",
        "Remote Lodge Drop-offs",
        "Wilderness Picnics"
      ]
    },
    {
      title: "Maintenance & Drones",
      icon: <FaWrench />,
      items: [
        "Category M1 AME License",
        "Aircraft Maintenance – Bell 206, 407, and AS350 B2 Type Ratings",
        "Drone Services & Photography – Advanced RPAS VLOS License",
        "Parts & Equipment Logistics"
      ]
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Our Services</h2>
          <p>Comprehensive helicopter solutions for every need</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Centered note under all 3 boxes */}
        <motion.p
          className="services-note"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <em>For bookings and enquiries, please contact our team — we will be happy to assist you.</em>
        </motion.p>
      </div>

      <style jsx>{`
        .services-section {
          background: white;
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: linear-gradient(135deg, #8b4513 0%, #4a2c1a 100%);
          color: white;
          padding: 2.5rem;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(236, 126, 9, 0.1), rgba(139, 69, 19, 0.1));
          z-index: 1;
        }

        .service-card > * {
          position: relative;
          z-index: 2;
        }

        .service-icon {
          font-size: 3rem;
          color: #ec7e09;
          margin-bottom: 1.5rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .service-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .service-card li {
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          font-size: 1rem;
          line-height: 1.6;
        }

        .service-card li:last-child {
          border-bottom: none;
        }

        .services-note {
          margin-top: 2.5rem;
          text-align: center;
          font-size: 1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
