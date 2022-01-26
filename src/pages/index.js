import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/keskukset.module.css'
import {Link} from "gatsby"

import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'


export default function Home() {

  return (
    <div>
    <Layout>

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