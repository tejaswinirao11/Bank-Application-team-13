import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/Auth/SignIn";
import LoanApplication from "./components/Loan/LoanApplication";
import LoanCalculator from "./components/Loan/LoanCalculator";
import LoanList from "./components/Loan/LoanList";
import Profile from "./components/Profile";
import Home from "./components/Home";  // Import Home Component
import Footer from "./components/Footer";  // Import Footer Component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add Home Route */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/loan-list" element={<LoanList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />  {/* Add Footer Component */}
    </Router>
  );
};

export default App;
