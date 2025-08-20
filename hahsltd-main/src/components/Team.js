import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCrown, FaHelicopter, FaWrench, FaSuitcase } from 'react-icons/fa';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const robRoles = [
    {
      icon: <FaCrown />,
      title: "Owner & Founder",
      description: "Leading HAHS with vision and dedication"
    },
    {
      icon: <FaHelicopter />,
      title: "Pilot",
      description: "Experienced helicopter pilot with extensive flight hours"
    },
    {
      icon: <FaWrench />,
      title: "Maintenance Technician",
      description: "Category M1 AME License holder with Bell 206, 407, and AS350 B2 Type Ratings"
    }
  ];

  const gitaRoles = [
    {
      icon: <FaSuitcase />,
      title: "Tourism Marketer",
      description: "Gita Liliensteina brings expertise in tourism marketing, connecting our services with clients and creating memorable experiences."
    }
  ];

  return (
    <section id="team" className="section team-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2>Our Team</h2>
          <p>Meet the professionals behind our success</p>
        </motion.div>

        <div className="team-content">
          {/* Rob Taylor */}
          <motion.div
            className="team-member"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="member-avatar">
              <div className="avatar-placeholder">
                <span>RT</span>
              </div>
            </div>
            
            <div className="member-info">
              <h3>Rob Taylor</h3>
              <p className="member-description">
                Rob Taylor is the founder and owner of High Altitude Heli Services, bringing years of experience 
                in helicopter operations, maintenance, and aviation safety. His passion for aviation and commitment 
                to excellence drives every aspect of our operations.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="roles-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {robRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="role-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="role-icon">
                  {role.icon}
                </div>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Gita Liliensteina */}
          <motion.div
            className="team-member"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginTop: "4rem" }}
          >
            <div className="member-avatar">
              <div className="avatar-placeholder">
                <span>GL</span>
              </div>
            </div>
            
            <div className="member-info">
              <h3>Gita Liliensteina</h3>
              <p className="member-description">
                Gita Liliensteina is a skilled tourism marketer with a strong background in connecting aviation 
                services with the tourism industry. She focuses on creating unique experiences and ensuring 
                that our tours and offerings reach the right audiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="roles-grid"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {gitaRoles.map((role, index) => (
              <motion.div
                key={role.title}
                className="role-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="role-icon">
                  {role.icon}
                </div>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .team-section {
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

        .team-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .team-member {
          text-align: center;
          margin-bottom: 3rem;
        }

        .member-avatar {
          margin-bottom: 2rem;
        }

        .avatar-placeholder {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b4513 0%, #4a2c1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          box-shadow: 0 8px 25px rgba(139, 69, 19, 0.3);
        }

        .member-info h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .member-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto;
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .role-card {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .role-card:hover {
          border-color: #ec7e09;
          box-shadow: 0 8px 25px rgba(236, 126, 9, 0.2);
        }

        .role-icon {
          font-size: 3rem;
          color: #ec7e09;
          margin-bottom: 1.5rem;
        }

        .role-card h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .role-card p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .roles-grid {
            grid-template-columns: 1fr;
          }
          
          .avatar-placeholder {
            width: 120px;
            height: 120px;
            font-size: 2.5rem;
          }
          
          .member-info h3 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
