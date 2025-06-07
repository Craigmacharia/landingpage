import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* 
        Add these later when you create these components
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        */}
        
        {/* Add a catch-all route for 404 errors */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;

