import { Link } from "react-router";

import { useAuth } from "../context/AuthContext";

import api from "../api/axios";

const Navbar = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");

      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/10
        backdrop-blur-xl
        border-b
        border-white/10
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        <Link to="/" className="text-2xl font-bold text-white">
          AuthFlow
        </Link>

        <div className="flex items-center gap-5">
          {user ? (
            <>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="
                  px-5
                  py-2
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  transition-all
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>

              <Link
                to="/register"
                className="
                  px-5
                  py-2
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  transition-all
                "
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
