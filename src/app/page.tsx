"use client";

import { Card, CardContent } from '../../components/ui/Card';
import { motion } from "framer-motion";
import Button from '../../components/ui/button';
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 flex flex-col items-center p-12 overflow-y-auto scroll-smooth w-full">
      {/* Navigation Bar (Title Bar) */}
      <nav className="w-full bg-blue-800 text-white p-6 fixed top-0 z-10 shadow-lg">
        <div className="flex justify-between items-center max-w-full mx-auto">
          <a href="#home" className="text-3xl font-bold">GiveEase</a>
          <div className="space-x-8">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#features" className="hover:text-blue-300">How It Works</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        id="home"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mt-32 w-full"
      >
        <h1 className="text-6xl font-bold text-blue-800">GiveEase</h1>
        <p className="text-xl text-gray-700 mt-6">Giving Made Simple, Impact Made Big!</p>
        <div className="mt-8 space-x-6">
          <Link href="/donate">
            <Button className="bg-blue-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
              Donate Now
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Register and Login Section */}
      <motion.div
        id="how-it-works"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 flex flex-col md:flex-row justify-center gap-8 w-full max-w-4xl"
      >
        <Link href="/register" className="w-full md:w-1/2">
          <Card className="h-[200px] text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">1. Register</h3>
              <p className="text-lg text-gray-600">NGOs can register to receive donations and help those in need.</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/login" className="w-full md:w-1/2">
          <Card className="h-[200px] text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">2. Login</h3>
              <p className="text-lg text-gray-600">Log in to donate and make a difference to those in need.</p>
            </CardContent>
          </Card>
        </Link>
      </motion.div>

      {/* Features Section */}
      <motion.div
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 w-full max-w-5xl text-center"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Card className="h-[225px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">AI Recommendations</h3>
              <p className="text-lg text-gray-600">We use advanced AI-based recommendations to match donors with the most in-need recipients.</p>
            </CardContent>
          </Card>
          <Card className="h-[225px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Simple & Transparent</h3>
              <p className="text-lg text-gray-600">Track your donations in real-time and see the impact of your contributions.</p>
            </CardContent>
          </Card>
          <Card className="h-[225px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Secure & Safe</h3>
              <p className="text-lg text-gray-600">Our platform ensures secure transactions and donations, giving you peace of mind.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Contact Section - Smaller */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 w-full max-w-xl text-center py-6"
      >
        <h3 className="text-2xl font-bold text-blue-800">Contact Us</h3>
        <p className="text-lg text-gray-600 mt-4">For any inquiries, reach out to us:</p>
        <div className="mt-4 text-left">
          <p className="text-lg text-gray-600"><strong>Email:</strong> support@giveease.com</p>
          <p className="text-lg text-gray-600"><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p className="text-lg text-gray-600"><strong>Address:</strong> GiveEase, 123 Charity St, Cityville</p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white py-8 mt-32 text-center">
        <p>&copy; 2025 GiveEase. All rights reserved.</p>
      </footer>
    </div>
  );
}
