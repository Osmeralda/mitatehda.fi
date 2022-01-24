import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default function Ruka() {
    return (
        <div>
            <Layout>
            <Container sm={4} md={4} lg={4}>
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
                <div className={styles.keskus}>
                    <Container>
                    <h1>Tervetuloa Rukalle</h1>
                    <h2>Täältä löydät kaikki aktiviteetit Rukalta</h2>
                    </Container>
                </div>
            </Layout>
            </div>
    )
}
