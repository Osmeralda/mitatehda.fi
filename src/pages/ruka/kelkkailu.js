import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/keskukset.module.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'
import RukaSidebar from '../../components/RukaSidebar'


export default function Kelkkailu({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
    <Helmet>
        <title>MitäTehdä.fi Ruka</title>
        <meta name="description" content="Jokainen Rukan kelkkavuokraamo kätevästi yhdellä sivulla!" />
        <meta name="keywords" content="Pohjois-Suomi, Ruka, Kuusamo, vaellusreitit, kävelyreitit, kaupat, vuokraamot, ravintolat, laskettelu, paljut, elämykset, elämys" />
        <meta property="og:title" content="MitäTehdä.fi" />
        <meta property="og:type" content="Kaikki pohjois-Suomen aktiviteetit listattuna" />
        <meta property='og:image' content='' />
        <meta property='og:locale' content='fi_FI' />
        <meta property='og:url' content='www.mitatehda.fi/ruka/kelkkailu' />
        <link rel="canonical" href="www.mitatehda.fi/ruka/kelkkailu" />
    </Helmet>
            <RukaSidebar />

                <div className={styles.keskus}>
                    <Container>
                    <h1>Rukan moottorikelkka vuokraamot</h1>
                    </Container>
                </div>
                
                <div className={styles.yritykset}>
                    {tekstit.map(teksti => (
                        <Link to={teksti.frontmatter.slug} key={teksti.id} className={styles.yrityslinkki}>
                            <div>
                                <h3>{ teksti.frontmatter.title }</h3>
                                <p>2h vuokraus alkaen: { teksti.frontmatter.hinta }</p>
                                <p>Tuotteet: { teksti.frontmatter.products }</p>
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
                <div className={styles.keskus}>
                <h3>Rukan kelkkailureitit</h3>
                <Link to="https://kuusamo.fluentprogress.fi/outdoors?snowmobileroute" className={styles.btn}>Klikkaa tästä reittikarttaan</Link>

            </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query kelkkailuRuka {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {snowmobile: {eq: "ye"}, ruka: {eq: "ye"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            slug
            title
            ruka
            snowmobile
            update
            products
          }
        }
      }
    }    
    `