"use client"
import styles from "../Styles/header.module.css";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className={styles.header} >
        <Container fluid>
          <Navbar.Brand href="/" className={styles.headerLogo} >
                  JSZ
            </Navbar.Brand>
        </Container>
      </Navbar>

      {/*  */}


    </div>
  );
};

export default Header