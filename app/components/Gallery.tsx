import React from 'react';
import styles from './Gallery.module.css';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Corporate Gathering' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Team Building' },
    { src: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Outbound' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Amazing Race' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Employee Refreshment' },
    { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', alt: 'Team Games' }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Galeri Kegiatan</h2>
          <div className={styles.titleUnderline}></div>
        </div>
        <div className={styles.filters}>
          <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
          <button className={styles.filterBtn}>Gathering</button>
          <button className={styles.filterBtn}>Team Building</button>
          <button className={styles.filterBtn}>Outbound</button>
        </div>
        <div className={styles.grid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.gridItem}>
              <img src={img.src} alt={img.alt} className={styles.image} />
              <div className={styles.overlay}>
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
