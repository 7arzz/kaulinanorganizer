import React from 'react';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    { id: 1, title: 'Corporate Gathering', desc: 'Bangun kebersamaan dan komunikasi antar anggota tim melalui gathering perusahaan yang dirancang sesuai kebutuhan.', icon: '🏢' },
    { id: 2, title: 'Team Building', desc: 'Program interaktif untuk meningkatkan teamwork, leadership, komunikasi, dan problem solving.', icon: '🎯' },
    { id: 3, title: 'Outbound', desc: 'Aktivitas outdoor yang menyenangkan sekaligus membangun kekompakan dan kepercayaan dalam tim.', icon: '🏕️' },
    { id: 4, title: 'Employee Refreshment', desc: 'Berikan pengalaman baru bagi karyawan untuk meningkatkan energi, engagement, dan semangat kerja.', icon: '🔋' },
    { id: 5, title: 'Amazing Race', desc: 'Permainan berbasis tantangan yang menggabungkan strategi, komunikasi, kreativitas, dan kerja sama tim.', icon: '🏁' },
    { id: 6, title: 'Custom Corporate Event', desc: 'Konsep acara dapat disesuaikan dengan objective, jumlah peserta, lokasi, dan kebutuhan perusahaan.', icon: '⚙️' }
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
              <a href="#contact" className={styles.detailBtn}>Lihat Detail →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
