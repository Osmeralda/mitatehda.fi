import React from "react"
import * as styles from '../styles/keskukset.module.css'
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import { Button } from "react-bootstrap"
import Footer from "../components/Footer"
import Info from "../components/Info"



export default function Home({data}) {

  const tekstit = data.allMarkdownRemark.nodes
  const image = getImage(data.allMarkdownRemark.file)

  return (
    <Container>
      <div className="flexRow margingbottom bg">
        <div className="flexColumn">
    <Navbar />
    <div className={styles.keskus}>
          <h1>
          Löydä kaikki aktiviteetit Rukalta!
          </h1>
          <Button to="/ruka" className={styles.btnFrontPage}>Aktiviteetteihin</Button>
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
        <StaticImage src="../images/kelkka-rukalla.jpg"
         alt="A snowmobile in Ruka"
         placeholder="blurred"
         objectFit="cover"
         objectPosition="bottom"
         cropFocus="SOUTHEAST"
           />
           </div>
    </div>
      
      <div>
        <div className="flexColumn">
    <div className={styles.featured}>
      <div className={styles.featuredTitle}>
        <h3>Valitut</h3>
        </div>
        {tekstit.map(teksti => (
            <div className={styles.yrityslinkkiFeat}>
                <div className="space-between">
                  <div>
                    <GatsbyImage className="thumbnail" image={getImage(teksti.frontmatter.image01)} />
                    <h3>{ teksti.frontmatter.title }</h3>
                    <p>Tuotteet: { teksti.frontmatter.products }</p>
                    </div>
                    <div className={styles.button}>
                    <a href={teksti.frontmatter.slug} target="_blank" className="button">Vieraile </a>
                    </div>
                </div>
            </div>
        ))}
         </div>
         <Link to="/ruka" className="seeMore">Katso lisää +</Link>  
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
// export page query

export const query = graphql`
query featuredRuka {
  allMarkdownRemark(
    sort: {order: ASC, fields: frontmatter___update}
    filter: {frontmatter: {featured: {eq: "ye"}, ruka: {eq: "ye"}}}
  ) {
    nodes {
      frontmatter {
        slug
        title
        ruka
        update
        featured
        products
        image01 {
          childImageSharp {
            gatsbyImageData(
              width: 700
              height: 400
              blurredOptions: {width: 200}
              transformOptions: {cropFocus: CENTER}
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
  file(relativePath: {eq: "kelkka-rukalla.jpg"}) {
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