// components/Footer.jsx
"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import StartTheConversation from "./StartTheConversation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  // Don't show footer on the main page
  if (pathname === "/") return null;
  return (
    <footer className="bg-black text-white pt-20 pb-10 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
          Partner with us to achieve your goals
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl mb-10">
          Whether you have a challenge to solve or a goal to reach,{" "}
          <br className="hidden sm:inline" />
          we can design solutions for your needs
        </p>

        {/* Call to Action Circle */}
        <div className="flex justify-center mb-14">
          <StartTheConversation />
        </div>

        {/* Bottom Sections */}
      </div>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center border-b-2 border-dashed border-[#2D2D2D] pb-10">
        {/* Business Enquiries Box */}
        <div className="border border-[#2D2D2D] rounded-xl h-32  w-80 lg:w-[450px] text-center">
          <p className="text-gray-400 text-sm mb-3 mt-4">
            Business Enquiries
          </p>

          {/* Contact Info Hover Section */}
          <div className="relative group mx-auto h-[62%] overflow-hidden rounded-b-xl flex items-center justify-center cursor-pointer">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#582777]  to-[#212274] transform -translate-x-full group-hover:translate-x-0 transition duration-500 ease-in-out"></div>

            {/* Text Content */}
            <div className="relative z-10 flex items-center justify-center text-white text-base font-medium gap-4">
              <span>
                <a href="tel:+91 80 41966600">+91 80 41966600</a>
              </span>
              <span className="hidden lg:inline">|</span>
              <span>
                <a href="mailto:reach@ivistaz.com">reach@ivistaz.com</a>
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us Box */}
        <div className="border border-[#2D2D2D] rounded-xl px-8 lg:w-[450px] w-80 h-32 text-center ">
          <p className="text-gray-400 text-sm mb-3 mt-4">Follow Us</p>
          <div className="flex gap-4 justify-center pt-2">
            <Link
              href="https://www.instagram.com/ivistazecomservices/"
              target="_blank"
            >
              <span className="w-12 h-12 border border-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaInstagram  size={20}/>
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/people/IVistaz-Ecom-Services/61564957311627/"
              target="_blank"
            >
              <span className="w-12 h-12 border border-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaFacebookF  size={20}/>
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/company/ivistawebsolutions/mycompany/"
              target="_blank"
            >
              <span className="w-12 h-12 border border-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaLinkedinIn  size={20}/>
              </span>
            </Link>
            <Link href="https://x.com/ivistazecom" target="_blank">
              <span className="w-12 h-12 border border-[#2D2D2D] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <FaXTwitter size={20}/>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/* Copyright */}
        <p className="text-sm text-[#C1C1C1] mt-10">
          © 2025 iVistaz Ecom Services Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
