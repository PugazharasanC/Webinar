import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router";

import "./index.css";

import router from "./router/router";

import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      }}
    />
  </AuthProvider>,
);
