import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import styles from "../Styles/experiencia.module.css";
const Experiencia = () => {
  return (
    <div>
      {/*  */}
      <div className={styles.padre}>
        <h1 className={styles.title}>Conocimiento.</h1>
        <div className={styles.contenedorImg}>
          <div className={styles.wrapper}>
            <div className={styles.userCard}>
              <div className={styles.userCardInfo}>
                <Row>
                  <Col xs={6} md={4}>
                    <Table responsive bordered hover variant="dark">
                      <thead>
                        <tr className="table-info text-center">
                          <th></th>
                          <th >Programación Frontend</th>
                        </tr>
                      </thead>
                      <tbody >
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
                    </Table>
                  </Col>
                </Row>
              </div>
              <div className={styles.userCardInfo}>
                <Row>
                  <Col xs={6} md={4}>
                    <Table responsive bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Programación Backend</th>
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
                    </Table>
                  </Col>
                </Row>
              </div>
              <div className={styles.userCardInfo}>
                <Row>
                  <Col xs={6} md={4}>
                    <Table responsive bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Motores de base de datos</th>
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
                    </Table>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Experiencia;
