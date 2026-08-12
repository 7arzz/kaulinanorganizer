'use client';
import React, { useState } from 'react';
import styles from './FAQ.module.css';

export default function FAQ() {
  const faqs = [
    { q: 'Apakah program bisa custom?', a: 'Tentu saja. Konsep acara, durasi, dan aktivitas dapat disesuaikan sepenuhnya dengan objective dan kebutuhan perusahaan Anda.' },
    { q: 'Apakah Kaulinan Organizer melayani luar Bogor?', a: 'Ya, area layanan utama kami mencakup Jakarta, Bogor, dan Bandung. Namun kami juga siap melayani event di seluruh wilayah Indonesia sesuai kesepakatan.' },
    { q: 'Berapa minimal jumlah peserta?', a: 'Minimal jumlah peserta bervariasi tergantung pada jenis paket, namun umumnya kami melayani mulai dari 20 pax hingga ratusan pax.' },
    { q: 'Apakah harga sudah termasuk venue?', a: 'Harga dasar umumnya untuk program. Venue, konsumsi, dan transportasi dapat kami include-kan dalam proposal sesuai dengan request perusahaan.' },
    { q: 'Apakah bisa request aktivitas tertentu?', a: 'Sangat bisa. Jika Anda memiliki preferensi games, nilai-nilai perusahaan (core values) yang ingin disisipkan, tim kami akan merancangnya ke dalam aktivitas.' },
    { q: 'Apakah tersedia dokumentasi?', a: 'Ya, layanan kami menyediakan dokumentasi foto dan video sesuai dengan paket yang Anda pilih.' },
    { q: 'Bagaimana cara melakukan booking?', a: 'Anda dapat menghubungi kami melalui WhatsApp, mendiskusikan kebutuhan, lalu kami akan mengirimkan proposal dan penawaran. Setelah sepakat, Anda dapat melakukan pembayaran uang muka (DP).' },
    { q: 'Berapa lama proses persiapan event?', a: 'Idealnya 2-4 minggu sebelum hari H. Namun kami juga dapat menangani event mendesak tergantung skala dan ketersediaan tanggal.' }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ (Tanya Jawab)</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={`${styles.faqItem} ${activeIndex === idx ? styles.active : ''}`}>
              <button suppressHydrationWarning className={styles.question} onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <span className={styles.toggleIcon}>{activeIndex === idx ? '-' : '+'}</span>
              </button>
              <div className={styles.answer} style={{ maxHeight: activeIndex === idx ? '200px' : '0' }}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
