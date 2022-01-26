import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/keskukset.module.css'
import {Card, CardBody, CardTitle} from 'reactstrap'
import { Container, Col, Row, Image } from 'react-bootstrap'


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
                        <Card>
                            <CardBody>
                                <CardTitle className='text-uppercase'>
                                Advertisement
                                </CardTitle>
                                <Image
                                src="https://via.placeholder.com/100x400"
                                alt="advert"
                                fluid
                                style={{ width: '100%'}}
                                />
                            </CardBody>
                        </Card>

            </div>
                </nav>
            </Container>
        <div className={styles.keskus}>
            <h1>Levin vaellusreitit</h1>
        </div>
        <div className={styles.yritykset}>
            {tekstit.map(teksti => (
                <Link to={teksti.frontmatter.slug} key={teksti.id}>
                    <div>
                        <h3>{ teksti.frontmatter.title }</h3>
                        <p>Hinta alkaen { teksti.frontmatter.hinta }</p>
                    </div>
                </Link>
            ))}
        </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query VaellusLevi {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {place: {eq: "levi"}, type: {eq: "vaellus"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            title
            type
            slug
          }
        }
      }
    }
    
`