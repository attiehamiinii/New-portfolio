import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import Typical from 'react-typical';
import header from '../assets/img/header-img.png';
import TrackVisibility from 'react-on-screen';
import resume from '../assets/resume/ATIEH AMINI-React developer.docx';
import 'animate.css';
const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline"> Welcome to my portfolio</span>
                  <h1>
                    {`Hi I'm `}
                    {''}
                  </h1>
                  <h2>
                    <Typical
                      loop={Infinity}
                      wrapper="span"
                      steps={[
                        'Frontend Developer',
                        3000,
                        'UI/UX Designer',
                        3000,
                        'Web Designer',
                        3000,
                        'App Developer',
                        3000,
                      ]}
                    />
                  </h2>
                  <p>Web Developer I design and build applications</p>
                  <a href={resume} target="_blank" rel="noreferrer">
                    <Button variant="dark" size="lg">
                      Get Resume
                      <FaDownload size={25} />
                    </Button>{' '}
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={header} alt="headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
