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
            <h1>Levin palju vuokraajat</h1>
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
query PaljuLevi {
    allMarkdownRemark(
        sort: {order: ASC, fields: frontmatter___update}
        filter: {frontmatter: {place: {eq: "levi"}, type: {eq: "paljut"}}}
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