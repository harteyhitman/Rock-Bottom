import styles from "./styles.module.scss";
import Logo from "../../../public/assets/footer-logo.png";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footer_cont}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Rockbottom Initiative. All rights reserved</p>
      </div>
      <div className={styles.social_media}>
        <div><FaInstagram /></div> 
        <div><FaTwitter /></div> 
        <div><FaSquareYoutube /></div> 
      </div>
    </div>
  );
};

export default Footer;
