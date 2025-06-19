"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/MenuItems";

const Header = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (pathname === "/") return null;


  return (
    <>
    <div className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
        <div className="flex items-center">
          <Link href="/welcome">
            <Image src="/ivista_logo.svg" width={200} height={100} alt="logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 items-center">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.pageLink ? (
                <Link
                  href={item.pageLink}
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className={`transition flex items-center gap-1 ${
                    pathname === item.pageLink
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  {item.title}
                  {item.submenu.length > 0 && (
                    <IoIosArrowDown className="text-xs" />
                  )}
                </Link>
              ) : (
                <span
                  onMouseEnter={() => setActiveMenu(index)}
                  onMouseLeave={() => setActiveMenu(null)}
                  className={`transition flex items-center gap-1 cursor-default ${
                    item.submenu.some((s) => s.pageLink === pathname)
                      ? "text-red-500"
                      : "hover:text-red-500"
                  }`}
                >
                  {item.title}
                  {item.submenu.length > 0 && (
                    <IoIosArrowDown className="text-xs" />
                  )}
                </span>
              )}

              {hasMounted && (
                <AnimatePresence>
                  {activeMenu === index && item.submenu.length > 0 && (
                    <motion.div
                      onMouseEnter={() => setActiveMenu(index)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="fixed top-16 left-0 w-full bg-white text-black z-40 shadow-lg"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 py-10">
                        <div className="space-y-2">
                          {item.submenu.slice(0, 4).map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.pageLink}
                              onClick={() => setActiveMenu(null)}
                              className={`block rounded-lg p-2 transition ${
                                pathname === sub.pageLink
                                  ? "bg-gradient-to-r from-[#BCBDFF] via-[#AFD7FF] to-[#AFD7FF]"
                                  : "hover:bg-gradient-to-r hover:from-[#BCBDFF] hover:via-[#AFD7FF] hover:to-[#AFD7FF]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                        <div className="space-y-2">
                          {item.submenu.slice(4).map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.pageLink}
                              onClick={() => setActiveMenu(null)}
                              className={`block rounded-lg p-2 transition ${
                                pathname === sub.pageLink
                                  ? "bg-gradient-to-r from-[#BCBDFF] via-[#AFD7FF] to-[#AFD7FF]"
                                  : "hover:bg-gradient-to-r hover:from-[#BCBDFF] hover:via-[#AFD7FF] hover:to-[#AFD7FF]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}

          <Link href="/case-studies">
            <button className="relative py-2 px-4 bg-white rounded-full overflow-hidden group text-black">
              <span className="absolute inset-0 bg-[#D0AC59] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
              <span className="relative z-10">Case Studies</span>
            </button>
          </Link>

          <div className="bg-[#111] p-2 rounded-full">
            <FaSearch className="text-white" />
          </div>
        </nav>

        {/* Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {hasMounted && (
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden bg-black text-white w-full px-4 py-6 space-y-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu.length > 0 ? (
                    <button
                      className="flex justify-between w-full text-left font-medium py-2"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === index ? null : index
                        )
                      }
                    >
                      <span
                        className={`${
                          pathname === item.pageLink ||
                          item.submenu.some((s) => s.pageLink === pathname)
                            ? "text-red-500"
                            : ""
                        }`}
                      >
                        {item.title}
                      </span>
                      <IoIosArrowDown />
                    </button>
                  ) : (
                    <Link
                      href={item.pageLink || "#"}
                      onClick={() => setMobileOpen(false)}
                      className={`block w-full text-left font-medium py-2 ${
                        pathname === item.pageLink
                          ? "text-red-500"
                          : "hover:text-red-600"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  <AnimatePresence initial={false}>
                    {mobileDropdown === index && item.submenu.length > 0 && (
                      <motion.div
                        key="mobile-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden pl-4 pt-2 space-y-2 text-black bg-white"
                      >
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sub.pageLink}
                            onClick={() => {
                              setMobileDropdown(null);
                              setMobileOpen(false);
                            }}
                            className={`block text-sm transition ${
                              pathname === sub.pageLink
                                ? "text-red-500"
                                : "hover:text-red-600"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/case-studies">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="relative py-2 px-4 bg-white rounded-full overflow-hidden group text-black"
                >
                  <span className="absolute inset-0 bg-[#D0AC59] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                  <span className="relative z-10">Case Studies</span>
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
    </>
  );
};

export default Header;
