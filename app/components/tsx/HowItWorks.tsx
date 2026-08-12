import React from 'react';
import styles from '../css/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Konsultasi', desc: 'Diskusikan kebutuhan dan objective perusahaan Anda dengan tim kami.' },
    { num: '02', title: 'Konsep & Proposal', desc: 'Kami menyusun konsep program dan rincian estimasi biaya secara profesional.' },
    { num: '03', title: 'Persiapan', desc: 'Tim Kaulinan Organizer mempersiapkan seluruh kebutuhan event secara detail.' },
    { num: '04', title: 'Event Day', desc: 'Program dilaksanakan dengan lancar bersama fasilitator dan tim profesional kami.' }
  ];

  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cara Kerja Kami</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
