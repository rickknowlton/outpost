import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image
              src="/lpg-logo.webp"
              alt="Lancaster Pet Grooming Logo"
              width={100}
              height={100}
              priority
              className={styles.logo}
            />
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.address}>
              146 College Avenue<br />
              Lancaster, PA 17603
            </div>
            <div className={styles.phone}>
              <a href="tel:7175371005">(717) 537 - 1005</a>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.container}>

        <div className={styles.schedulerContainer}>
          <div className={styles.schedulerWrapper}>
            <iframe
              src="https://booking.moego.pet/ol/LancasterPetGrooming125672/landing?utm_medium=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Online booking"
              scrolling="no"
              className={styles.schedulerIframe}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

