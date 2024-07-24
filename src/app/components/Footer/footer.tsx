"use client"
import styles from "../Styles/footer.module.css";
import Nav from 'react-bootstrap/Nav';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
const footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.policyContactAnnounce}>
          <span className={styles.Logo}>JSZ</span>
        </div>

        
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <div>&copy; Derechos reservados {new Date().getFullYear()} </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>


        <div className={styles.socials}>
          {/* <span>Mi Redes Sociales</span> */}
          <div className={styles.socialsIconsContainer}>
            {/* <FaFacebook size={18} /> */}
            {/* <div className={styles.iconContainer}>
                          <FontAwesomeIcon icon={faInstagram} className={styles.instagramIcon} />
                        </div> */}
           {/*  <FaInstagram size={18} className={styles.instagramIcon} />
            <FaTelegram size={18} /> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default footer;