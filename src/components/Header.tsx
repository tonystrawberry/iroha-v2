"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "私たちについて" },
  { href: "#services", label: "サービス紹介" },
  { href: "#news", label: "ニュース" },
  { href: "#ceo", label: "代表メッセージ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-mint-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 blob" style={{ background: "linear-gradient(135deg, #7ecfb5, #f5a8a8)" }} />
          <span className="font-bold text-lg tracking-widest text-foreground">IROHA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-mint-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <span className="w-6 h-0.5 bg-gray-700 block" />
              <span className="w-6 h-0.5 bg-gray-700 block" />
              <span className="w-4 h-0.5 bg-gray-700 block" />
            </>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-mint-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-700 hover:text-mint-500 py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
