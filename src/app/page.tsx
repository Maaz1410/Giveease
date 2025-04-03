"use client";

import { Card, CardContent } from '../../components/ui/Card';
import { motion } from "framer-motion";
import Button from '../../components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 flex flex-col items-center p-12 overflow-y-auto scroll-smooth">

      {/* Navigation Bar */}
      <nav className="w-full bg-blue-800 text-white p-6 fixed top-0 z-10 shadow-lg">
        <div className="flex justify-between items-center max-w-full mx-auto">
          <a href="#home" className="text-3xl font-bold">GiveEase</a>
          <div className="space-x-8">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#how-it-works" className="hover:text-blue-300">How It Works</a>
            <a href="#features" className="hover:text-blue-300">Features</a>
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

      {/* How It Works Section */}
      <motion.div
        id="how-it-works"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full"
      >
        <Link href="/register" className="w-full">
          <Card className="h-[200px] text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">1. Register</h3>
              <p className="text-lg text-gray-600">NGOs can register to receive donations and help those in need.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/login" className="w-full">
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
        className="mt-32 w-full max-w-full text-center"
      >
        <h2 className="text-4xl font-bold text-blue-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-full text-center">
          <Card className="h-[200px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">AI Recommendations</h3>
              <p className="text-lg text-gray-600">We use advanced AI-based recommendations to match donors with the most in-need recipients.</p>
            </CardContent>
          </Card>
          <Card className="h-[200px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Simple & Transparent</h3>
              <p className="text-lg text-gray-600">Track your donations in real-time and see the impact of your contributions.</p>
            </CardContent>
          </Card>
          <Card className="h-[200px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardContent>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Secure & Safe</h3>
              <p className="text-lg text-gray-600">Our platform ensures secure transactions and donations, giving you peace of mind.</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 w-full max-w-5xl text-center"
      >
        <h3 className="text-3xl font-bold text-blue-800">About GiveEase</h3>
        <p className="text-lg text-gray-600 mt-8">
          GiveEase is a platform designed to simplify the donation process. We connect generous donors with NGOs and orphanages in need, ensuring that your donations go directly to those who need it the most. We believe that giving should be easy, transparent, and impactful.
        </p>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-32 w-full max-w-full text-center py-12"
      >
        <h3 className="text-2xl font-bold text-blue-800">Contact Us</h3>
        <p className="text-lg text-gray-600 mt-6">For any inquiries or more information, reach out to us:</p>
        <div className="mt-8 space-y-6 text-left max-w-xl mx-auto">
          <div>
            <h4 className="text-xl font-semibold text-blue-800">Email</h4>
            <p className="text-lg text-gray-600">support@giveease.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-800">Phone</h4>
            <p className="text-lg text-gray-600">+1 (800) 123-4567</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-800">Postal Address</h4>
            <p className="text-lg text-gray-600">GiveEase Foundation, 123 Charity St, Cityville, XYZ</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white py-12 mt-32">
        <div className="max-w-full mx-auto text-center">
          <p>&copy; 2025 GiveEase. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
