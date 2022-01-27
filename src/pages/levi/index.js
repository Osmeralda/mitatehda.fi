import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import LeviSidebar from '../../components/LeviSidebar'

  export default function Ruka() {

  return (
        <div>
            <Layout>
        <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Jokainen Levin aktiviteetti, reitti sekä vuokraamo kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Lappi, Levi, Kittilä, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/levi/' />
        <link rel="canonical" href="www.mitatehda.fi/levi/" />
    </Helmet>
            <Container>
                <LeviSidebar />
            </Container>
                <div className={styles.keskus}>
                    <Container>
                    <h1 className={styles.btn}>Tällä hetkellä olemme vielä rakentamassa nettisivustoamme. </h1>
                    <h1 className={styles.btn}>Olettehan kärsivällinen. tarkoituksemme on saada sivusto valmiiksi Helmikuussa 2022</h1>
                    <h1 className={styles.keskus}>Tervetuloa Leville</h1>
                    <h2 className={styles.keskus}>Täältä löydät kaikki aktiviteetit Leviltä</h2>
                    <h3 className={styles.keskus}>Missiomme on kerätä tälle sivulle jokainen aktiviteetti, vuokraamo ja kauppa mitä Leviltä löytyy</h3>
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
