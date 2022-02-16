import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/keskukset.module.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import RukaSidebar from '../../components/RukaSidebar'


export default function LasketteluRuka({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
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
                    <h1>Rukan rentoutumis ja kauneusyritykset</h1>
                    </Container>
                </div>
                
                <div className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>{ teksti.frontmatter.products }</p>
                            </div>
                        </Link>
                    ))}
                     </div>            
        <div className={styles.ads}>
                    <Container>
                    <Card>
                        <CardBody>
                        <CardTitle>
                                Advertisement
                                </CardTitle>
                <GoogleAd client="ca-pub-4371075580898574" />
                        </CardBody>
                </Card>
                </Container>
                </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query rentoutuminenRuka {
    allMarkdownRemark(
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
    }    
    `