import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'


export default function Elamys({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
                    <nav>
            

            <div className='sidebar'>


                <Link to="/levi/laskettelu">Laskettelu</Link>
                <Link to="/levi/kelkkailu">Kelkkailu</Link>
                <Link to="/levi/hiihto">Hiihto</Link>
                <Link to="/levi/vaellus">Vaellusreitit</Link>
                <Link to="/levi/kaupat">Kaupat</Link>
                <Link to="/levi/elamys">Elämykset</Link>
                <Link to="/levi/paljut">Paljut</Link>
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
            <h1>Kaikki Levin Elämykset</h1>
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
query ElamysLevi {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {place: {eq: ""}, type: {eq: ""}}}
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