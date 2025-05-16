import Button from "@/components/buttons";
import styles from "./styles.module.scss";
const Contribute = () => {
  return (
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
  );
};

export default Contribute;
