import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DarkMode from '../darkMode/darkMode';
import { Row, Col, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="text-center">
            <NavLink to="/">
                <Navbar.Brand>
                    <Row className="justify-content-center align-items-center text-center">
                        <Col xs={12} md={6}>
                            <Image src="./src/img/logo/54345976_transparent_edit.png" alt="logo" className="header-image" fluid />
                        </Col>
                    </Row>
                </Navbar.Brand>
            </NavLink>
        </Container>
      </Navbar>

      <Container className="custom-nav-container">
        <Nav className="custom-nav">
          <Nav.Item>
            <NavLink to="/">Inicio</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/About">Sobre Mi</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Services">Servicios</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Project">Proyectos</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Contact">Contacto</NavLink>
          </Nav.Item>

          <div className="switch" id="switch">
            <DarkMode />
          </div>

        </Nav>
      </Container>
    </div>
  );
}

export default HeaderPage;