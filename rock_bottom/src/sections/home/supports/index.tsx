import styles from './styles.module.scss'
import {supports} from '../../../data'

const Supports = () => {
  return (
    <div className={styles.support_cont}>
        <div className={styles.support}>
            <h1>our Supporters</h1>
         <div className={styles.line}></div>
        </div>
        <div className={styles.support_logo}>
            {supports.map((support) => 
                <div key={support.id} className={styles.img_support}>
                    <img key={support.id} src={support.img.src} alt="support" />
                </div>
            )}
        </div>
    </div>
  )
}

export default Supports