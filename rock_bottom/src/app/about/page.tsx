import NavBar from '@/features/navs'
import styles from './styles.module.scss'
import FooterSection from '@/sections/home/footer'
import SickleCell from '../../../public/assets/sickle-cell.png'
import Treatment from '../../../public/assets/treatment-sickle-cell.png'
import Foundation from '../../../public/assets/sickle-cell-foundation.png'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <div className={styles.about_cont}>
      <section className={styles.about_section}>
        <div className={styles.about_left}>
          <div className={styles.about_label_wrap}>
            <span className={styles.about_label_line}></span>
            <span className={styles.about_label}>Who we are</span>
          </div>
          <h1>We are a non-<br />governmental<br />organization</h1>
        </div>
        <div className={styles.about_right}>
          <h3>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </h3>
          <div className={styles.about_right_content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          
          </div>
        </div>
      </section>

      <section className={styles.goal_section}>
        <div className={styles.goal_inner}>
          <div className={styles.goal_left}>
            <h1>
              Our goal is to<br />
              provide inclu
          
              sive care for people with<br />
              special needs
            </h1>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.<br />
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <button className={styles.goal_btn}>See more</button>
          </div>
          <div className={styles.goal_right}>
            <div className={styles.goal_event}>
              <Image
                src={SickleCell}
                alt="Sickle Cell Awareness"
                className={styles.goal_event_img}
              />
              <div className={styles.goal_event_content}>
                <h4>Sickle Cell Awareness Month</h4>
                <span className={styles.goal_event_date}>10TH SEPTEMBER 2024</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
              </div>
            </div>
            <div className={styles.goal_event}>
              <Image
                src={Treatment}
                alt='treatment'
                className={styles.goal_event_img}
              />
              <div className={styles.goal_event_content}>
                <h4>Sickle Cell Awareness Month</h4>
                <span className={styles.goal_event_date}>10TH SEPTEMBER 2024</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
              </div>
        
            </div>
            <div className={styles.goal_event}>
              <Image
                src={Foundation}
                alt="Sickle Cell Foundation"
                className={styles.goal_event_img}
              />
              <div className={styles.goal_event_content}>
                <h4>Sickle Cell Awareness Month</h4>
                <span className={styles.goal_event_date}>10TH SEPTEMBER 2024</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className={styles.contact_section}>
        <div className={styles.contact_inner}>
          <div className={styles.contact_left}>
            <h1>We&apos;d love to hear<br />from you</h1>
            <p>
              Have any question in mind or want to enquire? Please feel free to<br />
              contact us through the form or the following details.
            </p>
          </div>
          <div className={styles.contact_right}>
            <span className={styles.contact_label}>CONTACT US</span>
            <h3>Let&apos;s talk!</h3>
            <div className={styles.contact_details}>
              <span>hello@largerthani.com</span>
              <span>+234 09012346514</span>
            </div>
            <hr className={styles.contact_divider} />
            <div className={styles.contact_office}>
              <span className={styles.contact_office_label}>Volunteer Office</span>
              <span>8 Brewery Drive, Lagos, Nigeria.</span>
            </div>
            <div className={styles.contact_socials}>
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default About