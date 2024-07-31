import React from "react";
import styles from "../Styles/Networks.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  
} from "react-icons/fa6";

import { useRouter } from "next/navigation";

const Networks = () => {
  const router = useRouter();

  const handlerBotonFece = () => {
    /* router.push(`${process.env.URL_LINK_Facebook}`) */
    router.push(`https://www.facebook.com/joaquin.zuin`);
  };
  const handlerBotonLin = () => {
    router.push(`https://www.linkedin.com/in/joaquin-zuin-21710724a/`);
  };

  const handlerBotonInt = () => {
    /* router.push(`${process.env.URL_LINK_Instagram}`) */
    router.push(`https://www.instagram.com/joaquinzuin?igsh=NXkwZzUxODllY2Fi`);
  };
  const handlerBotonGithb = () => {
    /* router.push(`${process.env.URL_LINK_Github}`) */
    router.push(`https://github.com/joakozuin`);
  };
  return (
    <>
      <div className={styles.padre}>
        <h1>Mi Redes Sociales</h1>
        <div className={styles.socialsIconsContainer}>
          <button onClick={handlerBotonFece} className={styles.buttonIncon}>
            <FaFacebook size={28} />
          </button>
          <button onClick={handlerBotonInt} className={styles.buttonIncon}>
            <FaInstagram size={28} />
          </button>
          <button onClick={handlerBotonLin} className={styles.buttonIncon}>
            <FaLinkedin size={28} />
          </button>

          <button onClick={handlerBotonGithb} className={styles.buttonIncon}>
            <FaGithub size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Networks;
