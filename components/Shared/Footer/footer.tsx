"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#393a39] text-white py-8 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">My Dashboard</h2>
          <p className="text-sm text-gray-300 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>



        {/* Middle - Links */}
        <div className="flex space-x-6 text-sm">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          <a href="/profile" className="hover:text-gray-300 transition-colors">
            Profile
          </a>
          <a href="/posts" className="hover:text-gray-300 transition-colors">
            Posts
          </a>
          <a href="/users" className="hover:text-gray-300 transition-colors">
            Users
          </a>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex space-x-5">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a3.5 3.5 0 0 1 3.7-3.9c1 0 2 .2 2 .2v2.3H15c-1.2 0-1.5.8-1.5 1.6V12H17l-.5 3h-3v7A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.6 7.2c.01.2.01.4.01.6 0 6-4.6 12.9-12.9 12.9-2.6 0-5-.7-7-2a9.1 9.1 0 0 0 6.7-1.9 4.5 4.5 0 0 1-4.2-3.1c.3.1.6.1.9.1.4 0 .8-.1 1.2-.2a4.5 4.5 0 0 1-3.6-4.4v-.1c.6.3 1.2.5 1.9.5a4.5 4.5 0 0 1-2-3.8c0-.8.2-1.5.6-2.1a12.8 12.8 0 0 0 9.3 4.7 5.1 5.1 0 0 1-.1-1 4.5 4.5 0 0 1 7.9-3 8.9 8.9 0 0 0 2.9-1.1 4.5 4.5 0 0 1-2 2.5 9 9 0 0 0 2.6-.7 9.5 9.5 0 0 1-2.3 2.4Z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.6h.1a4.1 4.1 0 0 1 3.7-2c3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.5c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21h-4V9Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
