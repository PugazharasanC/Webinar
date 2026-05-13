import { useState } from "react";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import api from "../api/axios";

import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
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
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);

      if (avatar) {
        formDataToSend.append("avatar", avatar);
      }

      const { data } = await api.post("/auth/register", formDataToSend);
      setUser(data.user);
      toast.success("Registered Successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, try again later");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-125 h-125 bg-purple-500/20 blur-3xl rounded-full -top-25 -right-25" />
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Create Account
        </h1>

        <div className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition-all duration-300"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
          />

          <button className=" w-full p-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all text-white font-semibold">
            Register
          </button>
        </div>

        <p className="mt-6 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400">
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
