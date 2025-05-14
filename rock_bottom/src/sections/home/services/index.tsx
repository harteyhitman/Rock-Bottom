import Button from "@/components/buttons";
import styles from "./styles.module.scss";
import { IoPlay } from "react-icons/io5";

const Services = () => {
  return (
    <>
      <div className={styles.who_we_are}>
        <div className={styles.non_gov}>
          <div className={styles.line_cont}>
            <div className={styles.small_line}></div>
            <span className={styles.small_text}>Who we are</span>
          </div>
          <h2>
            We are a non- <br />
            governmental <br /> organization
          </h2>
        </div>
        <div className={styles.non_gov1}>
          <div>
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </div>
      <div className={styles.special_needs_conts}>
        <div className={styles.needs1}>
          <h2>We provide a place for   children with special  needs</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. ‍Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>

          <Button label="Learn more" className={styles.learn_more_btn} />
        </div>
        <div className={styles.needs_vid}>
          <div className={styles.play}>
            <IoPlay />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
