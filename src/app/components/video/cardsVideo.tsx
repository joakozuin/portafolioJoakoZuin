"use client";
import React from "react";
import Link from 'next/link';
import styles from "../Styles/cardVideo.module.css";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2'

/* import NetMakers from '../../assets/vid/NetMakers.mp4' */


const cardsVideo = () => {

 
  const urlVideo1 = "https://youtu.be/haLTdlVM7EA"
  const urlVideo2 = 'https://youtu.be/hXJ0JxrilB0'
  const urlVideo3 = 'https://www.youtube.com/watch?v=kSn9xf6mVWQ&list=RDkSn9xf6mVWQ&start_radio=1'
 
  const otonProducion = ()=>{
    Swal.fire({
      title: "Lo siento no se puede ver",
      text: "Está en Produccón",
      icon: "warning"
    });
  }
  return (
    <div>
      <div className={styles.title01}>
        <h1>Proyecto.</h1>
      </div>

      <div className={styles.padre}>
        <Card className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}> Net-Makers</Card.Title>
            <div className={styles.videoContenedor}>
              <ReactPlayer
                url={urlVideo1}
                controls
                muted
                className={styles.video}
                width={360}
                height={300}
                onEnded={() => {
                  Swal.fire("Video de Net-Makers ha Finalizado!");
                }}
              />
            </div>
            <ListGroup variant="flush" className={styles.ListGroup0}>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Frontend:</u></strong> Next.js, React,
                    TypeScript, CSS
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Backend:</u></strong> Nodejs, Express,
                    Cord, Jsonwebtoken, Bcrypts, Cokie-parse
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Motores Base de Datos:</u></strong> MongoDB
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
        </Card>
        {/*  */}
        <Card className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}>Star Wars</Card.Title>
            <div className={styles.videoContenedor}>
              <ReactPlayer
                url={urlVideo2}
                controls
                muted
                className={styles.video}
                width={360}
                height={300}
                onEnded={() => {
                  alert("Video de Star Wars ha Finalizado");
                }}
              />
            </div>
            <ListGroup variant="flush" className={styles.ListGroup0}>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Frontend:</u></strong> Next.js, React,
                    JavaScript, CSS
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Backend:</u></strong> Nodejs, Express,
                    
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Motores Base de Datos:</u></strong> MongoDB
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
        </Card>

        {/*  */}
        <Card className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}>Ecommerce</Card.Title>
            <div className={styles.videoContenedor}>
              <ReactPlayer
                url={urlVideo3}
                controls
                muted
                className={styles.video}
                width={360}
                height={300}
                onEnded={() => {
                  alert("Video Finalizado");
                }}
              />
            </div>
            <ListGroup variant="flush" className={styles.ListGroup0}>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Frontend:</u></strong> Next.js, React,
                    TypeScript, CSS, ReCharts
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Programación Backend:</u></strong> Nodejs, Express,
                    Cord,Jsonwebtoken, Bcrypts
                  </p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item className={styles.listItem0}>
                <div className={styles.strong}>
                  <p>
                    <strong><u>Motores Base de Datos:</u></strong> MongoDB
                  </p>
                </div>
              </ListGroup.Item>
            </ListGroup>
            <div className={styles.buttonBlock}>
              <div className={styles.buttonProfile}>
                <div className={styles.buttons}>
                  <Link href=""  rel="noopener noreferrer" onClick={otonProducion}>
                    Verlo en la web
                  </Link>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default cardsVideo;
