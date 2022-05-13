import React from 'react'
import * as styles from '../styles/global.css'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query Footer {
        site {
          siteMetadata {
            title
            copyright 
        }
      }
    }  
    `)

    const {copyright, title} = data.site.siteMetadata

    return (
      <Container>
        <div className='footer bg'>
            <footer className='footer'>
              <div>
              <p className='footerP'>{title}</p>
              <Link to="/ruka" className='footerLink'>Ruka</Link><br></br>
              <Link to="/yhteystiedot" className='footerLink'>Yhteystiedot</Link><br></br>
              <a href="https://www.facebook.com/Mit%C3%A4Tehd%C3%A4fi-104893475469082" target="_blank"><StaticImage src="../images/icons8-facebook.svg" /></a>
              </div>
              <div>
              <p>{copyright}</p>
              </div>
            </footer>
        </div>
      </Container>
    )
}
