import React from 'react';
import { MapPin, Phone, Camera } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const navLinks = [
    { href: '#about', label: 'Tentang Kami' },
    { href: '#programs', label: 'Program' },
    { href: '#pricing', label: 'Paket & Harga' },
    { href: '#gallery', label: 'Galeri' },
    { href: '#faq', label: 'FAQ' },
  ];

  const services = [
    'Corporate Gathering',
    'Team Building',
    'Outbound',
    'Amazing Race',
    'Employee Refreshment',
  ];

  return (
    <footer className="bg-[#111] text-[#B0B0B0]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-28 sm:pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-8">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.jpg"
              alt="Kaulinan Organizer"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-white p-[2px] shrink-0"
            />
            <div className="text-[13px] font-extrabold text-white leading-tight tracking-wide">
              KAULINAN<br />
              <span className="text-[#B51217]">ORGANIZER</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            Partner strategis perusahaan Anda dalam merancang program team building, gathering, outbound, dan event korporat yang bermakna.
          </p>
          {/* Contact info */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-sm">
              <MapPin size={15} className="text-[#B51217] shrink-0" />
              <span>JKT • BGR • BDG • Indonesia</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Phone size={15} className="text-[#B51217] shrink-0" />
              <span>0813-8407-1500</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <Camera size={15} className="text-[#B51217] shrink-0" />
              <span>@kaulinanorganizer</span>
            </div>
          </div>
        </div>

        {/* Navigasi */}
        <div>
          <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-widest">Navigasi</h4>
          <ul className="space-y-3">
            {navLinks.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-[#B0B0B0] hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-widest">Layanan</h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s} className="text-sm text-[#B0B0B0]">{s}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="text-white text-xs font-bold mb-5 uppercase tracking-widest">Hubungi Kami</h4>
          <p className="text-sm mb-6 leading-relaxed">
            Konsultasikan kebutuhan event perusahaan Anda dengan tim kami secara gratis.
          </p>
          <a
            href="https://wa.me/6281384071500"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-5 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {/* WhatsApp SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#555]">
          <span>© 2026 Kaulinan Organizer. All Rights Reserved.</span>
          <span>Corporate Events & Team Building Specialist</span>
        </div>
      </div>
    </footer>
  );
}
