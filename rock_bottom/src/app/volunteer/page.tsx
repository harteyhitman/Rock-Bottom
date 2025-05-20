import styles from "./styles.module.scss";
import Image from "next/image";
import VolunteerImg from "../../../public/assets/volunteer.png"; // Replace with your actual image path
import NavBar from "@/features/navs";

const Volunteer = () => {
  return (
    <>
      <NavBar />
      <div className={styles.volunteer_cont}>
        <div className={styles.left}>
          <Image src={VolunteerImg} alt="Volunteer" className={styles.img} />
        </div>
        <div className={styles.right}>
          <div className={styles.header}>
            <h1>Volunteer Today!</h1>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            varius enim in eros elementum tristique.
          </p>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.input_group}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message"
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className={styles.submit_btn}>
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
