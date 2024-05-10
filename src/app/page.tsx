import Image from 'next/image'
import styles from './page.module.css'

const experiences = [
  {
    title : 'Développeur PHP Full Stack (Stage + CDD)',
    subtitle : 'InCube (Innovative Insurance Insight)',
    description : 'Intégré dans une équipe de 2 développeurs PHP dont 1 senior, j\'ai participé au développement d\'une\
                   plateforme web d\'application d\'assurance et d\'épargne. Notammment, j\'ai aidé au développement\
                   de nouvelles fonctionnalités en back avec le framework Laravel et développement de front avec\
                   Laravel Blade, HTTP et Javascript. L\'organisation du travail était en méthode agile avec le modèle\
                   Scrumban, c\'est à dire sous forme de sprint d\'un mois avec des réunions journalières tel la méthode\
                   Scrum mais également sous forme de tickets organisés sur un tableau tel la méthode Kanban.',
    date : '03/2022 - 02/2023',
  },
  {
    title : 'Développeur PHP Full Stack (Stage à temps partiel)',
    subtitle : 'Greendid',
    description : 'Start up constitué de 3 personnes dont 1 CTO. J\'ai participé au développement d\'une application web\
                  de marketplace C2B de revente de produits high tech. J\'ai aidé au développement d\'un serveur API rest\
                  en Laravel. J\'ai également travaillé sur la refonte du front de l\'application en vue.js et bootstrap.',
    date : '09/2021 - 02/2022',
  },
  {
    title : 'Développeur Python (Stage)',
    subtitle : 'Maisons du Monde',
    description : 'Intégré dans le groupe de data scientist de la compagnie, j\'ai eu pour mission de migrer les scripts\
                  en Python 2 vers Python 3 permettant la gestion et l\'analyse des données de l\'entreprise sur leur\
                  ventes. J\'ai également travaillé sur des tests unitaire correspondant à ces migrations de codes.',
    date : '03/2020 - 08/2020',
  },
  {
    title : 'Développeur C# (Stage)',
    subtitle : 'FB04',
    description : 'Start up tout juste constitué, son objet se porte sur les modélisations 3D et des applications\
                  d\'affichage de modèles 3D. J\'y ai étudié OpenGL ES pour la visualisation 3D sur mobile',
    date : '11/2018 - 12/2018',
  },
]

const otherExp = [
  {
    title : 'Employé polyvalent (Entreprise Familiale)',
    subtitle : 'Papan',
    description : 'Durant mon temps libre, j\'aide parfois au traiteur de ma famille. C\'est ici que l\'on m\'a inculqué\
                  l\'écoute et à servir les clients en travaillant au comptoir et au service de table.',
    date : '01/2008 - Aujourd\'hui',
  },
  {
    title : 'Comptable (Alternance)',
    subtitle : 'Ad Valorem',
    description : 'Avant de devenir développeur, j\'ai fait de la comptabilité en tant qu\'apprenti dans ce cabinet\
                  comptable. J\'ai notamment fait le suivi de plusieurs dossiers clients en enregistrant les transactions\
                  ',
    date : '12/2014 - 08/2016',
  },
]

const educations : {title : string; subtitle : string; description : string; date : string} [] = [
  {
    title : 'Expertise de la technologie et de l\'innovation',
    subtitle : 'EPITECH PARIS',
    description : '',
    date : '2017- 2022'
  },
  {
    title : 'Diplôme de Comptabilité et de Gestion',
    subtitle : 'Lycée Teilhard de Chardin',
    description : '',
    date : '2011 - 2012 / 2014 - 2017'
  },
  {
    title : 'BTS Comptabilité et Gestion des Organisations',
    subtitle : 'Lycée Teilhard de Chardin',
    description : '',
    date : '2012 - 2014'
  },
  {
    title : 'Bac S - Science de l\'ingénieur',
    subtitle : 'Lycée édouard branly',
    description : '',
    date : '2011'
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
            <h1>Didier <span style={{"color":"#A13BBD"}}>CHENG</span></h1>
            <div className={styles.sectionSubtitle}>
              92, Avenue Magellan 
              - 94000 Créteil 
              - 06 27 91 39 13 
              - <span style={{"color":"#A13BBD"}}>chengdidier@gmail.com</span>
            </div>
            <div className={styles.aboutText}>
              Développeur React travaillant principalement en méthode agile.
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

            {experiences.map( (data) => {
              return (
                <ExperienceFrame
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  date={data.date}
                />
              )
            })}

            <h2 style={{"margin-top": "100px"}}>Autres expériences</h2>

            {otherExp.map( (data) => {
              return (
                <ExperienceFrame
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  date={data.date}
                />
              )
            })}

          </div>
        </section>

        <section id="formationSection">
          <div className={styles.coreMargin}>
            <h2>Formations</h2>

            {educations.map( (data) => {
              return (
                <ExperienceFrame
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  date={data.date}
                />
              )
            })}
          </div>
        </section>

        <section id="skillSection">
          <div className={styles.coreMargin}>
            <h2>Compétences</h2>

            <div className={styles.experienceSubtitle}>Langages de programmation et Frameworks</div>
            <ul className={styles.socialLink}>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/html_logo.png"
                    alt="HTML"
                    width={75}
                    height={100}
                  />
                </div>
              </li>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/css_logo.png"
                    alt="CSS"
                    width={75}
                    height={100}
                  />
                </div>
              </li>
            </ul>

            <ul className={styles.socialLink}>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/js_logo.png"
                    alt="Javascript"
                    width={75}
                    height={100}
                  />
                </div>
              </li>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/react_logo.png"
                    alt="React JS"
                    width={100}
                    height={100}
                  />
                </div>
              </li>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/node_logo.png"
                    alt="Node JS"
                    width={125}
                    height={100}
                  />
                </div>
              </li>
            </ul>

            <ul className={styles.socialLink}>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/php_logo.png"
                    alt="PHP"
                    width={100}
                    height={100}
                  />
                </div>
              </li>
              <li>
                <div className={styles.skillCircle}>
                  <Image
                    src="/laravel_logo.png"
                    alt="Laravel"
                    width={100}
                    height={100}
                  />
                </div>
              </li>
            </ul>

          </div>
        </section>

        <section id="portfolioSection">
          <div className={styles.coreMargin}>
            <h2>Portfolio</h2>

            <div className={styles.experienceInfo}>
              <h3>Page Didier Cheng (Ici même)</h3>
              <div className={styles.experienceSubtitle}>
                <a href='https://github.com/Vangnex/portfolio' target='_blank'>Lien Github</a>
              </div>
              <p>
                Introduction à React, au HTML et CSS. Création d'une page web servant de présentation, CV et Portfolio.
                Site constamment mis à jour.
              </p>
            </div>

          </div>
        </section>

        <section id="interestSection">
          <div className={styles.coreMargin}>
            <h2>Intérêts</h2>
            <p>
              En dehors de la programmation, je suis quelqu'un de plutôt casanier mais qui apprend à sortir de sa zone
              de confort petit à petit. J'aime les jeux vidéos, notamment des titres comme "Super Robot Taisen",
              "Castlevania", "Monster Hunter", "Pokemon" ou encore "Armored Core". J'aime également la culture
              japonaise ainsi que les Mechas (Notamment les séries Gundam).
              J'aime également parler et faire un peu de cuisine si l'occasion se présente.
            </p>
          </div>
        </section>

      </core>

    </main>
  )
}
