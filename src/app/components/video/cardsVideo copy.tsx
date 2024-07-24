"use client";

import React from "react";
import styles from "../Styles/cardVideo.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ReactPlayer from 'react-player'

const cardsVideo = () => {

  const Video1 = "https://www.youtube.com/watch?v=YqJ09Flxt1M&list=RDYqJ09Flxt1M&start_radio=1"
  
  return (
    <div>
      <div className={styles.title01}>
        <h1>Proyecto.</h1>
      </div>

      <div className={styles.padre}>
        <Card className={styles.BordeCart}>
          <div className={styles.videoContenedor}>
             <ReactPlayer url={Video1} 
             controls
             muted
             width={400}
             height={300}
             />
          </div>
          <div>
            <Card.Body>
              <Card.Title>Tipo de proyecto: ecommerce </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>Frontend:</h4>CSS JavaScript TypeScript React Next.js
                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </div>
        </Card>
        {/*  */}
      </div>
    </div>
  );
};

export default cardsVideo;
