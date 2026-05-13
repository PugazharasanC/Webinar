import { useState } from "react";
import { useNavigate } from "react-router";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // =========================================
  // GET MY DETAILS
  // =========================================
  const handleGetDetails = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/auth/me");

      setUserDetails(data.user);
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // LOGOUT
  // =========================================
  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");

      setUser(null);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h1 className="text-5xl font-bold mb-10">Dashboard</h1>

        {/* Buttons */}
        <div className="flex gap-5">
          <button
            onClick={handleGetDetails}
            disabled={loading}
            className="px-6 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold"
          >
            {loading ? "Fetching..." : "Get My Details"}
          </button>

          <button
            onClick={handleLogout}
            className="px-6 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition-all duration-300 font-semibold"
          >
            Logout
          </button>
        </div>

        {/* User Details */}
        {userDetails && (
          <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <h2 className="text-3xl font-bold mb-5">My Details</h2>

            <p>
              <span className="font-semibold">Name:</span> {userDetails.name}
            </p>

            <p>
              <span className="font-semibold">Email:</span> {userDetails.email}
            </p>

            <p>
              <span className="font-semibold">Role:</span> {userDetails.role}
            </p>
            <img
              src={userDetails.avatar.url}
              alt={userDetails.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <p>
              <span className="font-semibold">Verified:</span>{" "}
              {userDetails.isVerified ? "Yes" : "No"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
