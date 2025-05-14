import Button from "@/components/buttons";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_section_container}>
      <div className={styles.awareness_text}>
        <h2 className={`${styles.cell_text}`}>
          Sickle Cell <br /> Awareness one <br /> story at a Time
        </h2>
           <div className={styles.cta}>
        <Button
          label="Donate Now"
          variant="primary"
          className={styles.hero_btn}
        />

        <Button
          label="Play Video"
          variant="primary"
          className={styles.hero_video_btn}
          showVideoIcon
          videoIconPosition="left"
        />
      </div>
      </div>
   
      <div className={styles.touch_line}>
        <span className={styles.touch_1}>
          Edo state women and youth development
        </span>
        <hr className={styles.touch_2}></hr>
        <span className={styles.touch_3}>
          Stories That Touch
        </span>
      </div>
    </div>
  );
};
export default Hero;
