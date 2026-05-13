import { motion } from "framer-motion";

import { Link } from "react-router";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <section className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)] px-6 pt-32 pb-16">
        {/* Background Glow */}
        <div className="absolute w-150 h-150 bg-purple-600/20 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <p className="uppercase tracking-[0.3em] text-purple-400 mb-5 font-medium">
            HCL GUVI Webinar Demo
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Understanding
            <br />
            Full Stack Flow
          </h1>

          <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A simple modern full stack authentication application built to
            demonstrate how frontend, backend, APIs, authentication, middleware,
            cookies, databases and cloud services work together in a real-world
            application flow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm text-gray-400">
            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              React
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              Express
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              MongoDB
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              JWT Auth
            </span>

            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              Cloudinary
            </span>
          </div>

          <div className="mt-12 flex gap-5 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition-all font-semibold"
            >
              Explore Demo
            </Link>

            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all"
            >
              Login
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
