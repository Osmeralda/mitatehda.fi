import React from 'react'
import * as styles from '../styles/keskukset.module.css'
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Info from "../components/Info"
import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'

export default function Yhteystiedot({data}) {

    return (
        <Container>
        <div className="flexRow margingbottom bg space-between-row">
          <div className="flexColumn">
      <Navbar />
      <div className={styles.keskus}>
      <h1>Mikä on MitäTehdä.fi?</h1>

        </div>
        </div>
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
        <div className={styles.imageFrontPage}>
          <StaticImage src="../images/gondolit-rukalla.jpg"
           alt="Gondolas in Ruka"
           placeholder="blurred"
           objectFit="cover"
           objectPosition="bottom"
           cropFocus="SOUTHEAST"
             />
             </div>
      </div>
           <div>
           <Info />
           </div>
           <div>
           <Footer />
           </div>
           </Container>
    )
}
export const query = graphql`
query yhteystiedot {
  file(relativePath: {eq: "gondolit-rukalla.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        placeholder: BLURRED
        layout: FULL_WIDTH
        formats: [AUTO, WEBP, AVIF]
        transformOptions: {cropFocus: SOUTHEAST}
      )
    }
  }
}

`