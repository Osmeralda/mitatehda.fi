import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Link } from 'gatsby'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default function Levi() {
    return (
        <Layout>
            <Container>
                <nav className='text-left'>
             <div className='sidebar'>

                        <Row><Link to="/ruka/laskettelu">Laskettelu</Link></Row>
                        <Row><Link to="/ruka/kelkkailu">Kelkkailu</Link></Row>
                        <Row><Link to="/ruka/hiihto">Hiihto</Link></Row>
                        <Row><Link to="/ruka/vaellus">Vaellusreitit</Link></Row>
                        <Row><Link to="/ruka/kaupat">Kaupat</Link></Row>
                        <Row><Link to="/ruka/elamys">Elämykset</Link></Row>
                        <Row><Link to="/ruka/paljut">Paljut</Link></Row>
                        <Card>
                            <CardBody>
                                <CardTitle className='text-uppercase'>
                                Advertisement
                                </CardTitle>
                                <Image
                                src="https://via.placeholder.com/100x400"
                                alt="advert"
                                fluid
                                style={{ width: '100%'}}
                                />
                            </CardBody>
                        </Card>

            </div>
                </nav>
            </Container>
        <div className={ styles.keskus}>
            <h1>Tervetuloa Leville</h1>
            <h2>Täältä löydät kaikki Levin aktiviteetit</h2>
        </div>
        </Layout>
    )
}
