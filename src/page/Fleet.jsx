import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import fleetImg from "../assets/fleet/fleetImg.jpg";

import fleetImg2 from "../assets/fleet/fleetImg2.jpg";
import fleetImg3 from "../assets/fleet/fleetImg3.jpg";
import fleetImg4 from "../assets/fleet/fleetImg4.jpg";
import fleetImg5 from "../assets/fleet/fleetImg5.jpg";
import fleetImg6 from "../assets/fleet/fleetImg6.jpg";
export default function Fleet() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  const fleetData = [
    {
      name: "12 ft City Truck",
      description:
        "Compact and easy to maneuver — perfect for city deliveries and small moves.",
      image: fleetImg,
    },
    {
      name: "20 ft Medium Truck",
      description:
        "Ideal for medium-distance hauls and larger household or office relocations.",
      image: fleetImg2,
    },
    {
      name: "26 ft Heavy-Duty Truck",
      description:
        "Large cargo capacity with heavy-duty performance for demanding jobs.",
      image: fleetImg6,
    },
    {
      name: "Refrigerated Truck",
      description:
        "Temperature-controlled trucks for perishable goods and sensitive cargo.",
      image: fleetImg4,
    },
    {
      name: "Flatbed Truck",
      description:
        "Perfect for transporting oversized loads and heavy machinery.",
      image: fleetImg5,
    },
    {
      name: "Corporate Fleet",
      description:
        "Custom fleet rental packages for businesses with ongoing transport needs.",
      image: fleetImg3,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-yellow-300 mb-6 text-center">
          Our Fleet
        </h1>
        <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12">
          Choose from our wide selection of well-maintained trucks to match your
          transportation needs.
        </p>

        {/* Fleet Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((truck, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img
                src={truck.image}
                alt={truck.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {truck.name}
                </h3>
                <p className="text-gray-600">{truck.description}</p>
                <button
                  onClick={handleClick}
                  className="mt-4 inline-block bg-yellow-300 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg transition"
                >
                  Rent Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
