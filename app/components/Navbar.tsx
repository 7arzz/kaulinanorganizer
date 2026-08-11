'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#programs', label: 'Program' },
    { href: '#pricing', label: 'Paket & Harga' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#testimonials', label: 'Testimoni' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="w-full max-w-screen-xl mx-auto px-8 xl:px-12 h-16 flex items-center justify-between gap-6">

          {/* Logo + Brand name */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Kaulinan Organizer"
              width={44}
              height={44}
              className="h-10 w-10 rounded-full object-contain ring-2 ring-[#B51217]/20"
              priority
            />
            <span className="hidden sm:block text-[13px] font-extrabold text-gray-800 leading-tight tracking-wide">
              KAULINAN<br />
              <span className="text-[#B51217]">ORGANIZER</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] font-semibold text-gray-600 hover:text-[#B51217] transition-colors duration-200 whitespace-nowrap relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#B51217] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/6281384071500"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#B51217] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shrink-0 transition-all duration-300 hover:bg-[#8f0e13] hover:shadow-[0_4px_20px_rgba(181,18,23,0.4)] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_2px_10px_rgba(181,18,23,0.25)]"
          >
            <MessageCircle size={15} strokeWidth={2.5} />
            Konsultasi Gratis
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Buka menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-[998] lg:hidden" onClick={close} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-[999] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="h-9 w-9 rounded-full object-contain" />
            <span className="text-sm font-extrabold text-gray-800 leading-tight">
              KAULINAN<br /><span className="text-[#B51217]">ORGANIZER</span>
            </span>
          </div>
          <button onClick={close} className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 py-6 gap-1 flex-1 overflow-y-auto">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-2.5 px-3 text-sm font-semibold text-gray-700 hover:text-[#B51217] hover:bg-red-50 rounded-md transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-8">
          <a
            href="https://wa.me/6281384071500"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full bg-[#B51217] hover:bg-[#8f0e13] text-white py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-[0_4px_16px_rgba(181,18,23,0.35)]"
          >
            <MessageCircle size={16} strokeWidth={2.5} />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </>
  );
}
