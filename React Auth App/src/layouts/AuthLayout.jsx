import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-24">{children}</main>
    </div>
  );
};

export default AuthLayout;
