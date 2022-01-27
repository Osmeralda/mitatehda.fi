import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import RukaSidebar from '../../components/RukaSidebar'

  export default function Ruka() {

  return (
        <div>
            <Layout>
        <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Jokainen Rukan aktiviteetti, reitti sekä vuokraamo kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/" />
    </Helmet>
            <Container>
                <RukaSidebar />
            </Container>
                <div className={styles.keskus}>
                    <Container>
                    <h1 className={styles.keskus}>Tervetuloa Rukalle</h1>
                    <h2 className={styles.keskus}>Täältä löydät kaikki aktiviteetit Rukalta</h2>
                    <h3 className={styles.keskus}>Missiomme on kerätä tälle sivulle jokainen aktiviteetti, vuokraamo ja kauppa mitä rukalta löytyy</h3>
                    <p>Aloita valitsemalla vasemmalta valikosta aktiviteetti</p>
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
