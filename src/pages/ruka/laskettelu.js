import React from "react"
import * as styles from "../../styles/keskukset.module.css"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import { Helmet } from 'react-helmet'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import RukaSidebar from "../../components/RukaSidebar"
import Layout from "../../components/Layout"

  export default function LasketteluRuka({data}) {

    const tekstit = data.allMarkdownRemark.nodes
    //const image = getImage(data.allMarkdownRemark.file)

  return (
      <Layout>
      <Container>
                <div className="flexRow margingbottom bg">
        <div className="flexColumn width100">
    <Navbar />
    </div>
      </div>
      <div className={styles.resortPage}>
          <h1>
          Rukan laskuväline vuokraamot!
          </h1>
      </div>

    <div className="flexRow">
                <div>
                <RukaSidebar />
                </div>
                <Container className={styles.yritykset}>
                {tekstit.map(teksti => (
            <div className={styles.yrityslinkki}>
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
        
        </Container>

                </div>
                <div className="infobox">
                <div>
        <StaticImage className='imageInfo-skiing' src='../../images/rinnekartta.jpg'
                 alt="Skier skiing on path"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="bottom"
                 cropFocus="SOUTHEAST"
                   />
        </div>
                <div>
                <h2>Rukan rinnekartta</h2>
                <Link to="https://www.ruka.fi/fi/hiihtokeskus/rinteet" target="_blank" className="infoButton">Klikkaa tästä reittikarttaan</Link>
            </div>
            </div>
            <div className='infobox justify-content-end'>
                <div>
            <h2>Osta hissiliput Rukan sivuilta</h2>
                <Link to="https://www.ruka.fi/fi/hiihtokeskus/hissiliput" target="_blank" className="infoButton">Klikkaa tästä reittikarttaan</Link>
                </div>
                <div>
        <StaticImage className='imageInfo-skiing' src='../../images/ruka-hissiliput.jpg' 
                 alt="Skier skiing in forest"
                 placeholder="blurred"
                 objectFit="cover"
                 objectPosition="top"
                 cropFocus="SOUTHEAST"
                   />
        </div>
                </div>

                <div>
         <Footer />
         </div>




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
        </Container>  
        </Layout>  
    )
}

export const query = graphql`
query lasketteluRuka {
  allMarkdownRemark(
    sort: {order: ASC, fields: frontmatter___update}
    filter: {frontmatter: {dhski: {eq: "ye"}, ruka: {eq: "ye"}}}
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
}
  `