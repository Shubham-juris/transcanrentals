import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Local Truck Rentals",
      description:
        "Perfect for short-distance moves and city deliveries. Affordable rates and flexible booking.",
      icon: "🚚",
    },
    {
      title: "Long-Haul Truck Rentals",
      description:
        "Reliable trucks for cross-country deliveries with comfort and safety in mind.",
      icon: "🛣️",
    },
    {
      title: "Refrigerated Truck Rentals",
      description:
        "Keep your goods fresh with our temperature-controlled truck options.",
      icon: "❄️",
    },
    {
      title: "Heavy-Duty Truck Rentals",
      description:
        "Powerful trucks for transporting heavy machinery and large cargo loads.",
      icon: "🏗️",
    },
    {
      title: "Corporate Fleet Solutions",
      description:
        "Custom rental packages for businesses with ongoing transport needs.",
      icon: "🏢",
    },
    {
      title: "24/7 Roadside Assistance",
      description:
        "Peace of mind with round-the-clock roadside support for all our rentals.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-bold text-yellow-300 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At <span className="font-semibold">TranscanRentals</span>, we offer a
          wide range of truck rental services tailored to meet your specific
          transportation needs.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
