import React from "react";
// import heroImage from "../assets/hero-image.png"; // Make sure to add your image here

const Home = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-16 md:flex items-center justify-between">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-inter font-bold text-[#0D47A1] leading-tight">
          Empowering Communities<br />
          in Times of Crisis
        </h1>
        <p className="text-lg mt-4 text-gray-700 font-roboto">
          Connect citizens and responders instantly for faster, smarter emergency response.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-[#1565C0] hover:bg-[#0D47A1] text-white px-6 py-3 rounded-lg transition">
            Report a Crisis
          </button>
          <button className="border border-[#1565C0] text-[#1565C0] hover:bg-[#E3F2FD] px-6 py-3 rounded-lg transition">
            Join as Responder
          </button>
        </div>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2">
        <img src={""} alt="CrisisBoard Hero" className="w-full" />
      </div>
    </section>
  );
};

export default Home;