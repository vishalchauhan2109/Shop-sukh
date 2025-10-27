import React from "react";
import ownerPhoto from "../assets/owner.jpeg"; // rename your image as owner.jpg and place inside src/assets

const About = () => {
  return (
    <div className="bg-fuchsia-100 text-neutral-500 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Owner Photo */}
          <img
            src={ownerPhoto}
            alt="Owner Vishal Chauhan"
            className="w-48 h-48 rounded-full object-cover border-4 border-fuchsia-300 shadow-md"
          />

          {/* Owner Details */}
          <div>
            <h2 className="text-2xl font-bold text-fuchsia-600 mb-2">
              Vishal Chauhan
            </h2>
            <p className="text-lg font-semibold">
              B.Tech in Computer Science & Engineering
            </p>
            <p className="text-sm mb-4">
              Guru Gobind Singh Indraprastha University (Batch 2022–2026)
            </p>

            <p className="leading-relaxed text-justify">
              Hello! I’m Vishal Chauhan, the creator of <b>Shop-Sukh</b> — an
              innovative e-commerce platform designed to fulfill users’ daily
              needs at affordable prices. My mission is to make everyday
              essentials easily accessible while helping local retailers
              increase their sales efficiently.
            </p>
          </div>
        </div>

        {/* App Info Section */}
        <div className="mt-8 border-t border-fuchsia-200 pt-6">
          <h3 className="text-xl font-bold text-fuchsia-600 mb-2">
            About Shop-Sukh
          </h3>
          <p className="leading-relaxed text-justify">
            Shop-Sukh bridges the gap between users and local retailers by
            offering products that meet daily life requirements at cheaper
            rates. It not only benefits customers by providing affordable
            products but also empowers shopkeepers to grow their sales through
            a modern, digital platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
