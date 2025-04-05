"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <motion.form 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Login</h2>

        {/* Email */}
        <label className="block text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          required
        />

        {/* Password */}
        <label className="block mt-4 text-gray-700 font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
          required
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Login
        </motion.button>
      </motion.form>
      
      {/* Sign Up Link */}
      <p className="mt-4 text-gray-700">Dont have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a></p>
    </div>
  );
}
