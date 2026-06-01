"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <header className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#" className={styles.navLogo}>
            Klawz<span>Tech</span>
          </a>
          <nav className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className={styles.navCta}>Hire Me</a>

          {/* Hamburger Menu Toggle Button */}
          <button 
            className={`${styles.navToggle} ${isMenuOpen ? styles.navToggleOpen : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.navToggleLine}></span>
            <span className={styles.navToggleLine}></span>
            <span className={styles.navToggleLine}></span>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuLinks}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <a href="#contact" className={styles.mobileMenuCta} onClick={() => setIsMenuOpen(false)}>
              Hire Me
            </a>
          </div>
        </nav>
      </header>

      <main className={styles.container}>

        {/* Hero Section */}
        <section className={`${styles.section} ${styles.hero} animate-fade-in`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              AI Data Evaluator & Full Stack Dev
            </div>

            <h1 className={styles.heroTitle}>
              Hi, I'm <span className="text-gradient">Eugene.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Founder of <strong>Klawz Tech</strong>. AI Data Evaluator & Full Stack Developer — blending precision in data annotation with modern web application engineering.
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={styles.primaryBtn}>
                View Work
                <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
            </div>
          </div>

          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageGlow}></div>
            <div className={styles.heroImageWrapper}>
              <Image
                src="/myimg.jpg"
                alt="Eugene"
                width={350}
                height={350}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Trust Badge Strip / Accreditations */}
        <section className={styles.trustStrip}>
          <div className={`${styles.trustItem} glass`}>
            <div className={styles.trustHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--m-light-blue)" strokeWidth="2" className={styles.trustIcon}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
              <div className={styles.trustMetric}>B.Tech IT</div>
            </div>
            <div className={styles.trustLabel}>Ho Technical Univ (Ongoing)</div>
          </div>

          <div className={`${styles.trustItem} glass`}>
            <div className={styles.trustHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--m-light-blue)" strokeWidth="2" className={styles.trustIcon}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
              <div className={styles.trustMetric}>HND IT</div>
            </div>
            <div className={styles.trustLabel}>Ho Technical Univ Graduate</div>
          </div>

          <div className={`${styles.trustItem} glass`}>
            <div className={styles.trustHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--m-light-blue)" strokeWidth="2" className={styles.trustIcon}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <div className={styles.trustMetric}>AI Expert</div>
            </div>
            <div className={styles.trustLabel}>Trained by Data Maker</div>
          </div>

          <div className={`${styles.trustItem} glass`}>
            <div className={styles.trustHeader}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" className={styles.trustIcon}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <div className={styles.trustMetric}>100% Rate</div>
            </div>
            <div className={styles.trustLabel}>Client Handoff Success</div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutTextBlocks}>

              <div className={`${styles.aboutCard} glass`}>
                <div className={styles.aboutCardHeader}>
                  <svg className={styles.aboutIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--m-light-blue)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                  <h3>The Vision & Strategy</h3>
                </div>
                <p>
                  With a strong foundation in modern web technologies and systematic IT support, I specialize in building highly functional, clean, and scalable frontend applications. As the head of <strong>Klawz Tech</strong>, I turn complex business ideas into digital solutions that solve real-world problems.
                </p>
              </div>

              <div className={`${styles.aboutCard} glass`}>
                <div className={styles.aboutCardHeader}>
                  <svg className={styles.aboutIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--m-red)" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2m0 10v10M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  <h3>AI-Driven Precision</h3>
                </div>
                <p>
                  My work as an AI Data Evaluator infuses extreme precision into my coding practices. Whether designing dataset annotation workflows or building high-performance Next.js apps, I deliver polished, user-centric systems that perform exceptionally and deliver real value to clients.
                </p>
              </div>

            </div>

            <div className={styles.aboutStats}>
              <div className={`${styles.statCard} glass`}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Completed Sites</div>
              </div>
              <div className={`${styles.statCard} glass`}>
                <div className={styles.statNumber}>4+ Yrs</div>
                <div className={styles.statLabel}>Freelance Exp</div>
              </div>
              <div className={`${styles.statCard} glass`}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
              <div className={`${styles.statCard} glass`}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Production Apps</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Tech Stack</h2>
          <div className={styles.skillsContainer}>

            <div className={`${styles.skillCategory} glass`}>
              <h3>Core Dev</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>JavaScript (ES6+)</span>
                <span className={styles.skillTag}>React</span>
                <span className={styles.skillTag}>Flutter</span>
                <span className={styles.skillTag}>Firebase</span>
                <span className={styles.skillTag}>PostgreSQL</span>
                <span className={styles.skillTag}>HTML5 / CSS3</span>
              </div>
            </div>

            <div className={`${styles.skillCategory} glass`}>
              <h3>AI & Annotation</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Data Labeling</span>
                <span className={styles.skillTag}>Quality Assurance (QA)</span>
                <span className={styles.skillTag}>Pattern Recognition</span>
                <span className={styles.skillTag}>Dataset Preparation</span>
                <span className={styles.skillTag}>Model Validation</span>
              </div>
            </div>

            <div className={`${styles.skillCategory} glass`}>
              <h3>Tools & Operations</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Git & GitHub</span>
                <span className={styles.skillTag}>IT Tech Support</span>
                <span className={styles.skillTag}>Network Admin</span>
                <span className={styles.skillTag}>System Admin</span>
                <span className={styles.skillTag}>Photoshop</span>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects & Production Systems</h2>
          <div className={styles.projectsGrid}>

            {/* Project 1: Marts Business & Imports (Deployed) */}
            <div className={`${styles.projectCard} glass`}>
              <span className={styles.projectLiveBadge}>● Deployed</span>
              <h3 className={styles.projectTitle}>🛒 Marts Business & Imports</h3>
              <div className={styles.projectTech}>
                <span className={styles.techDot}>Next.js</span>
                <span className={styles.techDot}>Tailwind CSS</span>
                <span className={styles.techDot}>Stripe</span>
              </div>
              <p className={styles.projectDescription}>
                <strong>Problem:</strong> High transaction friction in typical dropshipping storefronts.<br /><br />
                <strong>Built:</strong> A high-conversion, highly optimized dropshipping eCommerce portal with instant checkout flow.<br /><br />
                <strong>Learned:</strong> API integration, secure payment gateway handling, and fast server-side rendering architecture.
              </p>
              <div className={styles.projectLinks}>
                <a href="https://marts-b-i-ecommerce-94cl.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                  Launch App
                  <svg className={styles.btnIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
              </div>
            </div>

            {/* Project 2: Ho Rentals (Deployed) */}
            <div className={`${styles.projectCard} glass`}>
              <span className={styles.projectLiveBadge}>● Deployed</span>
              <h3 className={styles.projectTitle}>🏡 Ho Rentals</h3>
              <div className={styles.projectTech}>
                <span className={styles.techDot}>Next.js</span>
                <span className={styles.techDot}>Railway</span>
                <span className={styles.techDot}>Cloudinary</span>
                <span className={styles.techDot}>Google Maps API</span>
              </div>
              <p className={styles.projectDescription}>
                <strong>Problem:</strong> Renters struggled to find listings close to university campuses with accurate pricing and geolocations.<br /><br />
                <strong>Built:</strong> Property listing manager, filterable maps, high-fidelity image carousels, and WhatsApp direct contact flow.<br /><br />
                <strong>Learned:</strong> Integrating geolocation APIs, handling high-fidelity image uploads to Cloudinary, and responsive map layouts.
              </p>
              <div className={styles.projectLinks}>
                <a href="https://horental-website.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.projectCta}>
                  Launch App
                  <svg className={styles.btnIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                </a>
              </div>
            </div>

            {/* Project 3: Mental Health Mobile App (Local Build) */}
            <div className={`${styles.projectCard} glass`}>
              <span className={`${styles.projectLiveBadge} ${styles.inProgress}`}>● Local Build</span>
              <h3 className={styles.projectTitle}>🧠 Mental Health Mobile App</h3>
              <div className={styles.projectTech}>
                <span className={styles.techDot}>Flutter</span>
                <span className={styles.techDot}>Firebase</span>
                <span className={styles.techDot}>UI/UX Design</span>
              </div>
              <p className={styles.projectDescription}>
                <strong>Problem:</strong> Students facing stress and anxiety needed a simple way to track their mental state and access coping strategies.<br /><br />
                <strong>Built:</strong> Real-time mood tracking, dynamic journaling with sentiment analysis, and interactive dashboard reports.<br /><br />
                <strong>Learned:</strong> Empathic UI design, structuring secure cloud user data, and implementing responsive layouts.
              </p>
            </div>

            {/* Project 4: To-Do & Study Planner (Local Build) */}
            <div className={`${styles.projectCard} glass`}>
              <span className={`${styles.projectLiveBadge} ${styles.inProgress}`}>● Local Build</span>
              <h3 className={styles.projectTitle}>✅ To-Do & Study Planner</h3>
              <div className={styles.projectTech}>
                <span className={styles.techDot}>React</span>
                <span className={styles.techDot}>Firebase Auth</span>
                <span className={styles.techDot}>Firestore</span>
              </div>
              <p className={styles.projectDescription}>
                <strong>Problem:</strong> Needed a centralized, seamless system to manage tasks, schedules, and study goals effectively.<br /><br />
                <strong>Built:</strong> Secure authentication, real-time Firestore database synchronization, task priority filters, and study timers.<br /><br />
                <strong>Learned:</strong> State management, session persistence, and full CRUD operations with Firestore.
              </p>
            </div>

            {/* Project 5: Office Management System (Local Build) */}
            <div className={`${styles.projectCard} glass`}>
              <span className={`${styles.projectLiveBadge} ${styles.inProgress}`}>● Local Server</span>
              <h3 className={styles.projectTitle}>🗂️ Office File Management System</h3>
              <div className={styles.projectTech}>
                <span className={styles.techDot}>Next.js</span>
                <span className={styles.techDot}>Vercel</span>
                <span className={styles.techDot}>PostgreSQL</span>
              </div>
              <p className={styles.projectDescription}>
                <strong>Problem:</strong> Office staff had to physically move between departments to share, track, and manage incoming, outgoing, and internal files — causing delays and lost records.<br /><br />
                <strong>Built:</strong> A centralized digital file hub with role-based access, allowing departments to log and receive files, track status (incoming / outgoing / internal), and share documents instantly without leaving their desks.<br /><br />
                <strong>Learned:</strong> Designing multi-role access systems, building real-time file tracking workflows, and optimizing database queries for organizational record management.
              </p>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience & Work History</h2>
          <div className={styles.timeline}>

            {/* Timeline Item 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>Freelance Full Stack Developer</h3>
                <span className={styles.timelineBadge}>Klawz Tech (2021 - Present)</span>
              </div>
              <div className={styles.timelineRole}>Founder & Lead Architect</div>
              <p className={styles.timelineDesc}>
                Architecting modern responsive web applications, secure cloud backend synchronizations, and customer billing interfaces. Leading client diversity projects, focusing on highly optimized full-stack design patterns.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>AI Data Labeler & QA</h3>
                <span className={styles.timelineBadge}>Data Maker</span>
              </div>
              <div className={styles.timelineRole}>Data Evaluation Specialist</div>
              <p className={styles.timelineDesc}>
                Executing high-accuracy data annotation, complex pattern recognition, model output quality audits, and custom dataset validations to build high-performance neural networks.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>IT Technical Support</h3>
                <span className={styles.timelineBadge}>Forestry Commission Intern</span>
              </div>
              <div className={styles.timelineRole}>Systems & Network Troubleshooter</div>
              <p className={styles.timelineDesc}>
                Troubleshooting active network setups, executing operating system configurations, administering localized databases, and driving swift digital adoption of unified technical workflows.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>Technical Operations & Hardware Repair</h3>
                <span className={styles.timelineBadge}>Mighty Office Machine Services (Since Age 10)</span>
              </div>
              <div className={styles.timelineRole}>Operations Specialist & Hardware Technician</div>
              <p className={styles.timelineDesc}>
                Directing day-to-day operations including high-volume printing, photocopying, typesetting, and digital café services. Gained extensive, lifelong technical experience troubleshooting, maintaining, and repairing printers and heavy-duty office machinery while consistently delivering high-quality customer service.
              </p>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <h2 className={styles.sectionTitle}>Let's Build Something</h2>
          <p className={styles.heroSubtitle} style={{ margin: '0 auto 2rem' }}>
            I am actively looking for opportunities to grow and contribute to real-world projects.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:klawztech967@gmail.com" className={`${styles.primaryBtn}`} style={{ display: 'inline-block' }}>Email Me</a>
            <a href="https://wa.me/233595744536" target="_blank" rel="noopener noreferrer" className={`${styles.secondaryBtn}`} style={{ display: 'inline-block' }}>WhatsApp Me</a>
            <a href="tel:+233595744536" className={`${styles.secondaryBtn}`} style={{ display: 'inline-block' }}>Call Me</a>
            <a href="https://github.com/KlawZout2423" target="_blank" rel="noopener noreferrer" className={`${styles.secondaryBtn}`} style={{ display: 'inline-block' }}>GitHub</a>
          </div>
        </section>

      </main>
    </>
  );
}
