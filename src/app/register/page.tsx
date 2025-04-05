"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    address: "",
    zipCode: "",
    mission: "",
    registrationCertificate: null,
    contactPersonID: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key as keyof typeof formData] as any);
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setStatus("Registration submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        address: "",
        zipCode: "",
        mission: "",
        registrationCertificate: null,
        contactPersonID: null,
      });
    } else {
      setStatus("Failed to submit registration. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">NGO Registration</h2>

        {/* Name */}
        <label className="block text-gray-700 font-semibold">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Email */}
        <label className="block mt-4 text-gray-700 font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Phone */}
        <label className="block mt-4 text-gray-700 font-semibold">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Organization Name */}
        <label className="block mt-4 text-gray-700 font-semibold">Organization Name</label>
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Address */}
        <label className="block mt-4 text-gray-700 font-semibold">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Zip Code */}
        <label className="block mt-4 text-gray-700 font-semibold">Zip Code</label>
        <input
          type="number"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Mission */}
        <label className="block mt-4 text-gray-700 font-semibold">Mission Statement</label>
        <textarea
          name="mission"
          value={formData.mission}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        ></textarea>

        {/* Verification & Documents */}
        <h3 className="text-xl font-bold text-blue-800 mt-6">Verification & Documents</h3>
        <label className="block mt-4 text-gray-700 font-semibold">NGO Registration Certificate</label>
        <input
          type="file"
          name="registrationCertificate"
          accept=".pdf,.jpg,.png"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        <label className="block mt-4 text-gray-700 font-semibold">Government-issued ID of Contact Person</label>
        <input
          type="file"
          name="contactPersonID"
          accept=".pdf,.jpg,.png"
          onChange={handleFileChange}
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Register NGO
        </button>

        {status && <p className="text-center text-green-700 mt-4 font-medium">{status}</p>}
      </form>
    </div>
  );
}