"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-leather-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-2xl shadow-md">
            <span aria-hidden>🥾</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-brand-cream tracking-wide">
              Boot Scootin&apos; Andover
            </h1>
            <p className="text-xs text-brand-light uppercase tracking-widest">
              Line Dancing · Hampshire
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-brand-cream hover:text-brand-gold transition">
            Home
          </a>
          <a href="/about" className="text-brand-cream hover:text-brand-gold transition">
            About
          </a>
          <a href="/classes" className="text-brand-cream hover:text-brand-gold transition">
            Classes
          </a>
          <a
            href="/contact"
            className="bg-brand-gold text-brand-dark px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Get in Touch
          </a>
        </nav>

        <button
          className="md:hidden text-brand-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-brand-medium px-4 pb-4 flex flex-col gap-3">
          <a href="/" className="text-brand-cream hover:text-brand-gold py-2" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="text-brand-cream hover:text-brand-gold py-2" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/classes" className="text-brand-cream hover:text-brand-gold py-2" onClick={() => setMenuOpen(false)}>
            Classes
          </a>
          <a
            href="/contact"
            className="bg-brand-gold text-brand-dark px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}
