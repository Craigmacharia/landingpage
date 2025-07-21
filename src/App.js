import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Landing from './Landing';
import Currency from './Currency';
import currencies from './data/currencies';

const App = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Landing selectedCurrency={selectedCurrency} />} />

        {/* Currency Selector Page */}
        <Route
          path="/currency"
          element={
            <Currency
              currencies={currencies}
              onSelect={handleCurrencySelect}
            />
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Landing selectedCurrency={selectedCurrency} />} />
      </Routes>
    </Router>
  );
};

export default App;
