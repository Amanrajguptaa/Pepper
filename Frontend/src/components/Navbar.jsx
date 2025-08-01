import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-xs z-50 relative">
        <div>
          <Link to={'/'}>
          <span className="font-logo text-3xl text-pink-red font-bold">
            Pepper
          </span>
          </Link>
        </div>

        <div className="hidden md:flex gap-10">
          <a
            href="/"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Home
          </a>
          <a
            href="/menu"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Menu
          </a>
          <a
            href="/about"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex gap-6">
          <Button className="px-4 py-3 rounded-3xl font-semibold text-white text-md bg-red-500 hover:text-white hover:bg-red-600 transition transform duration-100 hover:scale-105">
            Order Now
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Backdrop Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-5 px-6 flex flex-col items-start gap-4 md:hidden z-50 animate-slide-down">
          <a
            href="/"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Home
          </a>
          <a
            href="/menu"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Menu
          </a>
          <a
            href="/about"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            About
          </a>
          <a
            href="/contact"
            className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
          >
            Contact
          </a>
          <button className="px-4 py-1 rounded-3xl font-semibold text-white bg-pink-red text-lg">
            Order Now
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
