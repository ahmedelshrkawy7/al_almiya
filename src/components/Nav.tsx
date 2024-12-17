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

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={assets.logo} alt="Logo" width={71} height={37} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-500">
            الرئيسية
          </Link>
          <Link href="/services" className="hover:text-blue-500">
            خدمات
          </Link>
          <Link href="/about" className="hover:text-blue-500">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            تواصل معانا
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
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
                <span>EN</span>
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
