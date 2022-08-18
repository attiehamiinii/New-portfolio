import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styl.css';
import colorSharp from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={isVisible ? 'animate__animated animate__fadeInDown' : ''}>
                    <h2>Skills</h2>
                    <p>
                      Front End Developer with 3 years experience in hand code in web and mobile
                      applications development. using an array of technologies like HTML5,CSS3,
                      JavaScript, React/Redux. Expert knowledge of the UI/UX design process and
                      development.Fast learner, hard worker and team player who is proficient in an
                      array of scripting languages and web tools.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <CircularProgressbar value={90} text={`${90}%`} />;<h5>HTML|CSS|JS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={85} text={`${85}%`} />;<h5>REACT|REDUX</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={70} text={`${70}%`} />;<h5>WEB Design</h5>
                </div>
                <div className="item">
                  <CircularProgressbar value={65} text={`${65}%`} />;<h5>ADOBE SUIT</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-left" />
    </section>
  );
};

export default Skills;
