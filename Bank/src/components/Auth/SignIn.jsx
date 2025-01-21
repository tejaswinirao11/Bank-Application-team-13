import React from "react";
import { auth, provider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { AiOutlineUser } from "react-icons/ai"; // User Icon

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
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <div className="text-center mb-6">
          <AiOutlineUser className="text-5xl text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-700">Welcome Back!</h2>
          <p className="text-gray-500">Sign in to continue</p>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          <FcGoogle className="text-2xl mr-3" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
