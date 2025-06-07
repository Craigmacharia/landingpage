import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { motion } from 'framer-motion';
import { 
  FiEdit, FiClock, FiCheckCircle, FiBarChart2, FiLock, FiUsers, FiChevronDown
} from 'react-icons/fi';

const Landing = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };



  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const features = [
    { icon: <FiEdit />, title: 'Smart Agendas', description: 'Create, manage & share professional agendas with automated templates.' },
    { icon: <FiClock />, title: 'Real-Time Minutes', description: 'Capture decisions instantly with AI-assisted minute taking.' },
    { icon: <FiCheckCircle />, title: 'Action Tracking', description: 'Assign, monitor, and report on action items with automated reminders.' },
    { icon: <FiBarChart2 />, title: 'Analytics & Reporting', description: 'Gain insights with meeting analytics and decision tracking.' },
    { icon: <FiLock />, title: 'Secure Document Hub', description: 'Centralized, permission-controlled access to all board materials.' },
    { icon: <FiUsers />, title: 'Stakeholder Engagement', description: 'Facilitate better participation with pre-meeting surveys.' }
  ];

  return (
    <div className="landing-page">
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="display-4 fw-bold mb-4">Boardify</motion.h1>
              <motion.p initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.2 }} className="lead fs-5 mb-4">
                Transform your board meetings with intelligent agenda management and actionable insights.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.4 }} className="d-flex gap-3 position-relative">
                <button className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold d-flex align-items-center" onClick={() => setShowLoginForm(!showLoginForm)}>
                  Get Started <FiChevronDown className="ms-2" />
                </button>
                {showLoginForm && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="login-form-container p-4 bg-white rounded shadow-lg">
                    <button className="btn-close position-absolute top-0 end-0 m-2" onClick={() => setShowLoginForm(false)} />
                    <h5 className="mb-3 text-dark">Sign In</h5>
                    <form>
                      <div className="mb-3">
                        <input type="email" name="email" placeholder="Email" className="form-control" value={loginData.email} onChange={handleLoginChange} />
                      </div>
                      <div className="mb-3">
                        <input type="password" name="password" placeholder="Password" className="form-control" value={loginData.password} onChange={handleLoginChange} />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                  </motion.div>
                )}
              </motion.div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
                src="https://bing.com/th/id/BCO.1364d8f8-cdf2-46ea-936b-f3dcb8f3bd4c.png" alt="Boardify Dashboard" className="img-fluid rounded shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Streamline Your Board Operations</h2>
            <p className="lead text-muted">Everything you need for effective governance in one platform</p>
          </motion.div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div key={index} className="col-md-6 col-lg-4" initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <motion.div className="feature-card p-4 h-100 rounded shadow-sm" whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                  <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>{feature.icon}</div>
                  <h3 className="h5 fw-bold">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="h4 mb-3">Boardify</h3>
          <p>Transforming board governance through intelligent technology solutions.</p>
          <div className="d-flex justify-content-center gap-3 mt-3">
            {['twitter', 'linkedin', 'facebook'].map((social, index) => (
              <motion.a key={index} href="#" className="text-white" whileHover={{ y: -3 }}>
                <i className={`bi bi-${social}`} style={{ fontSize: '1.5rem' }}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;


