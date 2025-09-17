import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/home/HomeHeroImg.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-yellow-300 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        {/* Intro with Image */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At <span className="font-semibold">TranscanRentals</span>, we
              understand that every customer has unique transportation needs. As
              one of Canada’s most trusted truck rental providers, we offer
              tailored solutions for both businesses and individuals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether it’s a local delivery or a long-haul trip across
              provinces, our modern fleet and customer-first approach ensure a
              seamless experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={AboutImage}
              alt="TranscanRentals truck fleet"
              className="rounded-2xl shadow-lg object-cover w-full h-[350px] md:h-[450px]"
            />
          </motion.div>
        </div>

        {/* Why Choose Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Why Choose TranscanRentals?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Wide Range of Trucks",
                desc: "From light-duty vans to heavy-duty trucks, we’ve got you covered.",
              },
              {
                title: "Easy Online Booking",
                desc: "Reserve your truck in minutes with our simple online platform.",
              },
              {
                title: "Nationwide Coverage",
                desc: "Serving customers across Canada without delays.",
              },
              {
                title: "Safe & On-Time Delivery",
                desc: "Reliable, punctual, and stress-free rental services.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden costs—plan your budget with confidence.",
              },
              {
                title: "Trusted by Businesses",
                desc: "Leading companies rely on us for consistent service.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What Sets Us Apart */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            What Sets Us Apart?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Customisable Options",
                desc: "Pick the right truck for your load, route, and budget.",
              },
              {
                title: "Verified Drivers",
                desc: "All drivers are trained, experienced, and background-checked.",
              },
              {
                title: "Digital Documentation",
                desc: "Enjoy paperless bookings, easy uploads, and instant confirmations.",
              },
              {
                title: "24/7 Customer Support",
                desc: "We’re always available to assist you—day or night.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-10 text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Rent a Truck?
          </h2>
          <p className="text-gray-800 mb-6 text-lg">
            Contact <span className="font-semibold">TranscanRentals</span> today
            and experience hassle-free, affordable, and reliable truck rental
            services across Canada.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
