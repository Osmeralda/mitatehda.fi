import { graphql, Link } from 'gatsby'
import React from 'react'

import * as styles from '../../styles/keskukset.module.css'

import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'

import RukaSidebar from '../../components/RukaSidebar'


export default function LasketteluRuka({ data }) {
    console.log(data)
    const hyvinvointi = data.hyvinvointi.nodes
    const avanto = data.avanto.nodes

    return (
        <div>
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
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan hyvinvointi ja kauneusyritykset</h1>
                    </Container>
                </div>
                
                <div className={styles.yritykset}>
                    {hyvinvointi.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>{ teksti.frontmatter.products }</p>
                            </div>
                        </Link>
                    ))}
                     </div>     

                <div className={styles.keskus}>
                    <Container>
                        <h3>Avanto</h3>
                        <p>Rukan alueen mahtavat avannot.</p>
                        <p>Pulahda virkistävään avantoon jonka jälkeen pääset lämpimään saunaan!</p>
                        </Container>
                        </div>     

                    <div className={styles.yritykset}>
                    {avanto.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>{ teksti.frontmatter.products }</p>
                            </div>
                        </Link> 
                        ))}
                        </div>  

                        </div>   
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
          }
        }
      }
    }    
    `