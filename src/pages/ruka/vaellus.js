import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/keskukset.module.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import RukaSidebar from '../../components/RukaSidebar'


export default function LasketteluRuka({ data }) {
    console.log(data)
    

    return (
        <Layout>
    <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Kaikki Rukan ja lähialueiden vaellusreitit kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, Valtavaara, pyhävaara, riisitunturi, posio, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/vaellus' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/vaellus" />
    </Helmet>
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan ja lähialueen vaellusreitit</h1>
                    </Container>
                </div>
                
                <div className={styles.keskus}>
                    <h2>Valtavaara-pyhävaaran reitistö</h2>
                    <p>Konttaisen kuhaus, 2 km</p>
                    <p>Hirsilammen talvireitti, 4 km</p>
                    <p>Pyhän jyssäys, 6 km</p>
                    <p>Valtavaaran talvireitti, 5.5 km</p>
                    <p>Antinperän talvireitti, 4.4 km</p>
                    <Link to="https://www.luontoon.fi/valtavaara/talviretkeily" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
                    <h2>Karhunkierros</h2>
                    <p>82 km</p>
                    <Link to="https://www.luontoon.fi/karhunkierros/kartat" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
                    <h2>Oulangan patikointireitit</h2>
                    <p>Napapiirin nopia, esteetön reitti, 1 km</p>
                    <p>Keroharjun kuiskaus, 17 km</p>
                    <p>Kanjonin kurkkaus, 6 km</p>
                    <p>Rytikönkään reissu, 5 km</p>
                    <p>Kiutakönkään polku, 2 km</p>
                    <p>Hiiden hurmos, 5 km</p>
                    <p>Könkään keino, 8 km</p>
                    <p>Könkään kuohu, esteetön reitti, 200 m</p>
                    <p>Pieni karhunkierros, 12 km</p>
                    <Link to="https://www.luontoon.fi/oulanka/patikointireitit" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
                    <h2>Riisitunturin reitistö (33km Rukalta)</h2>
                    <p>Talvireitti Riisitunturin autiotuvalle 1,5 km</p>
                    <p>Talvireitti Riisin rääpäsy 4,3 km </p>
                    <p>Riisitunturin monitoimireitti 20 km</p>
                    <Link to="https://www.luontoon.fi/riisitunturi/talviretkeilyreitit" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
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
    )
}