import React from 'react'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import RukaSidebar from '../../components/RukaSidebar'

  export default function Ruka() {

  return (
    <div>
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
    <div>
    <div>
                <RukaSidebar />
                </div>
                <div className={styles.keskus}>
                    <Container>
                    <h1 className={styles.keskus}>Tervetuloa Rukalle</h1>
                    <p className={styles.keskus}>Täältä löydät kaikki aktiviteetit Rukalta</p>
                    <p className={styles.keskus}>Missiomme on kerätä tälle sivulle jokainen aktiviteetti, vuokraamo ja kauppa mitä Rukalta löytyy</p>                   
                    </Container>
                </div>
                </div>
                </div>   
            
    )
}
