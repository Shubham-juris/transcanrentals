// import React from "react";
// import { motion } from "framer-motion";

// export default function Services() {
//   const services = [
//     {
//       title: "Local Truck Rentals",
//       description:
//         "Perfect for short-distance moves and city deliveries. Affordable rates and flexible booking.",
//       icon: "🚚",
//     },
//     {
//       title: "Long-Haul Truck Rentals",
//       description:
//         "Reliable trucks for cross-country deliveries with comfort and safety in mind.",
//       icon: "🛣️",
//     },
//     {
//       title: "Refrigerated Truck Rentals",
//       description:
//         "Keep your goods fresh with our temperature-controlled truck options.",
//       icon: "❄️",
//     },
//     {
//       title: "Heavy-Duty Truck Rentals",
//       description:
//         "Powerful trucks for transporting heavy machinery and large cargo loads.",
//       icon: "🏗️",
//     },
//     {
//       title: "Corporate Fleet Solutions",
//       description:
//         "Custom rental packages for businesses with ongoing transport needs.",
//       icon: "🏢",
//     },
//     {
//       title: "24/7 Roadside Assistance",
//       description:
//         "Peace of mind with round-the-clock roadside support for all our rentals.",
//       icon: "🛠️",
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <motion.h1
//           className="text-4xl font-bold text-yellow-300 mb-6 text-center"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Our Services
//         </motion.h1>

//         <motion.p
//           className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           At <span className="font-semibold">TranscanRentals</span>, we offer a
//           wide range of truck rental services tailored to meet your specific
//           transportation needs.
//         </motion.p>

//         {/* Services Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Local Truck Rentals",
      description:
        "Perfect for short-distance moves and city deliveries, our local truck rental service offers flexibility and cost-effective solutions for individuals and businesses. With easy booking options and well-maintained vehicles, we ensure smooth and efficient operations within the city.",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Long-Haul Truck Rentals",
      description:
        "Designed for long-distance transportation, our long-haul trucks provide reliability, comfort, and performance for cross-country deliveries. Ideal for businesses handling large-scale logistics, these vehicles are equipped to ensure safe and timely transport.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGvVxIlkNDcv5sqSlGKtGLxd_oP9E6-xrvA&s",
    },
    {
      title: "Refrigerated Truck Rentals",
      description:
        "Maintain the quality and freshness of your temperature-sensitive goods with our refrigerated truck options. Suitable for food, pharmaceuticals, and other perishable items, these trucks are designed for precise temperature control and reliable delivery.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Heavy-Duty Truck Rentals",
      description:
        "Built for strength and performance, our heavy-duty trucks are ideal for transporting large equipment, construction materials, and oversized cargo. These vehicles provide the durability and power required for demanding operations.",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Corporate Fleet Solutions",
      description:
        "We offer customized fleet rental solutions tailored to business needs. Whether you require multiple vehicles or long-term rental agreements, our services ensure efficiency, cost control, and reliable fleet management for your operations.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy50NkGtjjDP1kLWM02cREnvcKGrMTdT5Epw&s",
    },
    {
      title: "24/7 Roadside Assistance",
      description:
        "Our support team is available around the clock to ensure your journey remains uninterrupted. From breakdowns to emergency situations, we provide quick and dependable roadside assistance for all rentals.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9LCGPUYA-1YoE9_MONkxiHoYpZeGM8c-2g&s",
    },
    {
      title: "Commercial Property Rentals",
      description:
        "We provide commercial spaces suitable for businesses, logistics operations, and storage needs. Our properties are strategically located to support operational efficiency and business growth, offering flexible rental options.",
      image:
        "https://www.idealease.com/sites/default/files/styles/featured_image_2_1/public/images/idlsrh_onhighway8x4small_web.jpg?itok=izakVCNQ",
    },
    {
      title: "Residential Property Rentals",
      description:
        "Our residential rental services offer comfortable and convenient living spaces for individuals and families. Whether for short-term or long-term stays, we provide well-maintained properties to meet your accommodation needs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXNe5HaZo8rWaZbp49BHByBsLnQnzJPi3jQ&s",
    },
    {
      title: "Trailer & Storage Services",
      description:
        "Secure and accessible storage solutions for trailers, equipment, and goods. Our facilities are designed to support both short-term and long-term storage requirements with safety and convenience in mind.",
      image:
        "https://thumbs.dreamstime.com/b/semi-trailer-trucks-parking-lot-warehouse-port-shipping-cargo-container-loading-goods-dock-distribution-big-rig-freight-446566564.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-lg mb-6">
            Reliable rental solutions designed to support your transportation,
            storage, and property needs — all in one place.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Book Now
          </Link>
        </motion.div>
      </section>

      {/* SERVICES SECTIONS */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center mb-20 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image */}
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <motion.div
          className="max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Looking for the Right Rental Solution?
          </h2>
          <p className="text-gray-300 mb-6">
            Contact our team today to discuss your requirements and get a
            customized rental plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
