"use client";

import { Config } from "@/types/config.interface";
import Image from "next/image";
import Link from "next/link";

export const Navbar = ({ config }: { config: Config }) => {
  return (
    <nav className="border-b border-gray-800 bg-gray-950 fixed w-full z-50 font-mono">
      <div className="max-w-7xl mx-auto flex items-stretch justify-between h-16 relative">
       
        <div className="flex items-center gap-4 pl-4 md:pl-20">
          <div className="relative w-8 h-8 overflow-hidden border border-gray-700 bg-gray-900 shrink-0 rounded-none">
            <Image
              src="/logo.jpeg"
              alt="AWS Student Builder Group Logo"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="font-bold text-sm sm:text-base tracking-widest text-gray-100 uppercase">
            {config.club_name}
          </span>
        </div>
        
      <div className="flex h-full items-center pr-4 md:pr-6">
  <Link
    href={config.hero.whatsapp_link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-5 py-2 bg-violet-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-violet-700 transition-colors"
  >
    Join Community
  </Link>
</div>
      </div>
    </nav>
  );
}