import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { FiLogOut } from "react-icons/fi"; // Logout icon

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        displayName: currentUser.displayName || "User",
        email: currentUser.email,
        photoURL: currentUser.photoURL || "https://via.placeholder.com/150",
        creationTime: currentUser.metadata.creationTime,
        lastSignInTime: currentUser.metadata.lastSignInTime,
      });
    } else {
      console.log("No user is signed in.");
    }
  }, []);

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert("You have successfully signed out.");
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl font-bold">Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome, {user.displayName}!
        </h1>
        <div className="flex flex-col items-center mb-6">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border mb-4"
          />
          <h3 className="text-xl font-semibold">{user.displayName}</h3>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-400 text-sm mt-2">
            Member since: {user.creationTime}
          </p>
          <p className="text-gray-400 text-sm">
            Last login: {user.lastSignInTime}
          </p>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 w-full"
        >
          <FiLogOut className="mr-2 text-lg" /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
