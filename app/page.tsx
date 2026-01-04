import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/LCBG-green-logo.png"
              alt="Lancaster County Brewers Guild Logo"
              width={120}
              height={120}
              priority
              className={styles.logo}
            />
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.phone}>
              <a href="tel:7175892337">(717) 589-BEER</a>
            </div>
            <div className={styles.address}>
              284 S Reading Rd<br />
              Ephrata, PA 17522
            </div>
          </div>
        </div>
      </header>
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Site Maintenance in Progress</h2>
          <p className={styles.heroText}>
            We're currently updating our website to serve you better. 
            Our new site will be launching soon with exciting features and information 
            about Lancaster County's rich brewing tradition.
          </p>
          <div className={styles.heroSubtext}>
            <p>
              Lancaster has a rich tradition of brewing beer, dating back to the 1700's. 
              We aim to keep that tradition and culture going for years to come.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h3 className={styles.contactTitle}>CONTACT</h3>
        <h4 className={styles.guildName}>LANCASTER COUNTY BREWERS GUILD</h4>
        <div className={styles.contactDetails}>
          <p>284 S Reading Rd</p>
          <p>Ephrata, PA 17522</p>
          <p className={styles.contactPhone}>
            <a href="tel:7175892337">(717) 589-BEER</a>
          </p>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/lancasterbreweries/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Instagram
          </a>
          <a href="https://www.facebook.com/LancasterBrewersGuild" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            Facebook
          </a>
          <a href="mailto:info@lancasterbreweries.org/" className={styles.socialLink}>
            Email
          </a>
        </div>
      </div>
    </main>
  )
}

