import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/keskukset.module.css'


import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'


export default function Home() {

  return (
    <div>
    <Layout>
    <Helmet>
        <title>MitäTehdä.fi</title>
        <meta name="description" content="Kaikki Lapin ja Pohjois-Suomen tekemiset ja aktiviteetit kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, pyhä, levi, kittilä, saariselkä, ivalo, ylläs, vaellusreitit, kävelyreitit, Valtavaara, pyhävaara, riisitunturi, posio, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/' />
        <link rel="canonical" href="www.mitatehda.fi/" />
    </Helmet>
      <div className={styles.keskus}>
        <Container>
          <h1 className={styles.keskus}>
          Tervetuloa MitäTehdä.fi sivustolle!
          </h1>
          <h2 className={styles.keskus}>Olemme päättäneet kerätä kaikki Aktiviteetit, reitit sekä vuokraajat koko pohjois-Suomesta sivustollemme</h2>
          <h2 className={styles.keskus}>Aloita valitsemalla ylhäältä paikka mistä haluat löytää tietoa</h2>          
          <h2 className={styles.keskus}>Huomaathan että sivustomme on vielä kehitys vaiheessa. Jos huomaat että jokin paikka, yritys tai aktiviteetti puuttuu olethan meihin rohkeasti yhteydessä</h2>
        </Container>
      </div>
    </Layout>
    </div>
  )
}