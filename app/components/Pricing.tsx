import React from "react";
import { Check } from "lucide-react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const waMessage = encodeURIComponent(
    "Halo Kaulinan Organizer, saya ingin konsultasi mengenai paket program corporate event. Bisa dibantu?",
  );

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Pilih Paket Sesuai Kebutuhan Tim</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.subtitle}>
            Harga dapat disesuaikan berdasarkan jumlah peserta, lokasi, konsep
            acara, dan kebutuhan perusahaan.
          </p>
        </div>

        <div className={styles.grid}>
          {/* STARTER */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>STARTER</h3>
              <p className={styles.planPrice}>
                Mulai dari <span>Rp XXX.XXX</span> / pax
              </p>
            </div>
            <ul className={styles.featuresList}>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Team Building Games</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Facilitator</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Basic Event Concept</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Documentation</li>
            </ul>
            <a
              href={`https://wa.me/6281384071500?text=${encodeURIComponent("Halo Kaulinan Organizer, saya tertarik dengan paket Starter. Mohon informasi harga dan detail programnya.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Tanya Harga
            </a>
          </div>

          {/* POPULAR */}
          <div className={`${styles.card} ${styles.popular}`}>
            <div className={styles.badge}>MOST POPULAR</div>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>POPULAR</h3>
              <p className={styles.planPrice}>
                Mulai dari <span>Rp XXX.XXX</span> / pax
              </p>
            </div>
            <ul className={styles.featuresList}>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Team Building</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Outbound Activities</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Professional Facilitator</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Event Concept</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Basic Documentation</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Games & Equipment</li>
            </ul>
            <a
              href={`https://wa.me/6281384071500?text=${encodeURIComponent("Halo Kaulinan Organizer, saya tertarik dengan paket Popular. Mohon informasi harga dan detail programnya.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSolid}
            >
              Tanya Harga via WhatsApp
            </a>
          </div>

          {/* CORPORATE */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.planName}>CORPORATE</h3>
              <p className={styles.planPrice}>Custom Pricing</p>
            </div>
            <ul className={styles.featuresList}>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Custom Program</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Corporate Gathering</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Team Building & Outbound</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Full Event Management</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Premium Documentation</li>
              <li className="flex items-center gap-2"><Check size={18} className="text-[var(--color-primary)]" /> Custom Rundown</li>
            </ul>
            <a
              href={`https://wa.me/6281384071500?text=${encodeURIComponent("Halo Kaulinan Organizer, saya tertarik dengan paket Corporate (Custom). Mohon informasi lebih lanjut.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Konsultasi Custom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
