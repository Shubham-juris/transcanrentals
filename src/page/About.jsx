import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/home/HomeHeroImg.jpg";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-yellow-300 mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold">TranscanRentals</span>, we pride
          ourselves on being Canada's most trusted truck rental service. With
          years of experience, a modern fleet, and a passion for customer
          satisfaction, we help businesses and individuals transport goods
          efficiently, safely, and affordably.
        </motion.p>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImage}
              alt="Truck Rental"
              className="rounded-lg shadow-lg object-cover w-full h-[300px]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                🚚 Wide range of modern, well-maintained trucks.
              </li>
              <li className="flex items-center gap-2">
                💰 Transparent pricing with no hidden fees.
              </li>
              <li className="flex items-center gap-2">
                🕒 Flexible rental periods to fit your needs.
              </li>
              <li className="flex items-center gap-2">
                🌎 Serving customers across Canada.
              </li>
              <li className="flex items-center gap-2">
                ⭐ 24/7 customer support for peace of mind.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our mission is to provide reliable and affordable truck rental
            solutions that empower businesses and individuals to move goods with
            confidence. Whether it's a short local delivery or a long-haul trip,
            we’re here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
