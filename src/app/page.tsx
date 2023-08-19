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
        <section id="aboutSection">
          <div className={styles.aboutContent}>
            <h1>Didier <span style={{"color":"#bd5d38"}}>CHENG</span></h1>
            <div className={styles.sectionSubtitle}>
              92, Avenue Magellan 
              - 94000 Créteil 
              - 06 27 91 39 13 
              - <span style={{"color":"#bd5d38"}}>chengdidier@gmail.com</span>
            </div>
            <div className={styles.aboutText}>
              Développeur Javascript travaillant principalement en méthode agile.
            </div>
            <ul className={styles.socialLink}>
              <li>
                <a href='https://www.linkedin.com/in/didier-cheng-a21959a9/' target='_blank'>
                  <div className={styles.circle}>
                    <Image
                      src="/linkedin_logo.png"
                      alt="Linkedin Logo"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href='https://github.com/Vangnex' target='_blank'>
                  <div className={styles.circle}>
                    <Image
                      src="/github_logo.png"
                      alt="Github Logo"
                      width={30}
                      height={30}
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h1>Didier CHENG</h1>
        </section>
      </core>

    </main>
  )
}
