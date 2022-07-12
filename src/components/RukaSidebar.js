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
          <Link to="/ruka">Aktiviteetit</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/laskettelu">Laskettelu</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/kelkkailu">Kelkkailu</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/hiihto">Hiihto</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/vaellus">Vaellusreitit</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/lumikengat">Lumikengät</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/kaupat">Kaupat</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/ravintolat">Ravintolat</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/paljut">Kylpytynnyrit</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/aktiviteetit">Muut Aktiviteetit</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/elamykset">Elämykset</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/rentoutuminen">Hyvinvointi</Link>
          </li>
          <li className='liSidebar'>
          <Link to="/ruka/palvelut">Muut Palvelut</Link>
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
