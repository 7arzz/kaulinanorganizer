'use client';
import React, { useState } from 'react';
import styles from './Services.module.css';
import { X, CheckCircle2, Clock, MapPin, MessageCircle } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    { 
      id: 1, 
      title: 'Corporate Gathering', 
      desc: 'Bangun kebersamaan dan komunikasi antar anggota tim melalui gathering perusahaan yang dirancang sesuai kebutuhan.', 
      icon: '🏢',
      longDesc: 'Program gathering komprehensif yang dirancang untuk mempererat tali silaturahmi, memecah sekat antar divisi, dan me-refresh pikiran karyawan dari rutinitas kerja sehari-hari.',
      activities: ['Sesi Ice Breaking interaktif', 'Fun Team Games (Low Impact)', 'Gala Dinner / Malam Keakraban', 'Sesi Motivasi & Awarding'],
      included: ['MC & Fasilitator Berpengalaman', 'Peralatan Games & Sound System', 'Dokumentasi (Foto & Video Highlight)', 'Tim Medis P3K'],
      duration: 'Full-day (8 Jam) atau Menginap (2D1N / 3D2N)',
      location: 'Fleksibel (Hotel/Resort di Puncak, Sentul, Bandung, dll)'
    },
    { 
      id: 2, 
      title: 'Team Building', 
      desc: 'Program interaktif untuk meningkatkan teamwork, leadership, komunikasi, dan problem solving.', 
      icon: '🎯',
      longDesc: 'Didesain khusus dengan metodologi experiential learning untuk mengasah problem solving, kepemimpinan, dan komunikasi efektif dalam tim di bawah tekanan, namun tetap menyenangkan.',
      activities: ['Psychological Ice Breaking', 'Synergy Games (Medium to High Impact)', 'Trust Building & Leadership Challenge', 'Final Project & De-briefing (Evaluasi)'],
      included: ['Master Game & Trainer Tersertifikasi', 'Alat Peraga Games Eksklusif', 'Sound System Lapangan', 'Dokumentasi & Tim Medis'],
      duration: 'Half-day (4 Jam) atau Full-day (8 Jam)',
      location: 'Area Terbuka / Outbound Camp / Resort'
    },
    { 
      id: 3, 
      title: 'Outbound', 
      desc: 'Aktivitas outdoor yang menyenangkan sekaligus membangun kekompakan dan kepercayaan dalam tim.', 
      icon: '🏕️',
      longDesc: 'Petualangan luar ruang yang memacu adrenalin sekaligus membangun kekompakan. Aktivitas fisik yang terukur dipadukan dengan tantangan alam untuk membentuk mental pantang menyerah.',
      activities: ['Paintball / Archery War', 'Rafting / Arung Jeram', 'Flying Fox & High Ropes', 'Offroad / ATV Adventure'],
      included: ['Instruktur Safety Profesional', 'Peralatan Standar Keamanan Tinggi', 'Asuransi Peserta', 'Dokumentasi & Transportasi Lokal'],
      duration: 'Full-day (Mulai dari jam 08.00 - 16.00)',
      location: 'Kawasan Wisata Alam (Pangalesan, Lembang, Sukabumi)'
    },
    { 
      id: 4, 
      title: 'Employee Refreshment', 
      desc: 'Berikan pengalaman baru bagi karyawan untuk meningkatkan energi, engagement, dan semangat kerja.', 
      icon: '🔋',
      longDesc: 'Program santai yang berfokus pada kesejahteraan emosional karyawan (well-being). Tanpa beban fisik berat, murni untuk rekreasi dan mengembalikan energi positif.',
      activities: ['Wellness Session (Yoga/Meditation)', 'Creative Workshop (Art/Cooking Class)', 'City Tour / Wisata Budaya', 'Relaxing Gala Dinner'],
      included: ['Instruktur Spesialis (Yoga/Art)', 'Bahan & Perlengkapan Workshop', 'Akomodasi & Konsumsi Premium', 'Merchandise Khusus'],
      duration: 'Menginap (2D1N atau 3D2N)',
      location: 'Destinasi Wisata Pilihan (Bali, Yogyakarta, Lombok)'
    },
    { 
      id: 5, 
      title: 'Amazing Race', 
      desc: 'Permainan berbasis tantangan yang menggabungkan strategi, komunikasi, kreativitas, dan kerja sama tim.', 
      icon: '🏁',
      longDesc: 'Kompetisi seru dalam tim kecil yang harus menyelesaikan berbagai misi di pos-pos rahasia. Membutuhkan kecerdasan, kecepatan, dan kerja sama strategis untuk menjadi pemenang pertama.',
      activities: ['Clue Decoding (Pemecahan Teka-teki)', 'Challenge Posts (Tantangan Fisik & Logika)', 'Treasure Hunt', 'Final Race & Coronation'],
      included: ['Game Master & Fasilitator per Pos', 'Race Kit & Peta Clue Eksklusif', 'Properti Games & Transportasi Lokal', 'Hadiah / Medali untuk Pemenang'],
      duration: 'Half-day (4-6 Jam)',
      location: 'Perkotaan, Kebun Raya, atau Kawasan Terpadu'
    },
    { 
      id: 6, 
      title: 'Custom Corporate Event', 
      desc: 'Konsep acara dapat disesuaikan dengan objective, jumlah peserta, lokasi, dan kebutuhan perusahaan.', 
      icon: '⚙️',
      longDesc: 'Anda punya ide spesifik atau masalah unik di perusahaan yang ingin diselesaikan melalui event? Tim konsultan kami siap merancang program eksklusif dari nol hanya untuk Anda.',
      activities: ['Tailor-made Activities (Sesuai Permintaan)', 'Thematic Events (Contoh: Squid Game Theme)', 'CSR (Corporate Social Responsibility) Programs', 'Anniversary / Launching Event'],
      included: ['Dedicated Event Consultant', 'Konseptor & Project Manager', 'Kustomisasi Properti & Dekorasi', 'Laporan Evaluasi Event (Post-Event)'],
      duration: 'Menyesuaikan Kebutuhan Klien',
      location: 'Seluruh Indonesia'
    }
  ];

  return (
    <section id="programs" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Program yang Kami Hadirkan</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <button 
                onClick={() => setSelectedService(service)}
                className={styles.detailBtn}
              >
                Lihat Detail →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup Detail Program */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
          {/* Overlay click to close */}
          <div className="absolute inset-0" onClick={() => setSelectedService(null)}></div>
          
          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-full text-2xl border border-red-100 shrink-0">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-sm text-[#B51217] font-semibold mt-1 uppercase tracking-wide">
                    Kaulinan Organizer
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Deskripsi */}
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-[#B51217] rounded-full inline-block"></span>
                  Tentang Program Ini
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedService.longDesc}
                </p>
              </div>

              {/* Grid Aktifitas & Fasilitas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Aktivitas */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">🎯 Gambaran Aktivitas</h4>
                  <ul className="space-y-3">
                    {selectedService.activities.map((act: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-700 text-sm">
                        <CheckCircle2 size={18} className="text-[#B51217] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fasilitas */}
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">📦 Fasilitas Termasuk</h4>
                  <ul className="space-y-3">
                    {selectedService.included.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5 text-gray-700 text-sm">
                        <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Info Praktis */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Durasi</p>
                    <p className="text-sm text-gray-900 font-medium">{selectedService.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Lokasi</p>
                    <p className="text-sm text-gray-900 font-medium">{selectedService.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-10">
              <p className="text-sm text-gray-500 text-center sm:text-left">
                Tertarik merancang program ini untuk perusahaan Anda?
              </p>
              <a 
                href={`https://wa.me/6281384071500?text=${encodeURIComponent(`Halo tim Kaulinan Organizer, saya tertarik berdiskusi lebih lanjut mengenai program *${selectedService.title}* untuk perusahaan saya. Boleh minta informasi paket dan harganya?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#B51217] hover:bg-[#8f0e13] text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
