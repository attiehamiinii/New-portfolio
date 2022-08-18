import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import { FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atieh-amini/">
                <FaLinkedin className="icon-1" color="#fff" size="1.5rem" />
              </a>
              <a href="#">
                <FaFacebookSquare className="icon-1" color="#fff" size="1.5rem" />
              </a>
              <a href="https://github.com/attiehamiinii">
                <FaGithub className="icon-1" color="#fff" size="1.5rem" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
