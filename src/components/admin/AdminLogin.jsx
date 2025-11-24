"use client";

import { useState } from "react";
import { FaLock, FaSpinner } from "react-icons/fa";

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminAuth", "true");
        onLogin(true);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-100 px-4 overflow-hidden">

      {/* Soft Animated Background Blobs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-teal-300/30 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-emerald-200/40 blur-[150px] rounded-full animate-pulse"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-2xl p-10 border border-teal-100">

          {/* Logo / Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <FaLock className="text-white text-3xl" />
            </div>

            <h1 className="font-serif text-3xl text-teal-900 mt-5 tracking-tight">
              Admin Login
            </h1>
            <p className="text-teal-700 text-sm opacity-70 mt-1">
              Twin Brothers Therapy — Secure Access
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-teal-900 font-semibold mb-1.5 text-sm">Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-teal-200 rounded-lg text-teal-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block text-teal-900 font-semibold mb-1.5 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-teal-200 rounded-lg text-teal-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm shadow-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-teal-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

      

        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          .animate-pulse {
            animation: pulse 7s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
