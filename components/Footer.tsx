"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accent py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Description */}
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">Travel Agency change this</p>
          <p className="text-gray-400">Join us in elevating the standards of the hospitality industry.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://www.facebook.com/theedgemaldives/" target="_blank" className="text-white hover:text-gray-300">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" className="text-white hover:text-gray-300">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://www.instagram.com/theedge.mv?igsh=YmJleTF3cW43NnVv" target="_blank" className="text-white hover:text-gray-300">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://www.tiktok.com" target="_blank" className="text-white hover:text-gray-300">
            <FaTiktok size={20} />
          </Link>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} Ostrovs Travellers. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer