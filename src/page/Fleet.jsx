import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      image:
        "https://images.unsplash.com/photo-1601924582975-7c31c0a7f8c2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "20 ft Medium Truck",
      description:
        "Ideal for medium-distance hauls and larger household or office relocations.",
      image:
        "https://images.unsplash.com/photo-1581092336356-3e89f4f8f8f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "26 ft Heavy-Duty Truck",
      description:
        "Large cargo capacity with heavy-duty performance for demanding jobs.",
      image:
        "https://images.unsplash.com/photo-1600546323796-4a6be2e2c1b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Refrigerated Truck",
      description:
        "Temperature-controlled trucks for perishable goods and sensitive cargo.",
      image:
        "https://images.unsplash.com/photo-1599819055800-d9b7a6a4f8b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Flatbed Truck",
      description:
        "Perfect for transporting oversized loads and heavy machinery.",
      image:
        "https://images.unsplash.com/photo-1588334257834-b6a73f04dff3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Corporate Fleet",
      description:
        "Custom fleet rental packages for businesses with ongoing transport needs.",
      image:
        "https://images.unsplash.com/photo-1610641818983-b8d89c03e9d7?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
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
                  className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
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
