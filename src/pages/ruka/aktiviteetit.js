import { graphql, Link } from 'gatsby'
import React from 'react'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import RukaSidebar from '../../components/RukaSidebar'


export default function aktiviteetitRuka({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        
            <div>
    <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Kaikki Rukan aktiviteetit kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, hiihto, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/aktiviteetit' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/aktiviteetit" />
    </Helmet>
    <div>
            <RukaSidebar />
            </div>
                <div className={styles.keskus}>
                    <Container>
                    <h1>Muunlaisia hauskoja aktiviteetteja Rukalla</h1>
                    </Container>
                
                
                <Container className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} target="_blank" className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                
                                <p>{ teksti.frontmatter.products }</p>
                            </div>
                        </Link>
                    ))}
                    </Container>
                    </div>
                </div>

        
    )
}

// export page query

export const query = graphql`
query aktiviteetitRuka {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {aktiviteetti: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            aktiviteetti
            ruka
            update
            products
          }
        }
      }
    }    
    `