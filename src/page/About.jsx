import React from "react";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
          About Us
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          At <span className="font-semibold">TranscanRentals</span>, we pride
          ourselves on being Canada's most trusted truck rental service. With
          years of experience, a modern fleet, and a passion for customer
          satisfaction, we help businesses and individuals transport goods
          efficiently, safely, and affordably.
        </p>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1597001270927-3a34c6cfdf67"
              alt="Truck Rental"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>🚚 Wide range of modern, well-maintained trucks.</li>
              <li>💰 Transparent pricing with no hidden fees.</li>
              <li>🕒 Flexible rental periods to fit your needs.</li>
              <li>🌎 Serving customers across Canada.</li>
              <li>⭐ 24/7 customer support for peace of mind.</li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our mission is to provide reliable and affordable truck rental
            solutions that empower businesses and individuals to move goods with
            confidence. Whether it's a short local delivery or a long-haul trip,
            we’re here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
