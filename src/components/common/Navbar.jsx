import { useState } from "react";
import { Menu, X, Truck } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/contact");
  };
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 text-white font-bold text-xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Truck size={28} className="text-yellow-300" />
            Transcan<span className="text-yellow-300">Rentals</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* <button
              onClick={handleClick}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Book Now
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black shadow-lg px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block transition ${
                location.pathname === link.path
                  ? "text-red-500 font-semibold"
                  : "text-gray-300 hover:text-red-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
