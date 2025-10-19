import React from 'react';
import { Link } from 'react-router-dom'; // or `next/link` if using Next.js
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#072c5c] text-white py-10 px-6">
      <div className="max-w-7xl mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-[#5f91d3] font-semibold mb-2">Kids Reading</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline font-bold">About us</Link></li>
            <li><Link to="/library" className="hover:underline font-bold">Library</Link></li>
            <li><Link to="/pricing" className="hover:underline font-bold">Pricing</Link></li>
            <li><Link to="#" className="hover:underline font-bold">Blog</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[#5f91d3] font-semibold mb-2">Help</h3>
          <ul className="space-y-1">
            <li><Link to="/support" className="hover:underline font-bold">Support & FAQ</Link></li>
            <li><Link to="/terms" className="hover:underline font-bold">Terms of service</Link></li>
            <li><Link to="/privacy" className="hover:underline font-bold">Privacy</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[#5f91d3] font-semibold mb-2">Social Media</h3>
          <div className="flex space-x-4 text-2xl mt-2">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-400 my-6" />

      {/* Bottom Links */}
      <div className="text-center text-sm flex flex-wrap justify-center gap-6 text-gray-200">
        <span>Copyright</span>
        <Link to="/terms" className="hover:underline">Terms of service</Link>
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/patent" className="hover:underline">PatentPatent</Link>
      </div>
    </footer>
  );
};

export default Footer;
