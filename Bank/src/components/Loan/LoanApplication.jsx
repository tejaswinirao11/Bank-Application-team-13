import React, { useState } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";

const LoanApplication = () => {
  const [form, setForm] = useState({
    amount: "",
    interestRate: "",
    term: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "loans"), { ...form, status: "Pending" });
      alert("Loan application submitted!");
    } catch (error) {
      alert("Error submitting loan: " + error.message);
    }
  };

  return (
    <form className="p-8 bg-white shadow-md rounded" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Apply for a Loan</h2>
      <input
        type="number"
        name="amount"
        placeholder="Loan Amount"
        value={form.amount}
        onChange={handleChange}
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="number"
        name="interestRate"
        placeholder="Interest Rate (%)"
        value={form.interestRate}
        onChange={handleChange}
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="number"
        name="term"
        placeholder="Loan Term (years)"
        value={form.term}
        onChange={handleChange}
        className="block w-full mb-4 p-2 border"
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default LoanApplication;
