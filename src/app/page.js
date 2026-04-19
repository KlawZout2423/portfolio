import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.container}>
      
      {/* Hero Section */}
      <section className={`${styles.section} ${styles.hero} animate-fade-in`}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className="text-gradient">Eugene.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Aspiring Front-End Developer & Founder of <strong>Klawz Tech</strong>. 
            Building real-world web applications, digital solutions, and practical systems like task managers, mental health apps, and eCommerce platforms.
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.primaryBtn}>View Work</a>
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
              height={450} 
              className={styles.heroImage} 
              priority 
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutGrid}>
          <div className={`${styles.aboutText} glass`} style={{ padding: '2.5rem' }}>
            <p>
              I started with HTML and CSS and built a strong foundation, but struggled staying consistent across multiple languages like Python and Java.
            </p>
            <p>
              Now, I’m focused on mastering JavaScript and building real-world applications that solve problems and can generate income. Even a simple project done well beats 10 unfinished ideas.
            </p>
          </div>
          
          <div className={styles.aboutStats}>
            <div className={`${styles.statCard} glass`}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Core Projects</div>
            </div>
            <div className={`${styles.statCard} glass`}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Commitment</div>
            </div>
            <div className={`${styles.statCard} glass`}>
              <div className={styles.statNumber}>JS</div>
              <div className={styles.statLabel}>Current Focus</div>
            </div>
            <div className={`${styles.statCard} glass`}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Learning</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
        <div className={styles.skillsContainer}>
          
          <div className={`${styles.skillCategory} glass`}>
            <h3>Frontend & Frameworks</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>HTML5</span>
              <span className={styles.skillTag}>CSS3</span>
              <span className={`${styles.skillTag} ${styles.learning}`}>JavaScript (Learning)</span>
              <span className={`${styles.skillTag} ${styles.learning}`}>Next.js (Learning)</span>
              <span className={`${styles.skillTag} ${styles.learning}`}>Flutter (Learning)</span>
            </div>
          </div>

          <div className={`${styles.skillCategory} glass`}>
            <h3>Languages & Backend</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>PHP</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>C++</span>
              <span className={`${styles.skillTag} ${styles.learning}`}>Firebase (Learning)</span>
            </div>
          </div>

          <div className={`${styles.skillCategory} glass`}>
            <h3>Design & Other</h3>
            <div className={styles.skillTags}>
              <span className={styles.skillTag}>AI Data Labeling</span>
              <span className={styles.skillTag}>Photoshop</span>
              <span className={styles.skillTag}>UI Design Basics</span>
              <span className={`${styles.skillTag} ${styles.learning}`}>Database Concepts (Learning)</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          
          <div className={`${styles.projectCard} glass`}>
            <h3 className={styles.projectTitle}>🧠 Mental Health Mobile App</h3>
            <div className={styles.projectTech}>
              <span className={styles.techDot}>UI Design</span>
              <span className={styles.techDot}>Prototyping</span>
            </div>
            <p className={styles.projectDescription}>
              <strong>Problem:</strong> Students facing stress and anxiety needed a simple way to track their state.<br/><br/>
              <strong>Built:</strong> Mood tracking, journaling, and dashboard reports.<br/><br/>
              <strong>Learned:</strong> Designing empathetic user interfaces and structuring user flows.
            </p>
            <div className={styles.projectLinks}>
              <a href="#">View Details →</a>
            </div>
          </div>

          <div className={`${styles.projectCard} glass`}>
            <h3 className={styles.projectTitle}>✅ To-Do & Study Planner</h3>
            <div className={styles.projectTech}>
              <span className={styles.techDot}>Firebase</span>
              <span className={styles.techDot}>Authentication</span>
            </div>
            <p className={styles.projectDescription}>
              <strong>Problem:</strong> Needed a centralized way to manage tasks and schedule study sessions.<br/><br/>
              <strong>Built:</strong> Task storage, scheduling, and Firebase authentication integration.<br/><br/>
              <strong>Learned:</strong> Basic backend concepts and handling user sessions.
            </p>
            <div className={styles.projectLinks}>
              <a href="#">View Details →</a>
            </div>
          </div>

          <div className={`${styles.projectCard} glass`}>
            <h3 className={styles.projectTitle}>🛒 eCommerce Platform</h3>
            <div className={styles.projectTech}>
              <span className={styles.techDot}>In Progress</span>
              <span className={styles.techDot}>System Design</span>
            </div>
            <p className={styles.projectDescription}>
              <strong>Problem:</strong> Building a profitable online system for dropshipping.<br/><br/>
              <strong>Building:</strong> A dropshipping-focused eCommerce system.<br/><br/>
              <strong>Learning:</strong> Real-world system design and full platform architecture.
            </p>
            <div className={styles.projectLinks}>
              <a href="#">View Details →</a>
            </div>
          </div>

        </div>
      </section>

      {/* Focus & Goals Section */}
      <section id="goals" className={styles.section}>
        <h2 className={styles.sectionTitle}>Current Trajectory</h2>
        <div className={styles.focusGrid}>
          
          <div className={`${styles.focusBox} glass`}>
            <h3>What I'm Working On</h3>
            <ul className={styles.focusList}>
              <li>Improving JavaScript skills to master frontend logic.</li>
              <li>Building a full eCommerce platform from scratch.</li>
              <li>Learning real-world system design and architecture.</li>
            </ul>
          </div>

          <div className={`${styles.focusBox} glass`}>
            <h3>Goals</h3>
            <ul className={styles.focusList}>
              <li><strong>Short Term:</strong> Master JavaScript and build/deploy 2–3 solid projects.</li>
              <li><strong>Long Term:</strong> Become a professional frontend developer.</li>
              <li><strong>Long Term:</strong> Build profitable, automated online systems.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience & Activities</h2>
        <div className={styles.timeline}>
          
          <div className={styles.timelineItem}>
            <h3 className={styles.timelineTitle}>Mental Health App Research</h3>
            <div className={styles.timelineRole}>Research Work</div>
            <p className={styles.timelineDesc}>
              Conducted research and developed systems around mental wellness tracking for students, applying cloud computing concepts.
            </p>
          </div>

          <div className={styles.timelineItem}>
            <h3 className={styles.timelineTitle}>Group System Development</h3>
            <div className={styles.timelineRole}>University Projects</div>
            <p className={styles.timelineDesc}>
              Collaborated with peers to design, build, and test software systems, focusing on practical problem solving and team dynamics.
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
          <a href="mailto:eugenedush975@gmail.com" className={`${styles.primaryBtn}`} style={{ display: 'inline-block' }}>Email Me</a>
          <a href="tel:0595744536" className={`${styles.secondaryBtn}`} style={{ display: 'inline-block' }}>Call / WhatsApp</a>
          <a href="https://github.com/KlawZout2423" target="_blank" rel="noopener noreferrer" className={`${styles.secondaryBtn}`} style={{ display: 'inline-block' }}>GitHub</a>
        </div>
      </section>

    </main>
  );
}
