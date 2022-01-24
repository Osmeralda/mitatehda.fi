import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import * as styles from '../../styles/keskukset.module.css'


export default function Kelkkailu({ data }) {
    console.log(data)
    const tekstit = data.allMarkdownRemark.nodes

    return (
        <Layout>
        <Sidebar className={styles.Sidebar} /> 
        <div className={styles.keskus}>
            <h1>Levin moottorikelkka vuokraamot</h1>
        </div>
        <div className={styles.yritykset}>
            {tekstit.map(teksti => (
                <Link to={teksti.frontmatter.slug} key={teksti.id}>
                    <div>
                        <h3>{ teksti.frontmatter.title }</h3>
                        <p>2h vuokraus alkaen: { teksti.frontmatter.hinta }</p>
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
query KelkkailuLevi {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {place: {eq: "levi"}, type: {eq: "kelkka"}}}
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