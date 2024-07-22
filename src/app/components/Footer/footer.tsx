"use client"
import styles from "../Styles/footer.module.css";
import Nav from 'react-bootstrap/Nav';

const footer = () => {
  return (
    <div className={styles.footer}>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <div >
              &copy; Derechos reservados {new Date().getFullYear()}{" "}
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default footer