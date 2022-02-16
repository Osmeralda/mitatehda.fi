import React from 'react'
import * as styles from '../styles/global.css'
import { Link } from 'gatsby'
import { Container, Col, Navbar, Nav } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'





const RukaSidebar = () => (
  
      <Container>
        <Col>
        <Navbar className='drpdwn'>

            <Nav>
          <ul className='ul'>
          <li className='li'>
          <Link to="/ruka/laskettelu">Laskettelu</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/kelkkailu">Kelkkailu</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/hiihto">Hiihto</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/vaellus">Vaellusreitit</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/lumikengat">Lumikengät</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/kaupat">Kaupat</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/ravintolat">Ravintolat</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/paljut">Kylpytynnyrit</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/elamykset">Elämykset</Link>
          </li>
          <li className='li'>
          <Link to="/ruka/rentoutuminen">Rentoutuminen</Link>
          </li>
          </ul>
          </Nav>
        </Navbar>
        </Col>
        </Container>
)

export default RukaSidebar
