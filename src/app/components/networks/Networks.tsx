import React from "react";
import styles from "../Styles/Networks.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub,FaEnvelope,FaSquareWhatsapp} from "react-icons/fa6";
const Networks = () => {
  return (
    <>
      <div className={styles.padre}>
        <h1>Mi Redes Sociales</h1>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>
              <div className={styles.userCardInfo}>
                
                  <div className={styles.socialsIconsContainer}>
                    <div>
                    <FaFacebook size={27} className={styles.social} />
                    <FaInstagram size={27}  className={styles.social}/>
                    <FaLinkedin size={27}  className={styles.social}/>
                    <FaGithub size={27}  className={styles.social}/>
                    <FaEnvelope size={27} className={styles.social}/>
                    <FaSquareWhatsapp size={27}  className={styles.social}/>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Networks;
