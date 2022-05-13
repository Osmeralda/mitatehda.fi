import { graphql, Link } from 'gatsby'
import React from 'react'

import * as styles from '../../styles/keskukset.module.css'

import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'

import RukaSidebar from '../../components/RukaSidebar'


export default function LasketteluRuka({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
       <div>
    <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Kaikki Rukan lumikenkä vuokraamot kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/lumikengat' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/lumikengat" />
    </Helmet>
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan Lumikenkävuokraamot</h1>
                    </Container>
                </div>
                
                <div className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>3h lumikengät: { teksti.frontmatter.lumikenkahinta }</p>
                                <p>Tuotteet: { teksti.frontmatter.products }</p>
                            </div>
                        </Link>
                    ))}
                     </div>            
                     </div>   
    )
}

// export page query

export const query = graphql`
query lumikenkaRuka {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {lumikengat: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            ruka
            lumikenkahinta
            update
            products
          }
        }
      }
    }    
    `