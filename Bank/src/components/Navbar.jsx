import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCalculator, FaClipboardList, FaUser, FaSignInAlt, FaMoneyCheckAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Loan System</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/loan-application" className="flex items-center space-x-2 hover:text-gray-300">
            <FaMoneyCheckAlt />
            <span>Apply Loan</span>
          </Link>
          <Link to="/loan-calculator" className="flex items-center space-x-2 hover:text-gray-300">
            <FaCalculator />
            <span>Calculator</span>
          </Link>
          <Link to="/loan-list" className="flex items-center space-x-2 hover:text-gray-300">
            <FaClipboardList />
            <span>My Loans</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-gray-300">
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link to="/signin" className="flex items-center space-x-2 hover:text-gray-300">
            <FaSignInAlt />
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 p-4 space-y-4">
          <Link to="/" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/loan-application" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaMoneyCheckAlt />
            <span>Apply Loan</span>
          </Link>
          <Link to="/loan-calculator" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaCalculator />
            <span>Calculator</span>
          </Link>
          <Link to="/loan-list" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaClipboardList />
            <span>My Loans</span>
          </Link>
          <Link to="/profile" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaUser />
            <span>Profile</span>
          </Link>
          <Link to="/signin" className="block flex items-center space-x-2 hover:text-gray-300">
            <FaSignInAlt />
            <span>Sign In</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
