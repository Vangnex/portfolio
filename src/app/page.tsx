import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (

    <main className={styles.main}>
      <nav className={styles.navigator}>
        <Image
          src="/didier.jpeg"
          alt="Didier Photo"
          className={styles.photo}
          width={160}
          height={160}
        />
        <ul>
          <li className={styles.navli}>
            <a className={styles.navlink}>à propos</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>expériences</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>formations</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>compétences</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>portfolio</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>intérêts</a>
          </li>
          <li className={styles.navli}>
            <a className={styles.navlink}>promotions</a>
          </li>
        </ul>
      </nav>
      <core className={styles.core}>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
        <section>
          <h2>Lorem Ipsum</h2>
        </section>
      </core>

    </main>
  )
}
