"use client";
import React from "react";
import styles from "../Styles/cardVideo.module.css";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2'

const cardsVideo = () => {

  const urlVideo1:string = "https://www.youtube.com/watch?v=YqJ09Flxt1M&list=RDYqJ09Flxt1M&start_radio=1"
  const urlVideo2:string = 'https://www.youtube.com/watch?v=LsQATIpnijM'
  const urlVideo3:string = 'https://www.youtube.com/watch?v=kSn9xf6mVWQ&list=RDkSn9xf6mVWQ&start_radio=1'
 
  return (
    <div>
      <div className={styles.title01}>
        <h1>Proyecto.</h1>
      </div>

      <div className={styles.padre}>
        <Card  className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}>Se Acabó</Card.Title>
            <div className={styles.videoContenedor}>
              <ReactPlayer
                url={urlVideo1}
                controls
                muted
                className={styles.video}
                width={360}
                height={300}
                onEnded={() => {
                  Swal.fire("Video de ecommerce ha Finalizado!");
                }}
              />
            </div>
            <ListGroup variant="flush" className={styles.ListGroup0}>
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Frontend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Backend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Motores Base de Datos:</strong></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        {/*  */}
        <Card className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}>
              TANTA GLORIA, TANTO FUTBOL
            </Card.Title>
            <div className={styles.videoContenedor}>
              <ReactPlayer
                url={urlVideo2}
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
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Frontend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Backend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Motores Base de Datos:</strong></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

        {/*  */}
        <Card className={styles.BordeCart}>
          <Card.Body>
            <Card.Title className={styles.TitleName}>Hoy</Card.Title>
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
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Frontend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Programación Backend:</strong></ListGroup.Item>
              <ListGroup.Item className={styles.listItem0} ><strong>Motores Base de Datos:</strong></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default cardsVideo;
