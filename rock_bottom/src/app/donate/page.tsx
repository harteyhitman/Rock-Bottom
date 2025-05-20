import NavBar from '@/features/navs'
import styles from './styles.module.scss'
import Image from 'next/image'
import KidsImg from '../../../public/assets/joined-children.png'
import DonateImg from '../../../public/assets/donate-hands.png'
import Button from '@/components/buttons'
import FooterSection from '@/sections/home/footer'

const Donate = () => {
  return (
    <>
      <NavBar />
      <div className={styles.donate_cont}>
        <section className={styles.hero}>
          <div className={styles.hero_left}>
            <h1>Making a donation for<br />our children.</h1>
            <p>
              When you donate, you’re supporting effective care to children with special needs—an investment in the leaders of tomorrow.
            </p>
            <button className={styles.donate_btn}>Donate Now</button>
          </div>
          <div className={styles.hero_right}>
            <Image
              src={DonateImg}
              alt="Donate"
              className={styles.hero_img}
              width={340}
              height={220}
              style={{ borderRadius: '16px', background: '#F8B9C6' }}
            />
          </div>
        </section>
        <section className={styles.impact_section}>
          <div className={styles.impact_img_wrap}>
            <Image
              src={KidsImg}
              alt="Children"
              className={styles.impact_img}
              width={340}
              height={340}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
          <div className={styles.impact_text_wrap}>
            <h2>How we use your donation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </section>
                 <div className={styles.contribute_conts}>
      <div className={styles.contribute}>
        <div className={styles.overlay}></div>
        <h1>
          You can contribute to provide a place for children with special needs!
        </h1>
        <div className={styles.btns}>
          <Button label="Join as a volunteer"  className={styles.btn}/>
          <Button label="Donate Now"  className={styles.btn1}/>
        </div>
      </div>
    </div>
      </div>
    <FooterSection />
    </>
  )
}

export default Donate