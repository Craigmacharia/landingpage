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
      name: "Mwikali Jemimmah",
      role: "CEO, Rauka Corporation",
      content: "Since implementing Boardify, our board meetings are 40% shorter yet more productive. The action tracking system ensures nothing falls through the cracks.",
      extra: "We've seen a 30% increase in director engagement since switching to Boardify.",
      rating: 5
    },
    {
      name: "Michael Hassan",
      role: "Board Chair, TechCorp.ke",
      content: "Boardify has revolutionized our governance processes. The analytics dashboard gives us unprecedented visibility into our decision-making patterns.",
      extra: "Preparation time for meetings has been cut by half.",
      rating: 5
    }
  ];

  const companies = [
    'QUICKLINK SKY', 'MPESA', 'FAMILY BANK', 'PAYPAL', 
    'MUST SACCO', 'CREDIT BANK', 'EQUITY BANK'
  ];

  return (
    <div className="landing-page">
      {/* Curved Decorative Element */}
      <div className="top-curve">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#0d6efd" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Expanded Login Modal */}
      {showLoginForm && (
        <motion.div 
          className="login-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="login-modal-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <button 
              className="close-btn" 
              onClick={() => setShowLoginForm(false)}
            >
              <FiX size={24} />
            </button>
            
            <div className="row">
              <div className="col-lg-6 d-none d-lg-flex login-left">
                <div className="login-hero">
                  <h2>Welcome Back</h2>
                  <p>Sign in to access your Boardify dashboard and manage your board meetings.</p>
                  <img src="boardify.jpg" alt="Boardify Dashboard" className="img-fluid rounded" />
                </div>
              </div>
              
              <div className="col-lg-6 login-right">
                <div className="login-form">
                  <h3>Sign In</h3>
                  <p className="text-muted mb-4">Enter your details to access your account</p>
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="form-control"
                        value={loginData.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        className="form-control"
                        value={loginData.password}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Remember me</label>
                      </div>
                      <a href="#forgot" className="text-primary">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2 mb-3">
                      Sign In
                    </button>
                    <div className="text-center">
                      <p className="text-muted">Don't have an account? <a href="#signup" className="text-primary">Sign up</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="hero-section text-white position-relative">
        {/* New decorative curve at the bottom of the hero section */}
        <div className="hero-bottom-curve">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,80C672,96,768,128,864,128C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="display-4 fw-bold mb-4">
                Boardify
              </motion.h1>
              <motion.p initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.2 }} className="lead fs-5 mb-4">
              Boardify elevates your organization's governance with our comprehensive Board Management Solution, designed to streamline Board Governance, Meetings, and Strategic Planning. Ensure compliance with company regulations while facilitating effective Board Evaluations and Elections. Invest in a tool that empowers your board to operate efficiently and strategically, driving your organization towards success
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={slideUp} transition={{ delay: 0.4 }} className="d-flex gap-3">
                <button 
                  className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold d-flex align-items-center"
                  onClick={() => setShowLoginForm(true)}
                >
                  Get Started <FiChevronDown className="ms-2" />
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
                  Learn More
                </button>
              </motion.div>
            </div>
            
            <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                src="boardify.jpg" 
                alt="Boardify Dashboard" 
                className="img-fluid rounded shadow-lg hero-image" 
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
            <button 
              className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold"
              onClick={() => setShowLoginForm(true)}
            >
              Get Started
            </button>
            <button className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
              Request Demo
            </button>
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
                  <a key={index} href="/#" className="text-white">
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
                      <li key={index}><a href="/#" className="text-white-50">{item}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 mb-3">
                  <h4 className="h5 mb-3">Company</h4>
                  <ul className="list-unstyled">
                    {['About', 'Careers', 'Blog'].map((item, index) => (
                      <li key={index}><a href="/#" className="text-white-50">{item}</a></li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="h5 mb-3">Legal</h4>
                  <ul className="list-unstyled">
                    {['Privacy', 'Terms', 'Security'].map((item, index) => (
                      <li key={index}><a href="/#" className="text-white-50">{item}</a></li>
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
                  <a key={index} href="/#" className="text-white-50 small">{item}</a>
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
