import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { motion } from 'framer-motion';

const Landing = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [testimonialHover, setTestimonialHover] = useState(false);

  const advantages = [
    {
      title: "Time Efficiency",
      content: "Reduce meeting preparation time by up to 60% with automated agenda creation and document organization."
    },
    {
      title: "Improved Governance",
      content: "Enhance board effectiveness with structured meeting processes and clear decision tracking."
    },
    {
      title: "Enhanced Collaboration",
      content: "Facilitate better communication between board members with real-time editing and commenting tools."
    },
    {
      title: "Risk Mitigation",
      content: "Maintain compliance with complete audit trails and secure document handling."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={slideUp}
                className="display-3 fw-bold mb-4"
              >
                Boardify
              </motion.h1>
              <motion.p 
                initial="hidden"
                animate="visible"
                variants={slideUp}
                transition={{ delay: 0.2 }}
                className="lead fs-4 mb-4"
              >
                Transform your board meetings with intelligent agenda management, real-time collaboration, and actionable insights.
              </motion.p>
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={slideUp}
                transition={{ delay: 0.4 }}
                className="d-flex gap-3"
              >
                <a href="#signup" className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold">Get Started</a>
                <a href="#demo" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">Live Demo</a>
              </motion.div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                src="https://bing.com/th/id/BCO.21447cfe-12ec-4076-ba51-389a86ba6657.png" 
                alt="Boardify Dashboard" 
                className="img-fluid rounded shadow-lg" 
              />
            </div>
          </div>
        </div>
        <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#fff"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#fff"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#fff"></path>
          </svg>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-muted mb-4"
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
              {[
                'https://bing.com/th/id/BCO.b3b18b75-c0fd-464d-a4b4-d285ae30055f.png/150x60?text=Google',
                'https://bing.com/th/id/BCO.4bb0ff42-5781-4cae-8ac9-5076b6a34389.png/150x60?text=Amazon',
                'https://bing.com/th/id/BCO.02e87ddb-f951-4625-a18b-bb44978d689a.png/150x60?text=Apple',
                'https://bing.com/th/id/BCO.589f9179-2255-4079-a1c0-d7c3133629b2.png/150x60?text=Intel',
                'https://bing.com/th/id/BCO.13da3aa3-8d0c-477c-b3a9-34e0d199018b.png/150x60?text=IBM',
                'https://bing.com/th/id/BCO.3477f176-6753-4a73-8a71-98e0eb596183.png/150x60?text=Matius',
                'https://bing.com/th/id/BCO.16f4ea12-bced-4b5c-83d5-5c696d765c36.png/150x60?text=Samsung'
              ].map((logo, index) => (
                <motion.div 
                  key={index} 
                  className="logo-slide"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={logo} 
                    alt="Trusted company logo" 
                    className="img-fluid h-100"
                    style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Streamline Your Board Operations</h2>
            <p className="lead text-muted">Everything you need for effective governance in one platform</p>
          </motion.div>
          
          <div className="row g-4">
            {[
              {
                icon: '📝',
                title: 'Smart Agendas',
                description: 'Create, manage & share professional agendas with automated templates and collaborative editing.'
              },
              {
                icon: '⏱️',
                title: 'Real-Time Minutes',
                description: 'Capture decisions instantly with AI-assisted minute taking and live collaboration tools.'
              },
              {
                icon: '✅',
                title: 'Action Tracking',
                description: 'Assign, monitor, and report on action items with automated reminders and progress tracking.'
              },
              {
                icon: '📊',
                title: 'Analytics & Reporting',
                description: 'Gain insights with meeting analytics, decision tracking, and performance dashboards.'
              },
              {
                icon: '🔒',
                title: 'Secure Document Hub',
                description: 'Centralized, permission-controlled access to all board materials with version control.'
              },
              {
                icon: '🤝',
                title: 'Stakeholder Engagement',
                description: 'Facilitate better participation with pre-meeting surveys and feedback tools.'
              }
            ].map((feature, index) => (
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
                  <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>{feature.icon}</div>
                  <h3 className="h5 fw-bold">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Why Choose Boardify?</h2>
            <p className="lead text-muted">Discover the advantages of modern board management</p>
          </motion.div>
          
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2 mb-4">
                {advantages.map((advantage, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveAdvantage(index)}
                    className={`btn ${activeAdvantage === index ? 'btn-primary' : 'btn-outline-primary'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {advantage.title}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div 
                key={activeAdvantage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="advantage-content p-4 bg-white rounded shadow-sm"
              >
                <h3 className="h4">{advantages[activeAdvantage].title}</h3>
                <p>{advantages[activeAdvantage].content}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-5">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <h2 className="display-5 fw-bold mb-3">Discover how Boardify transforms your board management experience</h2>
          </motion.div>
          
          <div className="row g-4">
            {[
              {
                title: "Secure Document Access",
                description: "Provide secure access to meeting packs and resources for board members."
              },
              {
                title: "Meeting Management",
                description: "Organize and schedule board meetings with comprehensive planning."
              },
              {
                title: "Approval Process",
                description: "Streamline approval workflows with digital signatures and audit trails."
              },
              {
                title: "Board Evaluations",
                description: "Conduct comprehensive performance assessments for board members."
              },
              {
                title: "Poll-Driven Discussions",
                description: "Facilitate interactive discussions through real-time polling systems."
              },
              {
                title: "Enterprise Security",
                description: "Protect sensitive information with enterprise-grade security measures."
              }
            ].map((item, index) => (
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
                  className="p-4 h-100 rounded shadow-sm border-start border-4 border-primary"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="h5 fw-bold">{item.title}</h3>
                  <p className="text-muted">{item.description}</p>
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
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                className="display-6 fw-bold mb-4"
              >
                What Our Clients Say
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lead"
              >
                Boardify has transformed how we run our board meetings, saving us hours of preparation time.
              </motion.p>
              <motion.a 
                href="#testimonials" 
                className="btn btn-outline-primary mt-3"
                initial="hidden"
                whileInView="visible"
                variants={slideUp}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Read more success stories
              </motion.a>
            </div>
            <div className="col-lg-7">
              <motion.div 
                className="card shadow-sm p-4"
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setTestimonialHover(true)}
                onHoverEnd={() => setTestimonialHover(false)}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle overflow-hidden me-3" style={{ width: '60px', height: '60px' }}>
                    <img 
                      src="https://bing.com/th/id/BCO.068f2678-35bb-4c0b-8a40-0217768a976f.png" 
                      alt="User profile" 
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div>
                    <h5 className="mb-1">Sarah Johnson</h5>
                    <p className="text-muted small mb-0">CEO, Acme Corporation</p>
                  </div>
                </div>
                <motion.p 
                  className="mb-0"
                  animate={testimonialHover ? { color: "#000" } : { color: "#495057" }}
                >
                  "Since implementing Boardify, our board meetings are 40% shorter yet more productive. The action tracking system ensures nothing falls through the cracks, and our directors love the intuitive interface."
                </motion.p>
                <motion.div 
                  className="mt-3 text-warning"
                  animate={testimonialHover ? { scale: 1.1 } : { scale: 1 }}
                >
                  {'★'.repeat(5)}
                </motion.div>
                <motion.div 
                  className="mt-3"
                  initial={{ opacity: 0 }}
                  animate={testimonialHover ? { opacity: 1 } : { opacity: 0 }}
                >
                  <p className="small text-muted">"We've seen a 30% increase in director engagement since switching to Boardify."</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-5 text-white cta-section">
        <div className="container text-center py-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="display-5 fw-bold mb-3"
          >
            Ready to Transform Your Board Meetings?
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lead mb-4"
          >
            Join hundreds of organizations that trust Boardify for their governance needs.
          </motion.p>
          <motion.div 
            className="d-flex justify-content-center gap-3"
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a 
              href="#pricing" 
              className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Plans
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.a>
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
                  <motion.a 
                    key={index}
                    href="#"
                    className="text-white"
                    whileHover={{ y: -3 }}
                  >
                    <i className={`bi bi-${social}`} style={{ fontSize: '1.5rem' }}></i>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h4 className="h5 mb-3">Product</h4>
              <ul className="list-unstyled">
                {['Features', 'Pricing', 'Integrations', 'Updates'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="/#" className="text-white-50">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h4 className="h5 mb-3">Company</h4>
              <ul className="list-unstyled">
                {['About', 'Careers', 'Blog', 'Press'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="/#" className="text-white-50">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h4 className="h5 mb-3">Resources</h4>
              <ul className="list-unstyled">
                {['Help Center', 'Tutorials', 'Webinars', 'Community'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="/#" className="text-white-50">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-4">
              <h4 className="h5 mb-3">Legal</h4>
              <ul className="list-unstyled">
                {['Privacy', 'Terms', 'Security', 'Cookies'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href="/#" className="text-white-50">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <p className="mb-0 small">© 2023 Boardify. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex gap-3 justify-content-md-end">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <motion.a 
                    key={index}
                    href="#"
                    className="text-white-50 small"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
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
