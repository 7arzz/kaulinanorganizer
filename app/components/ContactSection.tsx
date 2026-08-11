'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Camera } from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: '', pax: '', program: '', date: '', location: '', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Kaulinan Organizer, saya ingin meminta penawaran event.

Nama: ${formData.nama}
Jumlah Peserta: ${formData.pax}
Jenis Program: ${formData.program}
Tanggal Event: ${formData.date}
Lokasi: ${formData.location}

Pesan Tambahan:
${formData.message}`;

    window.open(`https://wa.me/6281384071500?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>Hubungi Kami</h2>
          <div className={styles.titleUnderline}></div>
          <h3 className={styles.brand}>Kaulinan Organizer</h3>
          <p className={styles.tags}>Event Organizer • Corporate Gathering • Team Building • Outbound</p>
          
          <div className={styles.detailItem}>
            <span className={styles.icon}><MapPin size={24} /></span>
            <div>
              <strong>Lokasi / Coverage Area</strong>
              <p>JKT • BGR • BDG • Indonesia</p>
            </div>
          </div>
          
          <div className={styles.detailItem}>
            <span className={styles.icon}><Phone size={24} /></span>
            <div>
              <strong>WhatsApp</strong>
              <p>0813-8407-1500</p>
            </div>
          </div>
          
          <div className={styles.detailItem}>
            <span className={styles.icon}><Camera size={24} /></span>
            <div>
              <strong>Instagram</strong>
              <p>@kaulinanorganizer</p>
            </div>
          </div>
        </div>

        <div className={styles.formBox}>
          <h3 className={styles.formTitle}>Kirim Permintaan Penawaran</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputRow}>
              <input type="text" name="nama" placeholder="Nama Lengkap" required onChange={handleChange} className={styles.input} />
              <input type="number" name="pax" placeholder="Estimasi Jumlah Peserta" required onChange={handleChange} className={styles.input} />
            </div>
            <div className={styles.inputRow}>
              <select name="program" required onChange={handleChange} className={styles.input}>
                <option value="">Pilih Jenis Program</option>
                <option value="Corporate Gathering">Corporate Gathering</option>
                <option value="Team Building">Team Building</option>
                <option value="Outbound">Outbound</option>
                <option value="Amazing Race">Amazing Race</option>
                <option value="Employee Refreshment">Employee Refreshment</option>
                <option value="Custom Event">Custom Event</option>
              </select>
              <input type="date" name="date" required onChange={handleChange} className={styles.input} />
            </div>
            <input type="text" name="location" placeholder="Rencana Lokasi (cth: Puncak, Bandung, dsb)" required onChange={handleChange} className={styles.input} />
            <textarea name="message" placeholder="Pesan Tambahan (Opsional)" rows={4} onChange={handleChange} className={styles.textarea}></textarea>
            <button type="submit" className={styles.submitBtn}>Kirim Permintaan (via WA)</button>
          </form>
        </div>
      </div>
    </section>
  );
}

