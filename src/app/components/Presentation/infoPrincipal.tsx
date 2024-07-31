import React from "react";
import styles from "../Styles/infoPrincipal.module.css";
const infoPrincipal = () => {
  return (
    <>
    <h1 className={styles.title}>Objetivos laborales</h1>
       <div className={styles.container}>
      
      <div className={styles.wrapper}>
        <ul>
          <li>Cuento con gran capacidad para resolver problemas.</li>
          <li>Me caracterizó por mi responsabilidad y búsqueda de alternativas de solución.</li>
          <li>Me destaco por mi capacidad para aprender y trabajar en equipo.</li>
          <li>Mi principal objetivo es desempeñarme en una empresa que valore la integración de jóvenes que inicien su actividad laboral ofreciendo posibilidad de progreso y crecimiento personal.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default infoPrincipal;
