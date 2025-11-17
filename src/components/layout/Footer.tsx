"use client";

import React from "react";
import Link from "next/link";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12">
      <div className="max-w-xl border-3 border-black/20 border-b-0 border-dashed rounded-t-4xl mx-auto p-6 flex flex-col gap-4">
        
        {/* Top Row: Logo + Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <LuBrainCircuit className="text-4xl text-sky-400 transform transition duration-500 group-hover:rotate-12 animate-pulse" />
            <span className="text-xl font-[Lalezar] text-gray-700 dark:text-slate-200 transition-colors duration-300 group-hover:text-sky-500">
              باباهوش
            </span>
          </Link>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {[{
              href: "https://www.instagram.com/mohamadhoseinkhademal", icon: FiInstagram
            },{
              href: "https://x.com/khadem_mh", icon: FiTwitter
            },{
              href: "https://github.com/khadem-mh", icon: FiGithub
            },{
              href: "https://www.linkedin.com/in/khadem-mh", icon: FiLinkedin
            }].map(({href, icon: Icon}, idx) => (
              <a 
                key={idx} 
                href={href} 
                className="p-1.5 rounded-md bg-black/80 hover:text-white text-sky-300 transition transform hover:-translate-y-0.5 hover:scale-105"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent dark:via-slate-700" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© {currentYear} باباهوش — همه حقوق محفوظ است.</span>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-sky-500 transition">
            بالای صفحه <FiArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
