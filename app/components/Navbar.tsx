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

          {/* Logo + Brand name + Prototype Badge */}
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="flex items-center gap-3">
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
            
            {/* Prototype Indicator */}
            <div className="hidden md:flex px-2 py-0.5 bg-gray-50 text-gray-400 rounded text-[9px] font-bold tracking-widest border border-gray-200 uppercase whitespace-nowrap">
              Prototype by 7arzzStore
            </div>
          </div>

          {/* Desktop links — each link is its own group; no wrapper-group that could bleed into CTA */}
          <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-semibold text-gray-600 hover:text-[#B51217] transition-colors duration-200 whitespace-nowrap py-1"
              >
                {l.label}
                {/* underline scoped only inside this individual Link */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#B51217] transition-[width] duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA — sibling to nav links, no shared group context */}
          <a
            href="https://wa.me/6281384071500"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-[#B51217] hover:bg-[#8f0e13] text-white font-bold text-[13px] whitespace-nowrap shrink-0 rounded-full px-5 py-[9px] shadow-[0_2px_10px_rgba(181,18,23,0.25)] hover:shadow-[0_4px_20px_rgba(181,18,23,0.4)] hover:-translate-y-px transition-all duration-200 leading-none"
          >
            <MessageCircle size={15} strokeWidth={2.5} className="shrink-0" />
            <span>Konsultasi Gratis</span>
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
