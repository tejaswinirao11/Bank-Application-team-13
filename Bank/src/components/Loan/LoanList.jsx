import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      const loanCollection = await getDocs(collection(db, "loans"));
      setLoans(loanCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchLoans();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Loans</h2>
      {loans.map((loan) => (
        <div key={loan.id} className="mb-4 p-4 border">
          <p>Amount: ${loan.amount}</p>
          <p>Interest Rate: {loan.interestRate}%</p>
          <p>Term: {loan.term} years</p>
          <p>Status: {loan.status}</p>
        </div>
      ))}
    </div>
  );
};

export default LoanList;
