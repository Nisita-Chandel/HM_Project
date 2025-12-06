// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-10 px-8 py-10 text-xs md:text-sm">
      <div className="max-w-6xl mx-auto">
        {/* Top section: 3 columns + signup */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-3 tracking-wide">Shop</h3>
            <ul className="space-y-1">
              <li>LADIES</li>
              <li>MEN</li>
              <li>KIDS</li>
              <li>HOME</li>
              <li>BEAUTY</li>
            </ul>
          </div>

          {/* Corporate Info */}
          <div>
            <h3 className="font-semibold mb-3 tracking-wide">Corporate Info</h3>
            <ul className="space-y-1">
              <li>CAREER AT H&M</li>
              <li>ABOUT H&M GROUP</li>
              <li>SUSTAINABILITY H&M GROUP</li>
              <li>PRESS</li>
              <li>INVESTOR RELATIONS</li>
              <li>CORPORATE GOVERNANCE</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-3 tracking-wide">Help</h3>
            <ul className="space-y-1">
              <li>CUSTOMER SERVICE</li>
              <li>MY H&M</li>
              <li>FIND A STORE</li>
              <li>LEGAL &amp; PRIVACY</li>
              <li>CONTACT</li>
              <li>SECURE SHOPPING</li>
              <li>COOKIE NOTICE</li>
              <li>COOKIE SETTINGS</li>
            </ul>
          </div>

          {/* Signup text */}
          <div className="md:text-right">
            <p className="mb-2">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news &amp; style tips!
            </p>
            <button className="underline text-xs md:text-sm">
              READ MORE
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray-200 pt-6">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-bold tracking-widest">H&amp;M</div>
            <div className="flex items-center gap-2">
              <span>INDIA (Rs.)</span>
              <button className="underline">CHANGE REGION</button>
            </div>
            <p className="text-[10px] leading-snug max-w-lg">
              The content of this site is copyright-protected and is the
              property of H &amp; M Hennes &amp; Mauritz AB.
            </p>
          </div>

          {/* Right – social icons (simple circles, you can replace with real icons) */}
          <div className="flex items-center gap-3 self-start md:self-auto">
          <i className="ri-instagram-line text-xl hover:text-gray-700 cursor-pointer"></i>
          <i className="ri-music-line text-xl hover:text-gray-700 cursor-pointer"></i>
          <i className="ri-spotify-fill text-xl hover:text-gray-700 cursor-pointer"></i>
          <i className="ri-youtube-fill text-xl hover:text-gray-700 cursor-pointer"></i>
          <i className="ri-pinterest-fill text-xl hover:text-gray-700 cursor-pointer"></i>
          <i className="ri-facebook-box-fill text-xl hover:text-gray-700 cursor-pointer"></i>
           
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
