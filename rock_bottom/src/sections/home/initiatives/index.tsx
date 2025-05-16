import Image from "next/image";
import InitiativeImg from "../../../../public/assets/Today.png";
import styles from "./styles.module.scss";
import { initiate } from "@/data";
import Button from "@/components/buttons";

const Initiatives = () => {
  return (
    <div className={styles.initiatives_cont}>
      <div className={styles.header}>
        <h1>Support Rock Bottom Initiative</h1>
        <div>
          <Image src={InitiativeImg} alt="Support" />
        </div>
      </div>
      <div className={styles.paragraph}>
        <p>Help make our community a better place for all.</p>
      </div>
      <div className={styles.cards}>
        {initiate.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            style={{
              backgroundImage: `url(${item.BG.src})`,
            }}
          >
            <div className={styles.overlay}></div>
            <div className={styles.texts}>
              <h2>{item.heading}</h2>
              <p>{item.para}</p>
            </div>
            <Button label="Learn More" className={styles.btn} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
