import { useState } from "react";

import { motion } from "framer-motion";

import { useNavigate, Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import api from "../api/axios";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/login", formData);

      setUser(data.user);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-purple-500/30 blur-3xl rounded-full -top-25 -left-25" />
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className=" relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome Back</h1>

        <div className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 outline-none"
          />

          <button className="w-full p-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300 font-semibold">
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-gray-300">
          Don't have an account?{""}
          <Link to="/register" className="text-purple-400">
            Register
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
