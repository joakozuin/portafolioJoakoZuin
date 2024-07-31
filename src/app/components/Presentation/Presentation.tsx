import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from "../Styles/presentacion.module.css";
import Joako from '../../assets/img/imagenJSZ.jpg'
import Principal from './Principal';
import InfoPrincipal from './infoPrincipal'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Presentation = () => {

  useEffect(()=>{
    AOS.init({})
  },[])
  return (
    <>
    <Principal/>
      <div className={styles.padre}>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>
              <div className={styles.userCardImg}>
              <div data-aos="fade-right" 
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
              >
                <Image
                  className={styles.imagen}
                  src={Joako}
                  width={310}
                  height={310}
                  alt="Picture of the author"
                  priority={true}
                />
              </div>
              </div>
              <div className={styles.userCardInfo}>
                
                <p className={styles.parrafo}> Me recibi en el años 2023</p>
               
                <p className={styles.parrafo01}> Soy Análista de Sistema y Programador Full Stack</p>
                <p className={styles.parrafo01}> 2 años de Experiencia</p>
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
