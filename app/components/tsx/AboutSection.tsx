import React from "react";
import {
  Target,
  Briefcase,
  Settings,
  PartyPopper,
  Building2,
  Handshake,
} from "lucide-react";
import styles from "../css/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Partner Strategis untuk Membangun Tim yang Lebih Solid
          </h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.description}>
            Kaulinan Organizer adalah <b>event organizer</b> profesional yang
            berfokus pada corporate events, team building, outbound, dan
            employee engagement. Kami berkomitmen untuk merancang kegiatan yang
            tidak hanya menyenangkan, tetapi juga bermakna bagi pengembangan tim
            Anda.
          </p>
          <ul className={styles.highlightList}>
            <li>
              <span className={styles.icon}>
                <Target size={24} />
              </span>{" "}
              Program terstruktur sesuai objective
            </li>
            <li>
              <span className={styles.icon}>
                <Briefcase size={24} />
              </span>{" "}
              Tim profesional dan berpengalaman
            </li>
            <li>
              <span className={styles.icon}>
                <Settings size={24} />
              </span>{" "}
              Konsep event dapat disesuaikan (custom)
            </li>
            <li>
              <span className={styles.icon}>
                <PartyPopper size={24} />
              </span>{" "}
              Aktivitas fun dan bermakna (meaningful)
            </li>
            <li>
              <span className={styles.icon}>
                <Building2 size={24} />
              </span>{" "}
              Sangat cocok untuk perusahaan dan organisasi besar
            </li>
            <li>
              <span className={styles.icon}>
                <Handshake size={24} />
              </span>{" "}
              Pendampingan dari perencanaan sampai pelaksanaan
            </li>
          </ul>
        </div>
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Corporate Team Activity"
              className={styles.image}
            />
            <div className={styles.imageAccent}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
