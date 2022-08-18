import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import { FaLinkedin, FaFacebookSquare, FaGithub } from 'react-icons/fa';

const NavbarPage = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScrolled);
    return () => window.removeEventListener('scroll', onScrolled);
  }, []);
  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => onUpdateActiveLink('home')}
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => onUpdateActiveLink('skills')}
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => onUpdateActiveLink('projects')}
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/atieh-amini/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon-1" color="#fff" size="1.5rem" />
              </a>
              <a href="#">
                <FaFacebookSquare className="icon-1" size="1.5rem" color="#fff" />
              </a>
              <a href="https://github.com/attiehamiinii" target="_blank" rel="noreferrer">
                <FaGithub className="icon-1" size="1.5rem" color="#fff" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log('contact us')}>
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
