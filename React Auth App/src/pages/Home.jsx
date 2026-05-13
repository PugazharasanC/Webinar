import { motion } from "framer-motion";

import { Link } from "react-router";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      <section
        className="
          relative
          flex
          flex-col
          items-center
          justify-center
          text-center
          min-h-screen
          px-6
        "
      >
        {/* Background Glow */}
        <div className="absolute w-150 h-150 bg-purple-600/20 blur-3xl rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1
            className="
              text-6xl
              md:text-8xl
              font-black
              leading-tight
            "
          >
            Modern JWT
            <br />
            Authentication
          </h1>

          <p
            className="
              mt-6
              text-gray-300
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Premium authentication experience with React, Tailwind CSS, JWT
            Cookies and Express backend.
          </p>

          <div className="mt-10 flex gap-5 justify-center">
            <Link
              to="/register"
              className="
                px-8
                py-4
                rounded-2xl
                bg-purple-600
                hover:bg-purple-700
                transition-all
                font-semibold
              "
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                hover:bg-white/20
                transition-all
              "
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
