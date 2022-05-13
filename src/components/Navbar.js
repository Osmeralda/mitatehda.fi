import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/global.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            description
            title
        }
      }
    }  
    `)

    const {title} = data.site.siteMetadata

    
    return (

        <nav className='nav'>
          <div>
            <ul className='header'>

            <li><Link to="/" className='title'>{title}</Link></li>
            <li><Link to="/ruka" className='li' activeClassName={"active"}>Ruka</Link></li>
            <li><Link to="/yhteystiedot" className='li' activeClassName={"active"}>Yhteystiedot</Link></li>
            </ul>
            </div>
            <div>
            <a href="https://www.facebook.com/Mit%C3%A4Tehd%C3%A4fi-104893475469082" className='fbicon' target="_blank"><StaticImage src="../images/icons8-facebook.svg" />  </a>
            </div>
            
        </nav>  
        
    )
    }
