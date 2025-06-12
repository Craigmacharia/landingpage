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

  // Duplicate the companies array to create infinite loop effect
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="landing-page">
      {/* Header Section */}


      {/* Login Modal */}
      {showLoginForm && (
        <motion.div 
          className="login-modal d-flex align-items-center justify-content-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="login-modal-content bg-white rounded-3 overflow-hidden shadow-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            style={{ maxWidth: '900px', width: '95%' }}
          >
            <button 
              className="close-btn position-absolute bg-transparent border-0" 
              onClick={() => setShowLoginForm(false)}
              style={{ top: '1rem', right: '1rem', zIndex: 10 }}
            >
              <FiX size={24} />
            </button>
            
            <div className="row g-0">
              <div className="col-lg-6 d-none d-lg-flex login-left bg-light p-5">
                <div className="login-hero d-flex flex-column justify-content-center h-100">
                  <h2 className="fw-bold mb-3">Welcome Back</h2>
                  <p className="mb-4">Sign in to access your Boardify dashboard and manage your board meetings.</p>
                  <img 
                    src="boardify.jpg" 
                    alt="Boardify Dashboard" 
                    className="img-fluid rounded shadow-sm" 
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              
              <div className="col-lg-6 login-right p-4 p-md-5">
                <div className="login-form h-100 d-flex flex-column justify-content-center">
                  <h3 className="fw-bold mb-1">Sign In</h3>
                  <p className="text-muted mb-4">Enter your details to access your account</p>
                  
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="form-control py-2"
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
                        className="form-control py-2"
                        value={loginData.password}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label small" htmlFor="remember">Remember me</label>
                      </div>
                      <a href="#forgot" className="text-primary small">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2 mb-3 fw-bold">
                      Sign In
                    </button>
                    <div className="text-center">
                      <p className="text-muted small">Don't have an account? <a href="#signup" className="text-primary">Sign up</a></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hero Section */}
<section className="hero-section py-5 py-lg-6">
  <div className="container">
    <div className="row align-items-center">
      {/* Content Column - Left side on desktop, top on mobile */}
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="hero-content pe-lg-4">
          <motion.h1 
            initial="hidden" 
            animate="visible" 
            variants={slideUp} 
            className="display-4 fw-bold mb-4"
          >
            Transform Your Board Meetings with Boardify
          </motion.h1>
          <motion.p 
            initial="hidden" 
            animate="visible" 
            variants={slideUp} 
            transition={{ delay: 0.2 }} 
            className="lead mb-4 text-muted"
          >
            Boardify elevates your organization's governance with our comprehensive Board Management Solution.
          </motion.p>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={slideUp} 
            transition={{ delay: 0.4 }} 
            className="d-flex flex-wrap gap-3"
          >
            <button 
              className="btn btn-primary btn-lg px-4 py-3 rounded-pill fw-bold d-flex align-items-center"
              onClick={() => setShowLoginForm(true)}
            >
              Get Started <FiChevronDown className="ms-2" />
            </button>
            <button className="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Image Column - Right side on desktop, bottom on mobile */}
      <div className="col-lg-6">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          src="boardify.jpg" 
          alt="Boardify Dashboard" 
          className="img-fluid rounded-3 shadow-lg" 
        />
      </div>
    </div>
  </div>
</section>

      {/* Trusted By Section with Slideshow */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.p 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeIn} 
            viewport={{ once: true }} 
            className="text-uppercase text-center text-muted mb-4 small fw-bold"
          >
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
              {duplicatedCompanies.map((company, index) => (
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
      <section id="features" className="py-5 py-lg-6">
        <div className="container">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={slideUp} 
            viewport={{ once: true }} 
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Streamline Your Board Operations</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Everything you need for effective governance in one platform
            </p>
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
                  className="feature-card p-4 h-100 rounded-3 shadow-sm bg-white d-flex flex-column"
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  <div className="feature-icon mb-3 text-primary" style={{ fontSize: '2rem' }}>
                    {feature.icon}
                  </div>
                  <h3 className="h5 fw-bold mb-3">{feature.title}</h3>
                  <p className="text-muted mb-0 flex-grow-1">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 py-lg-6 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
              <motion.h2 
                initial="hidden" 
                whileInView="visible" 
                variants={slideUp} 
                viewport={{ once: true }} 
                className="display-5 fw-bold mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p 
                initial="hidden" 
                whileInView="visible" 
                variants={slideUp} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }} 
                className="lead mb-4"
              >
                Boardify has transformed how we run our board meetings, saving us hours of preparation time.
              </motion.p>
              <div className="d-flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm rounded-pill ${activeTestimonial === index ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTestimonial(index)}
                    style={{ width: '24px', height: '8px', padding: 0 }}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <motion.div 
                className="card border-0 shadow-sm p-4 p-lg-5 bg-white rounded-3"
                key={activeTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" 
                    style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>
                    {testimonials[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="mb-1 fw-bold">{testimonials[activeTestimonial].name}</h5>
                    <p className="text-muted small mb-0">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <p className="mb-4 fs-5">"{testimonials[activeTestimonial].content}"</p>
                <div className="text-warning mb-3">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="small text-muted mb-0 fst-italic">"{testimonials[activeTestimonial].extra}"</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="h4 fw-bold mb-3">Boardify</h3>
              <p className="text-white-50 mb-4">
                Transforming board governance through intelligent technology solutions.
              </p>
              <div className="d-flex gap-3">
                {['twitter', 'linkedin', 'facebook'].map((social, index) => (
                  <a 
                    key={index} 
                    href="/#" 
                    className="text-white-50 hover-text-white"
                    style={{ fontSize: '1.25rem' }}
                  >
                    <i className={`bi bi-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-4">
                  <h4 className="h5 fw-bold mb-3">Product</h4>
                  <ul className="list-unstyled">
                    {['Features', 'Pricing', 'Integrations', 'Updates'].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a href="/#" className="text-white-50 hover-text-white text-decoration-none">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="h5 fw-bold mb-3">Company</h4>
                  <ul className="list-unstyled">
                    {['About', 'Careers', 'Blog'].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a href="/#" className="text-white-50 hover-text-white text-decoration-none">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4 className="h5 fw-bold mb-3">Legal</h4>
                  <ul className="list-unstyled">
                    {['Privacy', 'Terms', 'Security'].map((item, index) => (
                      <li key={index} className="mb-2">
                        <a href="/#" className="text-white-50 hover-text-white text-decoration-none">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 small text-white-50">
                © {new Date().getFullYear()} Boardify. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-wrap gap-3 justify-content-md-end">
                {['Privacy Policy', 'Terms of Service'].map((item, index) => (
                  <a 
                    key={index} 
                    href="/#" 
                    className="text-white-50 hover-text-white small text-decoration-none"
                  >
                    {item}
                  </a>
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
