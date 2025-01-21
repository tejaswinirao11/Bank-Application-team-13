import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FaUser, FaEnvelope, FaMoneyBillWave, FaPercentage, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [user, setUser] = useState(null);

  // Fetch the logged-in user's info using Firebase Authentication
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({
        name: currentUser.displayName || "Anonymous",
        email: currentUser.email,
        photoURL: currentUser.photoURL || "https://via.placeholder.com/150",
      });
    }
  }, []);

  // Fetch loans from Firestore
  useEffect(() => {
    const fetchLoans = async () => {
      const loanCollection = await getDocs(collection(db, "loans"));
      setLoans(loanCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchLoans();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* User Info Section */}
      {user ? (
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-6">
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold flex items-center">
              <FaUser className="mr-2 text-blue-600" />
              {user.name}
            </h3>
            <p className="text-gray-600 flex items-center">
              <FaEnvelope className="mr-2 text-gray-500" />
              {user.email}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading user info...</p>
      )}

      {/* Loans List */}
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <FaMoneyBillWave className="mr-2 text-green-600" />
        Your Loans
      </h2>

      {loans.length === 0 ? (
        <p className="text-gray-600">No loans available.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
            >
              <p className="text-lg font-medium flex items-center mb-2">
                <FaMoneyBillWave className="mr-2 text-green-600" />
                <strong>Amount:</strong> ${loan.amount}
              </p>
              <p className="text-lg font-medium flex items-center mb-2">
                <FaPercentage className="mr-2 text-purple-600" />
                <strong>Interest Rate:</strong> {loan.interestRate}%
              </p>
              <p className="text-lg font-medium flex items-center mb-2">
                <FaCalendarAlt className="mr-2 text-yellow-600" />
                <strong>Term:</strong> {loan.term} years
              </p>
              <p className="text-lg font-medium flex items-center">
                <FaCheckCircle
                  className={`mr-2 ${
                    loan.status === "Approved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                />
                <strong>Status:</strong> {loan.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoanList;
