import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2">Tech Rangers</h2>
            <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>

          {/* Center Section: Quick Links */}
          <div className="flex flex-col md:flex-row mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-gray-400 mx-2">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-gray-400 mx-2">Terms of Service</a>
            <a href="#" className="text-sm hover:text-gray-400 mx-2">Contact Us</a>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex mt-4 md:mt-0 space-x-6 justify-center md:justify-end">
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-xl hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
