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
        <meta name="description" content="Kaikki Rukan maastohiihtovuokraamot kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/hiihto' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/hiihto" />
    </Helmet>
    <div>
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan Maastohiihtoväline vuokraamot</h1>
                    </Container>
                
                
                <Container className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>3h välinesetti: { teksti.frontmatter.xchinta }</p>
                                <p>Tuotteet: { teksti.frontmatter.products }</p>
                            </div>    
                        </Link>
                    ))}         
                                </Container> 
                                

            <div className={styles.keskus}>
                <h3>Rukan maastohiihtoreitit</h3>
                <Link to="https://kuusamo.fluentprogress.fi/outdoors?skitrack" target="_blank" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
                <h3>Riisitunturin maastohiihtoreitti (33km Rukalta)</h3>
                <Link to="https://www.luontoon.fi/riisitunturi/talviretkeilyreitit#Riisinmonitoimireitti" target="_blank" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>
            </div>
            </div> 
            </div>   
            </div>

    )
}

// export page query

export const query = graphql`
query hiihtoRuka {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {xcski: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            ruka
            xcski
            xchinta
            update
            products
          }
        }
      }
    }    
    `