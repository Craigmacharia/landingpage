import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4">Boardify</h1>
              <p className="lead fs-4 mb-4">Transform your board meetings with intelligent agenda management, real-time collaboration, and actionable insights.</p>
              <div className="d-flex gap-3">
                <a href="#signup" className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold">Get Started</a>
                <a href="#demo" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">Live Demo</a>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
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
      {/* Trusted By Section */}
<section className="py-5 bg-light">
  <div className="container text-center">
    <p className="text-muted mb-4">TRUSTED BY LEADING ORGANIZATIONS</p>
    <div className="logo-carousel-wrapper">
      <div className="logo-carousel">
        {[
          
          'https://bing.com/th/id/BCO.b3b18b75-c0fd-464d-a4b4-d285ae30055f.png/150x60?text=Google',
          'https://bing.com/th/id/BCO.4bb0ff42-5781-4cae-8ac9-5076b6a34389.png/150x60?text=Amazon',
          'https://bing.com/th/id/BCO.02e87ddb-f951-4625-a18b-bb44978d689a.png/150x60?text=Apple',
          'https://bing.com/th/id/BCO.589f9179-2255-4079-a1c0-d7c3133629b2.png/150x60?text=Intel',
          'https://bing.com/th/id/BCO.13da3aa3-8d0c-477c-b3a9-34e0d199018b.png/150x60?text=IBM',
          'https://bing.com/th/id/BCO.3477f176-6753-4a73-8a71-98e0eb596183.png/150x60?text=Matius',
          'https://bing.com/th/id/BCO.16f4ea12-bced-4b5c-83d5-5c696d765c36.png/150x60?text=Samsung'
        ].map((logo, index) => (
          <div key={index} className="logo-slide">
            <img 
              src={logo} 
              alt="Trusted company logo" 
              className="img-fluid h-100"
              style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.7 }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Streamline Your Board Operations</h2>
            <p className="lead text-muted">Everything you need for effective governance in one platform</p>
          </div>
          
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
              <div key={index} className="col-md-6 col-lg-4">
                <div className="feature-card p-4 h-100 rounded shadow-sm">
                  <div className="feature-icon mb-3" style={{ fontSize: '2.5rem' }}>{feature.icon}</div>
                  <h3 className="h5 fw-bold">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <h2 className="display-6 fw-bold mb-4">What Our Clients Say</h2>
              <p className="lead">Boardify has transformed how we run our board meetings, saving us hours of preparation time.</p>
              <a href="#testimonials" className="btn btn-outline-primary mt-3">Read more success stories</a>
            </div>
            <div className="col-lg-7">
              <div className="card shadow-sm p-4">
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
                <p className="mb-0">"Since implementing Boardify, our board meetings are 40% shorter yet more productive. The action tracking system ensures nothing falls through the cracks, and our directors love the intuitive interface."</p>
                <div className="mt-3 text-warning">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="signup" className="py-5 text-white cta-section">
        <div className="container text-center py-4">
          <h2 className="display-5 fw-bold mb-3">Ready to Transform Your Board Meetings?</h2>
          <p className="lead mb-4">Join hundreds of organizations that trust Boardify for their governance needs.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#pricing" className="btn btn-light btn-lg px-4 py-2 rounded-pill fw-bold">View Plans</a>
            <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">Contact Sales</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
