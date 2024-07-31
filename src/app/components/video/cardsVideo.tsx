import React, { useEffect, useState } from "react";
import Link from 'next/link';
import styles from "../Styles/cardVideo.module.css";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2'

const CardsVideo = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  const urlVideo1 = "https://youtu.be/haLTdlVM7EA";
  const urlVideo2 = "https://youtu.be/hXJ0JxrilB0";
  const urlVideo3 = "https://youtu.be/IfFnni3lTHw";


  const otonProducion = () => {
    Swal.fire({
      title: "Lo siento no se puede ver",
      text: "Está en Desarrollo",
      icon: "warning",
    });
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading1(false);
    }, 2000);
    const timer2 = setTimeout(() => {
      setLoading2(false);
    }, 2000);
    const timer3 = setTimeout(() => {
      setLoading3(false);
    }, 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Proyecto</h1>
        </div>
        <div className={styles.cards}>
          <Card className={styles.card}>
            {loading1 ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <Card.Body>
                <Card.Title className={styles.TitleName}>Net-Makers</Card.Title>
                <div className={styles.videoContenedor}>
                  <ReactPlayer
                    url={urlVideo1}
                    controls
                    muted
                    className={styles.video}
                    width="100%"
                    height="200px"
                    onEnded={() => {
                      Swal.fire("Video de Net-Makers ha Finalizado!");
                    }}
                  />
                </div>
                <ListGroup variant="flush" className={styles.ListGroup0}>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Frontend:</u>
                        </strong>{" "}
                        Next.js, React, TypeScript, CSS
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Backend:</u>
                        </strong>{" "}
                        Nodejs, Express, Cord, Jsonwebtoken, Bcrypts,
                        Cokie-parse
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Motores Base de Datos:</u>
                        </strong>{" "}
                        MongoDB
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                <div className={styles.buttonBlock}>
                  <div className={styles.buttonProfile}>
                    <div className={styles.buttons}>
                    <Link
                    href="https://www.thenetmakers.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verlo en la web
                  </Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            )}
          </Card>
          <Card className={styles.card}>
            {loading2 ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <Card.Body>
                <Card.Title className={styles.TitleName}>Star Wars</Card.Title>
                <div className={styles.videoContenedor}>
                  <ReactPlayer
                    url={urlVideo2}
                    controls
                    muted
                    className={styles.video}
                    width="100%"
                    height="200px"
                    onEnded={() => {
                      Swal.fire("Video de Star Wars ha Finalizado!");
                    }}
                  />
                </div>
                <ListGroup variant="flush" className={styles.ListGroup0}>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Frontend:</u>
                        </strong>{" "}
                        Next.js, React, JavaScript, CSS
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Backend:</u>
                        </strong>{" "}
                        Nodejs, Express
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Motores Base de Datos:</u>
                        </strong>{" "}
                        MongoDB
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                <div className={styles.buttonBlock}>
                  <div className={styles.buttonProfile}>
                    <div className={styles.buttons}>
                    <Link
                    href="https://people-start-wars-pd8xnmyzq-joakozuin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verlo en la web
                  </Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            )}
          </Card>
          <Card className={styles.card}>
            {loading3 ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <Card.Body>
                <Card.Title className={styles.TitleName}>
                Ecommerce
                </Card.Title>
                <div className={styles.videoContenedor}>
                  <ReactPlayer
                    url={urlVideo3}
                    controls
                    muted
                    className={styles.video}
                    width="100%"
                    height="200px"
                    onEnded={() => {
                      Swal.fire("Video de Ecommerce ha Finalizado!");
                    }}
                  />
                </div>
                <ListGroup variant="flush" className={styles.ListGroup0}>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Frontend:</u>
                        </strong>{" "}
                        Next.js, React, JavaScript, CSS
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Programación Backend:</u>
                        </strong>{" "}
                        Nodejs, Express, Cord, Jsonwebtoken, Bcrypts, Cokie-parse
                      </p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className={styles.listItem0}>
                    <div className={styles.strong}>
                      <p>
                        <strong>
                          <u>Motores Base de Datos:</u>
                        </strong>{" "}
                        MongoDB
                      </p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
                <div className={styles.buttonBlock}>
                  <div className={styles.buttonProfile}>
                    <div className={styles.buttons}>
                    <Link
                    href=""
                    rel="noopener noreferrer"
                    onClick={otonProducion}
                  >
                    Verlo en la web
                  </Link>
                    </div>
                  </div>
                </div>
              </Card.Body>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default CardsVideo;
