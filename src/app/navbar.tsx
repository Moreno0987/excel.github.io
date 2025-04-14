"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Animasi
import { FiMenu, FiX } from "react-icons/fi"; // Ikon Hamburger dan Close
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk smooth scrolling ke section yang dituju
  const handleScroll = (id: string, event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault(); // Mencegah perilaku default
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Tutup menu setelah klik di mode mobile
    }
  };
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full top-0 z-50"
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center text-xl font-bold rounded-full">
          B
        </div>
        <span className="text-xl font-semibold text-gray-900">Brooklyn</span>
      </div>
      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        {[
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Process", id: "process" },
          { name: "Portfolio", id: "portfolio" },
          { name: "Blog", id: "blog" },
          { name: "Services", id: "services" },
        ].map(({ name, id }) => (
          <li key={id}>
            <button
              onClick={(e) => handleScroll(id, e)}
              className="relative group text-gray-700 hover:text-purple-600 transition"
            >
              {name}
              {/* Underline Hover Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-purple-600 transition-all group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>
      {/* Contact Button */}
      <button
        onClick={(e) => handleScroll("contact", e)}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition transform hover:scale-105"
      >
        Contact
      </button>
      {/* Hamburger Menu Button - Mobile */}
      <button
        className="block md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Process", id: "process" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Blog", id: "blog" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" },
          ].map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={(e) => handleScroll(id, e)}
                className="text-gray-700 text-lg hover:text-purple-600"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
