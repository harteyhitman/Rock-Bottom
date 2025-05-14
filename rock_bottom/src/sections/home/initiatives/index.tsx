import Image from 'next/image'
import InitiativeImg from '../../../../public/assets/Today.png'
import styles from './styles.module.scss'

const Initiatives = () => {
  return (
    <div className={styles.initiatives_cont}>
        <div className={styles.header}>
            <h1>Support Rock Bottom Initiative</h1>
           <Image src={InitiativeImg} alt="Support"  />
        </div>
    </div>
  )
}

export default Initiatives