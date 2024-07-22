import React from 'react'
import styles from "../Styles/principal.module.css";
const Principal = () => {
  return (
    <>
       <div className={styles.padre}>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>

              <div className={styles.userCardInfo}>
                <h4>Hola, mi nombre es:</h4>
                
                <h2 className={styles.name}>Joaquín Sebástian Zuin</h2> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Principal
