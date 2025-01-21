import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Loan System</h1>
        <div>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/loan-application" className="px-4">Apply Loan</Link>
          <Link to="/loan-calculator" className="px-4">Calculator</Link>
          <Link to="/loan-list" className="px-4">My Loans</Link>
          <Link to="/profile" className="px-4">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
