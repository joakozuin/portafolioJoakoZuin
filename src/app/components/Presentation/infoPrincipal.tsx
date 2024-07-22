import React from 'react'
import styles from "../Styles/infoPrincipal.module.css";
const infoPrincipal = () => {
  return (
    <>
       <div className={styles.padre}>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>

              <div className={styles.userCardInfo}>
                <ul>
                  <li>Cuento con gran capacidad para resolver problema.</li>
                  <li>Me caracterizó por mi responsabilidad y búsqueda de alternativas de solución.</li>
                  {/* <li>Me gusta trabajar en equipo y aprender de mis compañeros.</li> */}
                  <li>Me destaco por mi capacidad para aprender y trabajar en equipo.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default infoPrincipal
