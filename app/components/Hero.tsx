import React from 'react';
import { Check } from 'lucide-react';

export default function Hero() {
  const waMessage = encodeURIComponent("Halo Kaulinan Organizer, saya ingin konsultasi mengenai program corporate event. Bisa dibantu?");
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed py-24 px-8 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111e6] to-[#1f1f1fb3] z-[1]"></div>
      <div className="relative z-[2] max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight mb-6 animate-[fadeUp_0.8s_ease-out_forwards]">
          Bangun Tim Lebih Solid.<br />
          <span className="text-[var(--color-primary)]">
            Ciptakan Pengalaman yang Berkesan.
          </span>
        </h1>
        <p className="text-lg md:text-xl font-light text-[#E0E0E0] mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.2s]">
          Kaulinan Organizer membantu perusahaan menciptakan program Corporate
          Gathering, Team Building, Outbound, dan Employee Refreshment yang
          terstruktur, seru, dan berdampak.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.4s]">
          <a
            href={`https://wa.me/6281384071500?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-[1.1rem] font-bold rounded-full transition-all duration-300 inline-block no-underline bg-[var(--color-primary)] text-white border-2 border-[var(--color-primary)] shadow-[0_10px_20px_rgba(181,18,23,0.3)] hover:bg-white hover:text-[var(--color-primary)] hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(255,255,255,0.3)]"
          >
            Konsultasi Gratis
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 text-[1.1rem] font-bold rounded-full transition-all duration-300 inline-block no-underline bg-transparent text-white border-2 border-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:text-white hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(181,18,23,0.3)]">
            Lihat Program
          </a>
        </div>
        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap text-sm sm:text-[0.95rem] font-medium text-white/80 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.6s]">
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--color-primary)]" /> Professional Organizer</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--color-primary)]" /> Corporate Event Specialist</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--color-primary)]" /> Custom Program</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--color-primary)]" /> Konsultasi Gratis</span>
        </div>
      </div>
    </section>
  );
}
