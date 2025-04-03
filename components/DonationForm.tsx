"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DonationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    contactMethod: "",
    message: "",
    donationType: "",
    donationDetails: "",
    pickupOption: "",
    pickupDate: "",
    paymentMethod: "",
    transactionId: "",
    bankCode: "",
    paymentOption: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Donation submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <motion.form 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Donate Now</h2>

        {step === 1 && (
          <>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />
            
            <label className="block mt-4 text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />
            
            <label className="block mt-4 text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />

            <label className="block mt-4 text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            />

            <p className="text-sm text-gray-500 mt-2">You don’t need to enter your details again.</p>
            <button className="text-blue-600 mt-2 text-sm">Sign Up</button>

            <button type="button" onClick={handleNext} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block text-gray-700 font-semibold">What would you like to donate?</label>
            <select
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              required
            >
              <option value="">Select an option</option>
              <option value="clothes">Clothes</option>
              <option value="food">Food</option>
              <option value="books">Books</option>
              <option value="money">Money</option>
              <option value="other">Other</option>
            </select>

            {formData.donationType === "money" ? (
              <>
                <label className="block mt-4 text-gray-700 font-semibold">Transaction ID</label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />

                <label className="block mt-4 text-gray-700 font-semibold">Bank Code</label>
                <input
                  type="text"
                  name="bankCode"
                  value={formData.bankCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />

                <label className="block mt-4 text-gray-700 font-semibold">Payment Method</label>
                <select
                  name="paymentOption"
                  value={formData.paymentOption}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                >
                  <option value="">Select an option</option>
                  <option value="upi">UPI</option>
                  <option value="debit">Debit Card</option>
                  <option value="netbanking">Net Banking</option>
                </select>

                <button type="submit" className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition-all">
                  Confirm
                </button>
              </>
            ) : (
              <>
                <label className="block mt-4 text-gray-700 font-semibold">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  required
                />
                <button type="button" onClick={handleNext} className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                  Proceed
                </button>
              </>
            )}
          </>
        )}
      </motion.form>
    </div>
  );
}
