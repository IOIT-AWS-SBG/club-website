"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Config } from "@/types/config.interface";

export const Navbar = ({
  config,
}: {
  config: Config;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-800 bg-gray-950 font-mono">

      {/* ========================================================= */}
      {/* MAIN NAVBAR */}
      {/* ========================================================= */}

      <div className="w-full max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* BRAND */}

        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 min-w-0"
        >

          <div className="relative w-8 h-8 overflow-hidden border border-gray-700 bg-gray-900 shrink-0">

            <Image
              src="/logo.jpeg"
              alt="AWS Student Builder Group Logo"
              fill
              sizes="32px"
              className="object-cover"
            />

          </div>

          <span className="font-bold text-xs sm:text-sm tracking-widest text-gray-100 uppercase truncate max-w-45 sm:max-w-none">
            {config.club_name}
          </span>

        </Link>


        {/* ======================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ======================================================= */}

        <div className="hidden md:flex items-center gap-2">

          <Link
            href="/"
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-100 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/members"
            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-100 transition-colors"
          >
            Members
          </Link>

          <Link
            href={config.hero.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold uppercase tracking-widest border border-violet-600 transition-colors"
          >
            Join Community
          </Link>

        </div>


        {/* ======================================================= */}
        {/* MOBILE BURGER */}
        {/* ======================================================= */}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center border border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-violet-500 transition-colors shrink-0"
        >

          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}

        </button>

      </div>


      {/* ========================================================= */}
      {/* MOBILE MENU */}
      {/* ========================================================= */}

      <div
        className={`md:hidden border-t border-gray-800 bg-gray-950 overflow-hidden transition-all duration-200 ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >

        <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">

          {/* Home */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-4 py-4 border border-gray-800 bg-gray-900 text-gray-300 hover:border-violet-500 hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Home
            </span>

            <span className="text-violet-500 text-xs">
              01
            </span>
          </Link>


          {/* Members */}

          <Link
            href="/members"
            onClick={closeMenu}
            className="flex items-center justify-between w-full px-4 py-4 border border-gray-800 bg-gray-900 text-gray-300 hover:border-violet-500 hover:text-white transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Members
            </span>

            <span className="text-violet-500 text-xs">
              02
            </span>
          </Link>


          {/* Join Community */}

          <Link
            href={config.hero.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center w-full px-4 py-4 bg-violet-600 hover:bg-violet-700 text-white border border-violet-600 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Join Community
          </Link>

        </div>

      </div>

    </nav>
  );
};