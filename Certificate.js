import React, { useState } from "react";
import { generateCertificate } from "../api";
import Footer from "../components/Footer"; // Importing Footer component

const Certificate = () => {
  const [form, setForm] = useState({ username: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await generateCertificate(form);
      setMessage(data.message);
    } catch (error) {
      setMessage("Certificate generation failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col items-center my-10">
        {/* Certificate Generation Form */}
        <h2 className="text-3xl font-bold text-orange-600">Generate Your Certificate 🎓</h2>
        <p className="text-gray-500 italic">Enter your details to receive your certificate</p>

        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg rounded-lg p-6 mt-6 w-80 flex flex-col gap-4 border border-gray-200"
        >
          <input 
            type="text" 
            placeholder="Username" 
            required
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input 
            type="email" 
            placeholder="Email" 
            required
            className="p-2 border border-gray-300 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button 
            type="submit" 
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Generate
          </button>
        </form>

        {/* Message after submission */}
        {message && <p className="mt-4 text-gray-600">{message}</p>}
      </div>

      {/* Sample Certificates Section */}
      <div className="my-10 text-center">
        <h2 className="text-2xl font-semibold text-orange-600">Sample Certificates 🏆</h2>
        <p className="text-gray-500">Take a look at some of the certificates you can earn!</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 px-4">
          {/* Technical Certificates */}
          <div className="flex flex-col items-center">
            <img src="https://user-images.githubusercontent.com/20099646/89026587-d1f01900-d2dd-11ea-894c-916935efe598.jpg" alt="Hackathon Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">Hackathon Certificate</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.fiesttech.com/images/coursecertificate/1686050085_Artificial_Intelligence.jpeg" alt="AI Workshop Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">AI Workshop Certificate</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://campus.w3schools.com/cdn/shop/files/react_7_700x700.png?v=1720960494" alt="Cybersecurity Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">Cybersecurity Workshop Certificate</p>
          </div>

          {/* Non-Technical Certificates */}
          <div className="flex flex-col items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgU_kFcDCq1tNwB2bdrcDFknJ7bGTUanxhGg&s" alt="Public Speaking Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">Public Speaking Certificate</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://cdn.slidesharecdn.com/ss_thumbnails/teamworkcertificate-200624173115-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Teamwork Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">Teamwork & Leadership Certificate</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://lh4.googleusercontent.com/proxy/WuNiuHLWXGK9M_2T2HljZQ9pTwcSKPgv5brldL5Nr578YFGPRXKjNJ89ALwWMG4pz6p8H3d92XG9S1nhM29jvLtyFG4ZtmSrFnsek-rdajHPv_lWHTTWiDVPlcYC0L9GloP02H2080nYoDsatHT48855kRCTBw" alt="Event Management Certificate" className="w-64 shadow-lg rounded-lg border border-gray-200"/>
            <p className="mt-2 text-gray-600 font-semibold">Event Management Certificate</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Certificate;