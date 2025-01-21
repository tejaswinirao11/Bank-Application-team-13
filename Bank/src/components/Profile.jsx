import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
        photoURL: currentUser.photoURL,
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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
        <div className="flex flex-col items-center mb-4">
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border mb-4"
          />
          <h3 className="text-lg font-semibold">{user.displayName}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
