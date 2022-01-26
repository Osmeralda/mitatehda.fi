import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container, Col, Row, Image } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import styled, {createGlobalStyle} from "styled-components"
import { Link, graphql, useStaticQuery } from 'gatsby'
import RukaSidebar from '../../components/RukaSidebar'

  export default function Ruka() {

  return (
        <div>
            <Layout>
            <Container>
                <RukaSidebar />
            </Container>
                <div className={styles.keskus}>
                    <Container>
                    <h1 className={styles.keskus}>Tervetuloa Rukalle</h1>
                    <h2 className={styles.keskus}>Täältä löydät kaikki aktiviteetit Rukalta</h2>
                    <h3 className={styles.keskus}>Missiomme on kerätä tälle sivulle jokainen aktiviteetti, vuokraamo ja kauppa mitä rukalta löytyy</h3>
                    </Container>
                </div>
                <div className={styles.ads}>
                    <Container>
                    <Card>
                        <CardBody>
                        <CardTitle>
                                Advertisement
                                </CardTitle>
                <GoogleAd client="ca-pub-4371075580898574" />
                        </CardBody>
                </Card>
                </Container>
                </div>
            </Layout>
            </div>
    )
}
