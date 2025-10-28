import React from "react";

const AboutUs = () => {
  const companyName = "Company Name";
  const owner = {
    name: "Vishal Chauhan",
    degree: "B.Tech, Guru Govind Singh Indraprastha University (GGSIPU)",
    about:
      "Vishal is a technology enthusiast and entrepreneur with a passion for building products that bridge small businesses and modern consumers. He specializes in building scalable frontend systems and UX-focused solutions.",
  };

  const companyAbout = `At ${companyName}, we make local shopping simple and profitable. Our platform connects nearby shopkeepers with customers looking for fast, reliable and affordable shopping. Customers get curated shops, quick search, and smooth checkout; shopkeepers get better visibility, order management and insights to grow their sales.`;

  const fakeDetails = {
    founded: "2023",
    headquarters: "Delhi NCR, India",
    contact: "support@companyname.com",
    phone: "+91 98765 43210",
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-indigo-500 font-bold text-sm uppercase tracking-wide mb-2">
              About Us
            </h3>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {companyName}
            </h1>

            <p className="mt-4 text-neutral-600 text-base sm:text-lg">
              {companyAbout}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Owner</h4>
                <p className="text-neutral-600 mt-1">{owner.name}</p>
                <p className="text-neutral-500 text-sm mt-1">{owner.degree}</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-800">How we help</h4>
                <ul className="text-neutral-600 mt-1 list-disc list-inside text-sm">
                  <li>Customers: fast discovery, honest reviews, localized offers.</li>
                  <li>Shopkeepers: order management, better reach & analytics.</li>
                  <li>Reduced friction: simple onboarding and payments.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="text-sm text-neutral-600">
                <p>
                  <span className="font-medium text-gray-800">Founded:</span> {fakeDetails.founded}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-gray-800">Headquarters:</span> {fakeDetails.headquarters}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 text-sm text-neutral-600">
                <p>
                  <span className="font-medium text-gray-800">Contact:</span> {fakeDetails.contact}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-gray-800">Phone:</span> {fakeDetails.phone}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-800">Owner's Message</h4>
              <p className="text-neutral-600 mt-2 text-sm">
                "My goal is to bring every small business onto a digital platform — to help them grow their business and make shopping more convenient for customers. We provide simple, secure, and reliable services that benefit both shopkeepers and customers."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-50 flex items-center justify-center p-8">
            <div className="w-full max-w-sm">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img
                  src="./src\User\Components\assets\owner.jpeg"
                  alt="Owner"
                  className=" w-full pl-15 pr-15  h-70 object-contin   "
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold text-gray-800">{owner.name}</h5>
                  <p className="text-sm text-neutral-600 mt-1">{owner.degree}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1.2K</div>
                  <div className="text-xs text-neutral-500">Shops</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24K</div>
                  <div className="text-xs text-neutral-500">Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-neutral-500">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;