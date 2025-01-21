import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyCheckAlt, FaCalculator, FaList } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section relative text-center p-8 md:p-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
            Welcome to Our Loan System
          </h1>
          <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-2xl mx-auto">
            Simplifying loans for you. Apply, calculate, and track your loans effortlessly.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/loan-application"
              className="btn-primary text-sm md:text-lg flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg hover:bg-blue-500 transition duration-300"
            >
              <FaMoneyCheckAlt className="mr-2" /> Apply for a Loan
            </Link>
            <Link
              to="/loan-calculator"
              className="btn-secondary text-sm md:text-lg flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              <FaCalculator className="mr-2" /> Loan Calculator
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section p-8 md:p-16 bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-4 md:mb-6">
          About Our System
        </h2>
        <p className="text-sm md:text-lg text-center max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed">
          Our system provides an intuitive platform to manage all your loan-related needs. Whether it's applying
          for a loan, calculating EMIs, or tracking application statuses, we've got you covered with a seamless
          and user-friendly experience.
        </p>
        <div className="text-center">
          <Link
            to="/loan-list"
            className="btn-info text-sm md:text-lg flex items-center justify-center px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-200 transition duration-300"
          >
            <FaList className="mr-2" /> View Your Loans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
