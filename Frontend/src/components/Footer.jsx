import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FF003C] text-white px-6 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2 md:mb-4">Pepper</h1>
          <p className="mb-2">
            123 Pizza St.<br />
            Manhattan, New York, NY 10001<br />
            United States
          </p>
          <p className="mb-1">contact@pepper.pizza</p>
          <p className="mb-2 md:mb-4">delivery@pepper.pizza</p>
        </div>

        {/* Column 2: Menu */}
        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 md:mb-4">Menu</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Our Menu</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 md:mb-4">Useful</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Refunds & Cancellation</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 md:mb-4">Social</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
            <li><a href="#" className="hover:underline">Youtube</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-sm text-white border-t border-white/20 pt-6 text-center md:text-left max-w-6xl mx-auto">
        <p>
          © 2025 made by <span className="font-semibold">Aman</span> with <span className="text-lg">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
