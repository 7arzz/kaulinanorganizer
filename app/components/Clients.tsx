import React from 'react';
import styles from './Clients.module.css';

export default function Clients() {
  const placeholders = [1, 2, 3, 4, 5, 6];
  return (
    <section className={styles.clients}>
      <div className={styles.container}>
        <h3 className={styles.title}>Trusted by Teams & Organizations</h3>
        <div className={styles.logoGrid}>
          {placeholders.map(id => (
            <div key={id} className={styles.logoBox}>
              <div className={styles.logoPlaceholder}>LOGO {id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
