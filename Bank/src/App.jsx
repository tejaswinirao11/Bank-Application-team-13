import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/Auth/SignIn";
import LoanApplication from "./components/Loan/LoanApplication";
import LoanCalculator from "./components/Loan/LoanCalculator";
import LoanList from "./components/Loan/LoanList";
import Profile from "./components/Profile";  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/loan-calculator" element={<LoanCalculator />} />
        <Route path="/loan-list" element={<LoanList />} />
        <Route path="/profile" element={<Profile />} />  {/* Add Profile Route */}
      </Routes>
    </Router>
  );
};

export default App;
