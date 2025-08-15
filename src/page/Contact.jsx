import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-red-500 mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12"
        >
          Have questions or need a custom quote? We’re here to help! Fill out
          the form or reach us directly through the details below.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+1 (___) ___-____"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              We’re available Monday to Saturday, 9 AM - 6 PM. Feel free to
              contact us anytime.
            </p>

            <div className="space-y-4">
              <p>
                <strong className="text-gray-800">📍 Address:</strong>
                <span> 8500 84 St SE, Calgary, AB T2C 3W5</span>
              </p>
              {/* <p>
                <strong className="text-gray-800">📞 Phone:</strong>
                <span> +1 (234) 567-8901</span>
              </p> */}
              <p>
                <strong className="text-gray-800">📧 Email:</strong>
                <span> info@transcanrentals.com</span>
              </p>
            </div>

            {/* Updated Google Map for Calgary address */}
            <iframe
              title="map"
              className="mt-6 rounded-lg w-full h-64 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25153.276987437254!2d-114.0010118!3d50.97673485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717023e0b0e7a9%3A0x6f2fcb2b54bb1df1!2s8500%2084%20St%20SE%2C%20Calgary%2C%20AB%20T2C%203W5%2C%20Canada!5e0!3m2!1sen!2sca!4v1692180984032!5m2!1sen!2sca"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
