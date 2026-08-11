import React from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: 'Budi Santoso', company: 'PT Maju Bersama', text: 'Sangat puas dengan layanan Kaulinan Organizer. Acaranya fun, rapi, dan tim fasilitator sangat profesional. Highly recommended!' },
    { id: 2, name: 'Siti Aminah', company: 'Bank Nusantara', text: 'Corporate gathering kami sukses besar berkat ide kreatif dari tim Kaulinan. Semua karyawan sangat menikmati!' },
    { id: 3, name: 'Andi Pratama', company: 'Tech Innovators', text: 'Program team building yang out of the box! Bukan sekadar main-main, ada banyak value yang didapat oleh tim kami.' }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Apa Kata Mereka?</h2>
          <div className={styles.titleUnderline}></div>
          <div className={styles.ratingBox}>
            <div className={styles.stars}>★★★★★</div>
            <div className={styles.score}>4.9 / 5</div>
            <p className={styles.basedOn}>Based on client reviews</p>
          </div>
        </div>
        <div className={styles.grid}>
          {testimonials.map(testi => (
            <div key={testi.id} className={styles.card}>
              <div className={styles.cardStars}>★★★★★</div>
              <p className={styles.text}>"{testi.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}></div>
                <div>
                  <h4 className={styles.name}>{testi.name}</h4>
                  <p className={styles.company}>{testi.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <a href="#" className={styles.reviewBtn}>📝 Review Kaulinan Organizer</a>
        </div>
      </div>
    </section>
  );
}
