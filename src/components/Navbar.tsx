"use client";

import { Config } from "@/types/config.interface";
import Image from "next/image";
import Link from "next/link";

export const Navbar = ({ config }: { config: Config }) => {
  return (
    <nav className="border-b border-gray-800 bg-gray-950 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden border border-gray-700 rounded-sm bg-gray-900 shrink-0">
            <Image
              src="/logo.jpeg"
              alt="AWS Student Builder Group Logo"
              fill
              sizes="(max-width: 640px) 32px, 40px"
              className="object-cover"
            />
          </div>
          <span className="font-bold text-sm sm:text-lg tracking-tight text-gray-100 uppercase line-clamp-1">
            {config.club_name}
          </span>
        </div>
        <div className="shrink-0 pl-2">
          <Link
            href={config.hero.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-400 hover:text-violet-400 transition-colors"
          >
            Join Community
          </Link>
        </div>
      </div>
    </nav>
  );
}