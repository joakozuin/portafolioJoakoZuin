import React from "react";

import styles from "../Styles/experiencia.module.css";

const Experiencia = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Conocimiento</h1>
      <div className={styles.tablesContainer}>
        <div className={styles.tableWrapper}>
          <h2 className={styles.subtitle}>Programación Frontend</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>HTML</td>
              </tr>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>CSS</td>
              </tr>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>TypeScript</td>
              </tr>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>React</td>
              </tr>
              <tr>
                <td className={styles.porotitoFron}></td>
                <td>Next.js</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tableWrapper}>
          <h2 className={styles.subtitle}>Programación Backend</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Nodejs</td>
              </tr>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Express</td>
              </tr>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Cord</td>
              </tr>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Jsonwebtoken</td>
              </tr>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Cokie-parse</td>
              </tr>
              <tr>
                <td className={styles.porotitoBack}></td>
                <td>Bcrypts</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tableWrapper}>
          <h2 className={styles.subtitle}>Motores de base de datos</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.porotitoBD}></td>
                <td>MongoDB y Atlas</td>
              </tr>
              <tr>
                <td className={styles.porotitoBD}></td>
                <td>SQL Server</td>
              </tr>
              <tr>
                <td className={styles.porotitoBD}></td>
                <td>MySQL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experiencia;
