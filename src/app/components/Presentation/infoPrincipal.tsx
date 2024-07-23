import React from "react";
import styles from "../Styles/infoPrincipal.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const infoPrincipal = () => {
  return (
    <>
      <div className={styles.padre}>
        <h1 className={styles.title}>Objetivos laborales.</h1>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>
              <div className={styles.userCardInfo}>
                <Container fluid>
                  <Row>
                    <Col>
                      <ul>
                        {/* <li>
                          Cuento con gran capacidad para resolver problema.
                        </li>
                        <li>
                          Me caracterizó por mi responsabilidad y búsqueda de
                          alternativas de solución.
                        </li> */}
                        <li>
                          Me destaco por mi capacidad para aprender y trabajar
                          en equipo.
                        </li>
                        <li>
                        Mi principal objetivo es desempeñarme en una empresa que valore 
                        la integración de jóvenes que inicien su actividad laboral ofreciendo 
                        posibilidad de progreso y crecimiento personal. 
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default infoPrincipal;
