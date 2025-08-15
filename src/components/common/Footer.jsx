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
      <footer className="bg-black text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Transcan<span className="text-red-500">Rentals</span>
            </h2>
            <p className="text-sm">
              Reliable truck rentals across Canada. Affordable rates,
              professional service, and on-time delivery for all your transport
              needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-red-500 transition">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-red-500" /> +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-red-500" />{" "}
                info@transcanrentals.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-red-500" /> 8500 84 St SE,
                Calgary, AB T2C3W5
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-red-500 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200"></div>

        {/* Bottom Bar */}
        <div className="bg-black text-white text-center py-2 text-sm">
          © {new Date().getFullYear()} TranscanRentals. All rights reserved.
        </div>
        <div className="bg-black text-white text-center py-2 text-sm">
          Powered by{" "}
          <span className="font-semibold text-red-600">Greekology</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
