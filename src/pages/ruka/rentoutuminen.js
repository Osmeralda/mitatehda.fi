import React from "react"
import * as styles from "../../styles/keskukset.module.css"
import { graphql } from "gatsby"
import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import RukaSidebar from "../../components/RukaSidebar"


export default function RentoutuminenRuka({ data }) {
    console.log(data)
    const hyvinvointi = data.hyvinvointi.nodes
    const avanto = data.avanto.nodes


    return (
                <Container>
                <div className="flexRow margingbottom bg">
        <div className="flexColumn width100">
    <Navbar />
    </div>
      </div>
      <div className={styles.resortPage}>
          <h1>
          Rukan hyvinvointi ja kauneusyritykset!
          </h1>
      </div>
      <div className="flexRow">
        <div>
      <RukaSidebar /> 
      </div>
      <div className="flexColumn">
      <Container className={styles.yritykset}>
                {hyvinvointi.map(teksti => (
            <div className={styles.yrityslinkki}>
                <div className="space-between">
                  <div>
                    <GatsbyImage className="thumbnail" image={getImage(teksti.frontmatter.image01)} />
                    <h3>{ teksti.frontmatter.title }</h3>
                    <p>{ teksti.frontmatter.kuvaus }</p>
                    </div>
                    <div className={styles.button}>
                    <a href={teksti.frontmatter.slug} target="_blank" className="button">Vieraile </a>
                    </div>
                </div>
            </div>
        ))}
        </Container>

          <div>
      <div className={styles.resortPage}>
          <h1>
          Rukan upeat avannot!
          </h1>
      </div>
                        </div>
              <Container className={styles.yritykset}>
              {avanto.map(teksti => (
          <div className={styles.yrityslinkki}>
              <div className="space-between">
                <div>
                  <GatsbyImage className="thumbnail" image={getImage(teksti.frontmatter.image01)} />
                  <h3>{ teksti.frontmatter.title }</h3>
                  <p>{ teksti.frontmatter.kuvaus }</p>
                  </div>
                  <div className={styles.button}>
                  <a href={teksti.frontmatter.slug} target="_blank" className="button">Vieraile </a>
                  </div>
              </div>
          </div>
      ))}
      
      </Container>

      </div>

       </div>
        <div>
        <Footer />
        </div> 
        <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Kaikki Rukan ravintolat kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/ravintolat' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/ravintolat" />
    </Helmet>    
       </Container>                 
    )
}

// export page query

export const query = graphql`
query rentoutuminenRuka {
    hyvinvointi: allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {rentoutuminen: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            ruka
            rentoutuminen
            update
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
      avanto: allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {avanto: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            slug
            title
            ruka
            update
            avanto
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
  }  
    `