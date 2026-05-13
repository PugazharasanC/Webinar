import { Navigate } from "react-router";

import { useAuth } from "../context/AuthContext";

import Loader from "../components/Loader";

const GuestRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // While checking authentication
  if (loading) {
    return <Loader />;
  }

  // Already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default GuestRoute;
