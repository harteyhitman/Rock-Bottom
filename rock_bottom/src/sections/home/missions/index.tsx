import styles from './styles.module.scss'

const Missions = () => {
  return (
    <div className={styles.missions_conts}>
        <div className={styles.our_missions}>
            <h3>our mission</h3>
            <h2>Empower - Support - Educate: Building Resilient Lives</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
        <div className={styles.our_missions}>
            <h3>our Vision</h3>
            <h2>A World Where Every Sickle Cell Warrior Thrives</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
    </div>
  )
}

export default Missions