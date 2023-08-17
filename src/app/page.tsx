import Image from 'next/image'
import styles from './page.module.css'
import Variables from './variables.css'

export default function Home() {

  const navwidth = '270px';

  return (

    <main className={styles.main}>
      <nav style={{"width": navwidth}} className={styles.navigator}>
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

      <core style={{"margin-left": navwidth}} className={styles.core}>
        <section>
          <div className={styles.aboutContent}>
            <h1>Didier <span style={{"color":"#bd5d38"}}>CHENG</span></h1>
            <div className={styles.sectionSubtitle}>
              92, Avenue Magellan 
              - 94000 Créteil 
              - 06 27 91 39 13 
              - <span style={{"color":"#bd5d38"}}>chengdidier@gmail.com</span>
            </div>
            <div className={styles.aboutText}>
            </div>
          </div>
        </section>
        <section>
          <h1>Didier CHENG</h1>
        </section>
      </core>

    </main>
  )
}
