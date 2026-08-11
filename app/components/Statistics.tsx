import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className={styles.container}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>140+</div>
          <div className={styles.statLabel}>Program & Dokumentasi</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>3.700+</div>
          <div className={styles.statLabel}>Followers</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>Corporate</div>
          <div className={styles.statLabel}>Event Specialist</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>JKT • BGR • BDG</div>
          <div className={styles.statLabel}>Service Area</div>
        </div>
      </div>
    </section>
  );
}
