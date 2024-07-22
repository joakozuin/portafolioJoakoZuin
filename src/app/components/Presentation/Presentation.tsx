import React from 'react'
import Image from 'next/image'
import Stack from 'react-bootstrap/Stack';
import styles from "../Styles/presentacion.module.css";
import { FaFacebook, FaInstagram, FaLinkedin,FaGithub } from "react-icons/fa6";

import Joako from '../../assets/img/imagenJSZ.jpg'
import Principal from './Principal';
import InfoPrincipal from './infoPrincipal'

const Presentation = () => {
  return (
    <>
    <Principal/>
      <div className={styles.padre}>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>
              <div className={styles.userCardImg}>
                <Image
                  className={styles.imagen}
                  src={Joako}
                  width={310}
                  height={310}
                  alt="Picture of the author"
                  priority={true}
                />
              </div>
              <div className={styles.userCardInfo}>
                <p> Me recibi en el años 2023</p>
                <p> Soy Análista de Sistema y Programador Full Stack</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoPrincipal/>
    </>
  );
}

export default Presentation
