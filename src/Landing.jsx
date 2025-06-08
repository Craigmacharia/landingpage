import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { motion } from 'framer-motion';
import { 
  FiEdit, FiClock, FiCheckCircle, FiBarChart2, 
  FiLock, FiUsers, FiChevronDown, FiX
} from 'react-icons/fi';

const Landing = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  // Data arrays
  const features = [
    { icon: <FiEdit />, title: 'Smart Agendas', description: 'Create, manage & share professional agendas with automated templates and collaborative editing.' },
    { icon: <FiClock />, title: 'Real-Time Minutes', description: 'Capture decisions instantly with AI-assisted minute taking and live collaboration tools.' },
    { icon: <FiCheckCircle />, title: 'Action Tracking', description: 'Assign, monitor, and report on action items with automated reminders and progress tracking.' },
    { icon: <FiBarChart2 />, title: 'Analytics & Reporting', description: 'Gain insights with meeting analytics, decision tracking, and performance dashboards.' },
    { icon: <FiLock />, title: 'Secure Document Hub', description: 'Centralized, permission-controlled access to all board materials with version control.' },
    { icon: <FiUsers />, title: 'Stakeholder Engagement', description: 'Facilitate better participation with pre-meeting surveys and feedback tools.' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Acme Corporation",
      content: "Since implementing Boardify, our board meetings are 40% shorter yet more productive. The action tracking system ensures nothing falls through the cracks.",
      extra: "We've seen a 30% increase in director engagement since switching to Boardify.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Board Chair, TechCorp",
      content: "Boardify has revolutionized our governance processes. The analytics dashboard gives us unprecedented visibility into our decision-making patterns.",
      extra: "Preparation time for meetings has been cut by half.",
      rating: 5
    }
  ];

  const companies = [
    'Watamu', 'Mazuri', 'Kuruzui', 'Ladha', 
    'Outro', 'Tech.ke', 'Variant'
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="display-4 fw-bold mb-4">
                Boardify
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.2 }} className="lead fs-5 mb-4">
                Transform your board meetings with intelligent agenda management, real-time collaboration, and actionable insights.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.4 }} className="d-flex gap-3 position-relative">
                <button 
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold d-flex align-items-center"
                  onClick={() => setShowLoginForm(!showLoginForm)}
                >
                  Get Started <FiChevronDown className="ms-2" />
                </button>
                
                {showLoginForm && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="login-form-container p-4 bg-white rounded shadow-lg"
                  >
                    <button 
                      className="btn-close position-absolute top-0 end-0 m-2" 
                      onClick={() => setShowLoginForm(false)}
                    />
                    <h5 className="mb-3 text-dark">Sign In</h5>
                    <form>
                      <div className="mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="form-control"
                          value={loginData.email}
                          onChange={handleLoginChange}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="form-control"
                          value={loginData.password}
                          onChange={handleLoginChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">
                        Login
                      </button>
                      <div className="text-center mt-2">
                        <a href="#forgot" className="small text-muted">Forgot password?</a>
                      </div>
                    </form>
                  </motion.div>
                )}
                
                </motion.div>
                </div>
                
            <div className="col-lg-6 d-none d-lg-block">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                src="https://bing.com/th/id/BCO.1364d8f8-cdf2-46ea-936b-f3dcb8f3bd4c.png" 
                alt="Boardify Dashboard" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.p initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }} className="text-muted mb-4">
            TRUSTED BY LEADING ORGANIZATIONS
          </motion.p>
          <div className="logo-carousel-wrapper">
            <motion.div 
              className="logo-carousel"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
            >
              {companies.map((company, index) => (
                <motion.div 
                  key={index} 
                  className="logo-slide"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="company-logo">
                    {company}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Streamline Your Board Operations</h2>
            <p className="lead text-muted">Everything you need for effective governance in one platform</p>
          </motion.div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="feature-card p-4 h-100 rounded shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="feature-icon mb-3">{feature.icon}</div>
                  <h3 className="h5 fw-bold">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <motion.h2 initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} className="display-5 fw-bold mb-4">
                What Our Clients Say
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lead">
                Boardify has transformed how we run our board meetings, saving us hours of preparation time.
              </motion.p>
              <div className="d-flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${activeTestimonial === index ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTestimonial(index)}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <motion.div 
                className="card shadow-sm p-4"
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="mb-1">{testimonials[activeTestimonial].name}</h5>
                    <p className="text-muted small mb-0">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <p className="mb-3">"{testimonials[activeTestimonial].content}"</p>
                <div className="text-warning mb-2">
                  {'★'.repeat(testimonials[activeTestimonial].rating)}
                </div>
                <p className="small text-muted mb-0">"{testimonials[activeTestimonial].extra}"</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-5 text-white cta-section">
        <div className="container text-center py-4">
          <motion.h2 initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} className="display-5 fw-bold mb-3">
            Ready to Transform Your Board Meetings?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" variants={slideUp} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lead mb-4">
            Join hundreds of organizations that trust Boardify for their governance needs.
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="d-flex justify-content-center gap-3"
          >
            
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h3 className="h4 mb-3">Boardify</h3>
              <p>Transforming board governance through intelligent technology solutions.</p>
              <div className="d-flex gap-3 mt-3">
                {['twitter', 'linkedin', 'facebook'].map((social, index) => (
                  <a key={index} href="#" className="text-white">
                    <i className={`bi bi-${social}`} style={{ fontSize: '1.5rem' }}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <h4 className="h5 mb-3">Product</h4>
                  <ul className="list-unstyled">
                    {['Features', 'Pricing', 'Integrations', 'Updates'].map((item, index) => (
                      <li key={index}><a href="#" className="text-white-50">{item}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <h4 className="h5 mb-3">Company</h4>
                  <ul className="list-unstyled">
                    {['About', 'Careers', 'Blog'].map((item, index) => (
                      <li key={index}><a href="#" className="text-white-50">{item}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="h5 mb-3">Legal</h4>
                  <ul className="list-unstyled">
                    {['Privacy', 'Terms', 'Security'].map((item, index) => (
                      <li key={index}><a href="#" className="text-white-50">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 small">© {new Date().getFullYear()} Boardify. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                  <a key={index} href="#" className="text-white-50 small">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
