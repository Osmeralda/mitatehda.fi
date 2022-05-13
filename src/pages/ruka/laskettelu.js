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
        <meta name="description" content="Jokainen Rukan lasketteluvuokraamot kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/laskettelu' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/laskettelu" />
    </Helmet>
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan Laskuväline vuokraamot</h1>
                    </Container>
                </div>
                
                <div className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>3h välinesetti: { teksti.frontmatter.dhhinta }</p>
                                <p>Tuotteet: { teksti.frontmatter.products }</p>
                            </div>
                        </Link>
                    ))}
                     </div>            

            <div className={styles.keskus}>
                <h2>Rukan rinnekartta</h2>
                <Link to="https://www.ruka.fi/fi/hiihtokeskus/rinteet" target="_blank" className={styles.btn}>Klikkaa tästä rinnekarttaan</Link>
                <h2>Osta hissiliput Rukan sivuilta</h2>
                <Link to="https://www.ruka.fi/fi/hiihtokeskus/hissiliput" target="_blank" className={styles.btn}>Painamalla tästä</Link>
            </div>
            </div>   
    )
}

// export page query

export const query = graphql`
query lasketteluRuka {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {dhski: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            ruka
            dhski
            dhhinta
            update
            products
          }
        }
      }
    }    
    `