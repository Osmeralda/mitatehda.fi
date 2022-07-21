import React from 'react'
import * as styles from '../styles/global.css'
import { Link } from 'gatsby'
import { Container, Col, Navbar, Nav } from 'react-bootstrap'


const RukaSidebar = ({title}) => {

  return (
    <div>
    <Container>
      <Col>

        <Navbar className='drpdwn'>
            <Nav>
          <ul className='ul'>
          <li className='liHead'>
          <Link to="/ruka" className='width100side'>Aktiviteetit</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/laskettelu" className='width100side'>Laskettelu</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/kelkkailu" className='width100side'>Kelkkailu</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/hiihto" className='width100side'>Hiihto</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/vaellus" className='width100side'>Vaellusreitit</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/lumikengat" className='width100side'>Lumikengät</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/kaupat" className='width100side'>Kaupat</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/ravintolat" className='width100side'>Ravintolat</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/paljut" className='width100side'>Kylpytynnyrit</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/aktiviteetit" className='width100side'>Muut Aktiviteetit</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/elamykset" className='width100side'>Elämykset</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/rentoutuminen" className='width100side'>Hyvinvointi</Link>
          </li>
          <li className='linkSidebar'>
          <Link to="/ruka/palvelut" className='width100side'>Muut Palvelut</Link>
          </li>
          </ul>
          </Nav>
        </Navbar>
        </Col>
    </Container>
    </div>
)
}

 export default RukaSidebar
