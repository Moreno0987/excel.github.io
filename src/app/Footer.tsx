import React from 'react';

const Footer: React.FC = () => {
    return (

      <>
      {/* Footer Section */}
    <footer className="bg-gray-900 text-white py-6 mt-16">
   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-40">
    
    {/* Logo di kiri */}
    <div className="flex items-center gap-2">
      <span className="bg-purple-600 text-white p-3 rounded-full">B</span>
      <p className="text-lg font-bold">Brooklyn</p>
    </div>

    {/* Menu navigasi di tengah */}
    <div className="flex justify-center gap-6 text-gray-400 text-sm">
      {["Home", "About", "Services", "Process", "Portfolio", "Blog", "Contact"].map((link, index) => (
        <a key={index} href="#" className="hover:text-white transition">{link}</a>
      ))}
    </div>

    {/* Copyright di kanan */}
    <p className="text-gray-400 text-sm text-right">Copyright © 2022 Picto.</p>

  </div>
</footer>

      </>

      );
    }
    
    export default Footer;