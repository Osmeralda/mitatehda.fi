import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'


export default function Hiihto({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <nav>
            

            <div className='sidebar'>


                <Link to="/ruka/laskettelu">Laskettelu</Link>
                <Link to="/ruka/kelkkailu">Kelkkailu</Link>
                <Link to="/ruka/hiihto">Hiihto</Link>
                <Link to="/ruka/vaellus">Vaellusreitit</Link>
                <Link to="/ruka/kaupat">Kaupat</Link>
                <Link to="/ruka/elamys">Elämykset</Link>
                <Link to="/ruka/paljut">Paljut</Link>
                <Card>
                    <CardBody>
                        <CardTitle className='text-center text-uppercase'>
                        Advertisement
                        </CardTitle>
                        <img
                        src="https://via.placeholder.com/200x400"
                        alt="advert"
                        style={{ width: '100%'}}
                        />
                    </CardBody>
                </Card>


           
            </div>
        </nav>
    
        <div className={styles.keskus}>
            <h1>Levin hiihtoväline vuokraamot</h1>
        </div>
        <div className={styles.yritykset}>
            {tekstit.map(teksti => (
                <Link to={teksti.frontmatter.slug} key={teksti.id}>
                    <div>
                        <h3>{ teksti.frontmatter.title }</h3>
                        <p>Hinta alkaen { teksti.frontmatter.hinta }</p>
                        <p>Tuotteet { teksti.frontmatter.products }</p>
                    </div>
                </Link>
            ))}
        </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query HiihtoLevi {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {place: {eq: "levi"}, type: {eq: "hiihto"}}}
      ) {
        nodes {
          frontmatter {
            hinta
            title
            type
            slug
            products
          }
        }
      }
    }
    
`