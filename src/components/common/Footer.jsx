import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-600 border-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="text-gray-600">Transcan</span>{" "}
              <span className="text-yellow-400">Rentals</span>
            </h2>
            <p className="text-sm">
              Reliable truck rentals across Canada. Affordable rates,
              professional service, and on-time delivery for all your transport
              needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-yellow-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-yellow-500 transition">
                  Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              {/* <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-500" /> +1 234 567 890
              </li> */}
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-yellow-400" />{" "}
                info@transcanrentals.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-yellow-400" /> 8500 84 St SE,
                Calgary, AB T2C 3W5
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/transcanrentals" className="hover:text-red-500 transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/transcanrentals/" className="hover:text-red-500 transition">
                <Instagram size={20} />
              </a>
               <a href="https://x.com/TranscanRentals" className="hover:text-red-500 transition">
                {/* X Logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.348-7.01L3.5 22H1l7.02-8.02L2 2h6.92l4.86 6.42L18.244 2zm-2.396 18h1.88L8.26 3.9H6.24L15.848 20z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>
      </footer>
      {/* Bottom Bar */}
      <div className="bg-white text-gray-600 text-center py-5 text-sm">
        © {new Date().getFullYear()} TranscanRentals. All rights reserved.
        <p>
          Powered by{" "}
          <span className="font-semibold text-yellow-500">Greekology</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
