import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const Currency = ({ currencies, onSelect }) => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleSelect = (cur) => {
    setSelectedCurrency(cur);
    onSelect(cur);
    setShowSuccess(true);
    
    // Auto-hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/");
    }, 3000);
  };

  // Enhanced currency data with flags and icons
  const enhancedCurrencies = [
    {
      code: "USD",
      name: "US Dollar",
      symbol: "$",
      flag: "🇺🇸",
      icon: "💵",
      color: "text-primary"
    },
    {
      code: "EUR",
      name: "Euro",
      symbol: "€",
      flag: "🇪🇺",
      icon: "💶",
      color: "text-info"
    },
    {
      code: "GBP",
      name: "British Pound",
      symbol: "£",
      flag: "🇬🇧",
      icon: "💷",
      color: "text-danger"
    },
    {
      code: "KES",
      name: "Kenyan Shilling",
      symbol: "KSh",
      flag: "🇰🇪",
      icon: "💰",
      color: "text-success"
    },
    {
      code: "JPY",
      name: "Japanese Yen",
      symbol: "¥",
      flag: "🇯🇵",
      icon: "💴",
      color: "text-warning"
    },
    {
      code: "CNY",
      name: "Chinese Yuan",
      symbol: "¥",
      flag: "🇨🇳",
      icon: "🀄",
      color: "text-danger"
    },
    {
      code: "INR",
      name: "Indian Rupee",
      symbol: "₹",
      flag: "🇮🇳",
      icon: "💸",
      color: "text-primary"
    },
    {
      code: "AED",
      name: "UAE Dirham",
      symbol: "د.إ",
      flag: "🇦🇪",
      icon: "🏝️",
      color: "text-success"
    }
  ];

  return (
    <div className="container mt-5">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="position-fixed top-0 start-50 translate-middle-x mt-3 z-3"
            style={{ width: "90%", maxWidth: "500px" }}
          >
            <div className="alert alert-success d-flex align-items-center shadow-lg">
              <FiCheckCircle className="flex-shrink-0 me-2" size={24} />
              <div>
                Currency set to {selectedCurrency?.flag} {selectedCurrency?.name} ({selectedCurrency?.code})
              </div>
              <button 
                className="btn-close ms-auto" 
                onClick={() => setShowSuccess(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="currency-selector bg-white rounded-3 shadow p-4 p-md-5 max-w-lg mx-auto"
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl fw-bold mb-2">Select Your Currency</h2>
          <p className="text-muted">Choose your preferred currency for display</p>
        </div>

        <ul className="list-unstyled mb-4">
          {enhancedCurrencies.map((cur) => (
            <motion.li
              key={cur.code}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`d-flex justify-content-between align-items-center border rounded-2 p-3 mb-3 ${cur.color}`}
              onClick={() => handleSelect(cur)}
              style={{ cursor: 'pointer' }}
            >
              <div className="d-flex align-items-center gap-3">
                <span 
                  className="fs-3" 
                  role="img" 
                  aria-label={`Flag of ${cur.name}`}
                >
                  {cur.flag}
                </span>
                <div>
                  <div className="fw-bold">
                    {cur.symbol} - {cur.code}
                  </div>
                  <div className="small text-muted">
                    {cur.name}
                  </div>
                </div>
              </div>
              <span 
                className="fs-3" 
                role="img" 
                aria-label={`${cur.name} currency`}
              >
                {cur.icon}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="btn btn-outline-primary px-4 py-2 rounded-pill"
          >
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Currency;