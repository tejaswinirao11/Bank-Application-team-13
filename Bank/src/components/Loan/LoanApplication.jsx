import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FaMoneyCheckAlt, FaPercentage, FaCalendarAlt } from "react-icons/fa";

const LoanApplication = () => {
  const [form, setForm] = useState({
    amount: "",
    interestRate: "",
    term: "",
  });
  const [user, setUser] = useState(null);

  // Fetch user info after component mounts
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        name: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
      });
    }
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in to apply for a loan.");
      return;
    }

    try {
      await addDoc(collection(db, "loans"), {
        ...form,
        status: "Pending",
        userName: user.name,
        userEmail: user.email,
        userPhoto: user.photoURL,
      });
      alert("Loan application submitted!");
      setForm({ amount: "", interestRate: "", term: "" });
    } catch (error) {
      alert("Error submitting loan: " + error.message);
    }
  };

  return (
    <div className="p-6 md:p-12 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Apply for a Loan
      </h2>

      {/* Display user info */}
      {user && (
        <div className="mb-8 flex items-center space-x-4">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="User Profile"
            className="w-16 h-16 rounded-full shadow-lg"
          />
          <div>
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>
      )}

      {/* Loan application form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center border rounded-lg p-2">
          <FaMoneyCheckAlt className="text-blue-600 text-lg mr-2" />
          <input
            type="number"
            name="amount"
            placeholder="Loan Amount"
            value={form.amount}
            onChange={handleChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaPercentage className="text-blue-600 text-lg mr-2" />
          <input
            type="number"
            name="interestRate"
            placeholder="Interest Rate (%)"
            value={form.interestRate}
            onChange={handleChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex items-center border rounded-lg p-2">
          <FaCalendarAlt className="text-blue-600 text-lg mr-2" />
          <input
            type="number"
            name="term"
            placeholder="Loan Term (years)"
            value={form.term}
            onChange={handleChange}
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplication;
