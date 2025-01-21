import React, { useState } from "react";

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={calculateMonthlyPayment}
        className="p-8 bg-white shadow-md rounded w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Loan Calculator</h2>
        <div className="mb-4">
          <label className="block mb-2">Loan Amount</label>
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            placeholder="Enter loan amount"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Interest Rate (Annual %)</label>
          <input
            type="number"
            name="interestRate"
            value={form.interestRate}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            placeholder="Enter annual interest rate"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Term (Years)</label>
          <input
            type="number"
            name="term"
            value={form.term}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            placeholder="Enter loan term in years"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          Calculate
        </button>

        {monthlyPayment && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            <h3 className="font-bold">Monthly Payment</h3>
            <p className="text-lg">${monthlyPayment}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoanCalculator;
