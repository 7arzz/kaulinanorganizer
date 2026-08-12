import React from 'react';
import styles from '../css/CtaBanner.module.css';

export default function CtaBanner() {
  const waMessage = encodeURIComponent("Halo Kaulinan Organizer, saya ingin konsultasi gratis mengenai kebutuhan event perusahaan saya.");
  return (
    <section className={styles.ctaBanner}>
      <div className={styles.container}>
        <h2 className={styles.title}>Siap Bangun Tim yang Lebih Solid?</h2>
        <p className={styles.desc}>
          Ceritakan kebutuhan event perusahaan Anda. Tim Kaulinan Organizer siap membantu menyusun konsep yang sesuai dengan objective Anda.
        </p>
        <div className={styles.btnGroup}>
          <a href={`https://wa.me/6281384071500?text=${waMessage}`} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            Konsultasi Gratis via WhatsApp
          </a>
          <a href="#pricing" className={styles.secondaryBtn}>
            Lihat Paket
          </a>
        </div>
      </div>
    </section>
  );
}
