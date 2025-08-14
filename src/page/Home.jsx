import HomeHeroImg from "../assets/home/HomeHerorImg6.jpg";
import { Truck, Clock, DollarSign, Shield } from "lucide-react";
import minitruck from "../assets/home/HomeHeroImg.jpg";
import boxtruck from "../assets/home/HomeHeroImg4.jpg";
import heavytruk from "../assets/home/HomeHerorImg5.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const services = [
    {
      icon: <Truck size={40} className="text-red-500 mb-4" />,
      title: "Wide Range of Trucks",
      desc: "From mini trucks to heavy-duty transport vehicles.",
    },
    {
      icon: <Clock size={40} className="text-red-500 mb-4" />,
      title: "On-Time Delivery",
      desc: "We ensure timely service for all your logistics needs.",
    },
    {
      icon: <DollarSign size={40} className="text-red-500 mb-4" />,
      title: "Affordable Rates",
      desc: "Best pricing without compromising quality.",
    },
    {
      icon: <Shield size={40} className="text-red-500 mb-4" />,
      title: "Safe & Secure",
      desc: "Fully insured trucks for worry-free rentals.",
    },
  ];

  const fleet = [
    { name: "Mini Truck", img: minitruck },
    { name: "Box Truck", img: boxtruck },
    { name: "Heavy Duty", img: heavytruk },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-white h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${HomeHeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-1 bg-black/60"></div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Reliable <span className="text-red-500">Truck Rentals</span> Across
            Canada
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Affordable rates, professional service, and on-time delivery for all
            your transport needs.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("fleet")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg transition"
          >
            Book Your Truck Now
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose <span className="text-red-500">Us?</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {service.icon}
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our <span className="text-red-500">Fleet</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((truck, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={truck.img}
                  alt={truck.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{truck.name}</h3>
                  <p className="text-gray-600">
                    Perfect for all your transport needs.
                  </p>
                  <button
                    onClick={handleClick}
                    className="mt-3 inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Rent Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
