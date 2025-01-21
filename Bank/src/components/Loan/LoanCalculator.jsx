import React, { useState } from "react";
import { FaDollarSign, FaPercentage, FaCalendarAlt, FaCalculator } from "react-icons/fa";

const LoanCalculator = () => {
  const [form, setForm] = useState({
    loanAmount: "",
    interestRate: "",
    term: "",
  });
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const calculateMonthlyPayment = (e) => {
    e.preventDefault();

    const { loanAmount, interestRate, term } = form;

    if (!loanAmount || !interestRate || !term) {
      alert("Please fill out all fields");
      return;
    }

    const principal = parseFloat(loanAmount);
    const annualInterestRate = parseFloat(interestRate) / 100;
    const monthlyInterestRate = annualInterestRate / 12;
    const totalMonths = parseInt(term) * 12;

    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <form
        onSubmit={calculateMonthlyPayment}
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
          <FaCalculator className="mr-2 text-blue-600" /> Loan Calculator
        </h2>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-medium flex items-center">
            <FaDollarSign className="mr-2 text-blue-600" /> Loan Amount
          </label>
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            placeholder="Enter loan amount"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-medium flex items-center">
            <FaPercentage className="mr-2 text-blue-600" /> Interest Rate (Annual %)
          </label>
          <input
            type="number"
            name="interestRate"
            value={form.interestRate}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            placeholder="Enter annual interest rate"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-gray-700 font-medium flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-600" /> Term (Years)
          </label>
          <input
            type="number"
            name="term"
            value={form.term}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-600 outline-none"
            placeholder="Enter loan term in years"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Calculate
        </button>

        {monthlyPayment && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
            <h3 className="text-lg font-bold text-green-800">Estimated Monthly Payment</h3>
            <p className="text-2xl font-semibold text-green-900">${monthlyPayment}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoanCalculator;
