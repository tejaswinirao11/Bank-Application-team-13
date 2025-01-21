import React from "react";
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in successfully!");
    } catch (error) {
      alert("Error signing in: " + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
