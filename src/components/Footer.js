import React from 'react'
import * as styles from '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query Footer {
        site {
          siteMetadata {
            copyright
        }
      }
    }  
    `)

    const {copyright} = data.site.siteMetadata

    return (
      <Container>
        <div className='footer'>
            <footer>
              <p>{copyright}</p>
            </footer>
        </div>
      </Container>
    )
}
