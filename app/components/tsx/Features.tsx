import React from 'react';
import { Check } from 'lucide-react';
import styles from '../css/Features.module.css';

export default function Features() {
  const features = [
    { id: 1, title: 'Program Custom', desc: 'Program disesuaikan dengan objective perusahaan.' },
    { id: 2, title: 'Professional Team', desc: 'Didukung tim yang berpengalaman dalam pelaksanaan event.' },
    { id: 3, title: 'Fun & Meaningful', desc: 'Bukan sekadar bermain, tetapi memiliki tujuan untuk membangun tim.' },
    { id: 4, title: 'Flexible Concept', desc: 'Indoor, outdoor, gathering, outbound, hingga custom event.' },
    { id: 5, title: 'End-to-End Service', desc: 'Mulai dari konsep, rundown, games, fasilitator, hingga pelaksanaan.' },
    { id: 6, title: 'Corporate Focus', desc: 'Dirancang khusus untuk kebutuhan perusahaan dan organisasi.' }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Kenapa Memilih Kaulinan Organizer?</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.grid}>
          {features.map(feat => (
            <div key={feat.id} className={styles.featureCard}>
              <div className={styles.iconCheck}><Check size={20} /></div>
              <div>
                <h4 className={styles.featTitle}>{feat.title}</h4>
                <p className={styles.featDesc}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
