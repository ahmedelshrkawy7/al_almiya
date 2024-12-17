"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { Menu, X } from "lucide-react"; // Icons for menu toggle
import assets from "@/components/imports";
import { Button } from "@/components/ui/button";
import { useMyContext } from "@/context/DataContext";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setLanguage } = useMyContext();
  console.log("🚀 ~ Nav ~ setLang:", setLanguage);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang == "ar") {
      localStorage.setItem("lang", "en");
       setLanguage("en");
    } else {
      localStorage.setItem("lang", "ar");
    }
  };

  return (
    <nav className=" shadow-md bg-Bgblue">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={assets.logo} alt="Logo" width={71} height={37} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white">
            الرئيسية
          </Link>
          <Link href="/services" className="text-white">
            خدمات
          </Link>
          <Link href="/about" className="text-white">
            من نحن
          </Link>
          <Link href="/contact" className="text-white">
            تواصل معانا
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Button
            variant="outline"
            className="p-3 border border-gray-200 rounded-lg  text-white"
          >
            <FaRegBell size={22} />
          </Button>
          <Button
            variant="outline"
            className="p-3 border border-gray-200 rounded-lg text-white"
          >
            <CiUser size={22} />
          </Button>
          <div
            className="flex items-center gap-2 text-white"
            onClick={handleLang}
          >
            <span>EN</span>
            <GrLanguage size={22} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              href="/"
              className="text-lg hover:text-blue-500"
              onClick={toggleMenu}
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              className="text-lg hover:text-blue-500"
              onClick={toggleMenu}
            >
              خدمات
            </Link>
            <Link
              href="/about"
              className="text-lg hover:text-blue-500"
              onClick={toggleMenu}
            >
              من نحن
            </Link>
            <Link
              href="/contact"
              className="text-lg hover:text-blue-500"
              onClick={toggleMenu}
            >
              تواصل معانا
            </Link>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="p-3 border border-gray-200 rounded-lg"
              >
                <FaRegBell size={22} />
              </Button>
              <Button
                variant="outline"
                className="p-3 border border-gray-200 rounded-lg"
              >
                <CiUser size={22} />
              </Button>
              <div className="flex items-center gap-2">
                {/* <span>{lang}</span> */}
                <GrLanguage size={22} />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
