import Image from 'next/image'
import styles from './page.module.css'
import Variables from './variables.css'

const experiences = [
  {
    title : 'Senior Web Developer',
    subtitle : 'InCube',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2020 - 12/2021'
  },
  {
    title : 'Senior Web Developer',
    subtitle : 'InCube',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
  {
    title : 'Senior Web Developer',
    subtitle : 'InCube',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
  {
    title : 'Senior Web Developer',
    subtitle : 'InCube',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
]

const educations = [
  {
    title : 'Expertise de la technologie et de l\'innovation',
    subtitle : 'EPITECH PARIS',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2020 - 12/2021'
  },
  {
    title : 'Diplôme de Comptabilité et de Gestion',
    subtitle : 'Teilhard de Chardin',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
  {
    title : 'BTS Comptabilité et Gestion des Organisations',
    subtitle : 'Teilhard de Chardin',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
  {
    title : 'Bac S - Science de l\'ingénieur',
    subtitle : 'Lycée édouard branly',
    description : 'Blablabla je suis là. Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum\
                  lorem ipsum lorem ipsum lorem ipsum',
    date : '01/2022 - 12/2023'
  },
]

const ExperienceFrame = (
  { title, subtitle, description, date } :
  { title: string, subtitle: string, description: string, date: string }
) => {
  return (
    <div className={styles.experienceFrame}>
      <div className={styles.experienceInfo}>
        <h3>{title}</h3>
        <div className={styles.experienceSubtitle}>{subtitle}</div>
        <p>{description}</p>
      </div>
      <div className={styles.experienceDate}>
        <span>{date}</span>
      </div>
    </div>
  )
}

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
            <a href='#aboutSection' className={styles.navlink}>à propos</a>
          </li>
          <li className={styles.navli}>
            <a href='#experienceSection' className={styles.navlink}>expériences</a>
          </li>
          <li className={styles.navli}>
            <a href='#formationSection' className={styles.navlink}>formations</a>
          </li>
          <li className={styles.navli}>
            <a href='#skillSection' className={styles.navlink}>compétences</a>
          </li>
          <li className={styles.navli}>
            <a href='#portfolioSection' className={styles.navlink}>portfolio</a>
          </li>
          <li className={styles.navli}>
            <a href='#interestSection' className={styles.navlink}>intérêts</a>
          </li>
        </ul>
      </nav>

      <core style={{"margin-left": navwidth}} className={styles.core}>

        <section id="aboutSection">
          <div className={styles.coreMargin}>
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
                <a href='/CV_Didier_CHENG_Front.pdf' target='_blank'>
                  <div className={styles.circle}>
                    <Image
                      src="/cv_logo.png"
                      alt="CV téléchargeable"
                      width={60}
                      height={60}
                    />
                  </div>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/didier-cheng-a21959a9/' target='_blank'>
                  <div className={styles.circle}>
                    <Image
                      src="/linkedin_logo.png"
                      alt="Linkedin Logo"
                      width={40}
                      height={40}
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
                      width={50}
                      height={50}
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="experienceSection">
          <div className={styles.coreMargin}>
            <h2>Expériences</h2>

            <ExperienceFrame
              title={experiences[0].title}
              subtitle={experiences[0].subtitle}
              description={experiences[0].description}
              date={experiences[0].date}
            />

            <ExperienceFrame
              title={experiences[0].title}
              subtitle={experiences[0].subtitle}
              description={experiences[0].description}
              date={experiences[0].date}
            />

            <ExperienceFrame
              title={experiences[0].title}
              subtitle={experiences[0].subtitle}
              description={experiences[0].description}
              date={experiences[0].date}
            />

            <ExperienceFrame
              title={experiences[1].title}
              subtitle={experiences[1].subtitle}
              description={experiences[1].description}
              date={experiences[1].date}
            />

          </div>
        </section>

        <section id="formationSection">
          <div className={styles.coreMargin}>
            <h2>Formations</h2>
            <ExperienceFrame
              title={educations[0].title}
              subtitle={educations[0].subtitle}
              description={educations[0].description}
              date={educations[0].date}
            />
            <ExperienceFrame
              title={educations[1].title}
              subtitle={educations[1].subtitle}
              description={educations[1].description}
              date={educations[1].date}
            />
            <ExperienceFrame
              title={educations[2].title}
              subtitle={educations[2].subtitle}
              description={educations[2].description}
              date={educations[2].date}
            />
            <ExperienceFrame
              title={educations[3].title}
              subtitle={educations[3].subtitle}
              description={educations[3].description}
              date={educations[3].date}
            />
          </div>
        </section>

        <section id="skillSection">
          <div className={styles.coreMargin}>
            <h2>Compétences</h2>
            <ul className={styles.socialLink}>
              <li>
                <div className={styles.circle}>
                  <Image
                    src="/js_logo.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li>
                <div className={styles.circle}>
                  <Image
                    src="/linkedin_logo.png"
                    alt="Linkedin Logo"
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li>
                <div className={styles.circle}>
                  <Image
                    src="/github_logo.png"
                    alt="Github Logo"
                    width={50}
                    height={50}
                  />
                </div>
              </li>
            </ul>

          </div>
        </section>

        <section id="portfolioSection">
          <div className={styles.coreMargin}>
            <h2>Portfolio</h2>
          </div>
        </section>

        <section id="interestSection">
          <div className={styles.coreMargin}>
            <h2>Intérêts</h2>
          </div>
        </section>

      </core>

    </main>
  )
}
