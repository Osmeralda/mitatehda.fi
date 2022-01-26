import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/keskukset.module.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import { Helmet } from 'react-helmet'
import { Container, Col, Row, Image } from 'react-bootstrap'
import GoogleAd from '../../components/Banner'


export default function Kelkkailu({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <Container>
                <nav className='text-left'>
             <div className='sidebar'>

                        <Row><Link to="/ruka/laskettelu">Laskettelu</Link></Row>
                        <Row><Link to="/ruka/kelkkailu">Kelkkailu</Link></Row>
                        <Row><Link to="/ruka/hiihto">Hiihto</Link></Row>
                        <Row><Link to="/ruka/vaellus">Vaellusreitit</Link></Row>
                        <Row><Link to="/ruka/kaupat">Kaupat</Link></Row>
                        <Row><Link to="/ruka/elamys">Elämykset</Link></Row>
                        <Row><Link to="/ruka/paljut">Paljut</Link></Row>
            </div>
                </nav>
            </Container>
    <div>
    <Helmet>
            <title>MitäTehdä.fi Ruka</title>
            <meta name="MitaTehda.fi" content="Jokainen Rukan kelkkavuokraamo kätevästi yhdellä sivulla!" />
        </Helmet>

    </div>
        
            
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
        </Layout>
    )
}

// export page query

export const query = graphql`
query teksti {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {type: {eq: "kelkka"}, place: {eq: "ruka"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            place
            slug
            title
            type
            update
            products
          }
        }
      }
    }    
    `