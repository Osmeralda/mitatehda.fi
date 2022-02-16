import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/global.css'
import { Container } from 'reactstrap'

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
        <Container>
        <nav>
            <Link to="/" className='header'>{title}</Link>
            
            <div className="links">
                <Link to="/ruka" activeClassName={"active"}>Ruka</Link>
                <Link to="/levi" activeClassName={"active"}></Link>
                <Link to="/yllas" activeClassName={"active"}></Link>
                <Link to="/syote" activeClassName={"active"}></Link>
                <Link to="/pyha" activeClassName={"active"}></Link>
                <Link to="/saariselka" activeClassName={"active"}></Link>
                
                <Link to="/yhteystiedot" activeClassName={"active"}>Yhteystiedot</Link>
            </div>           
        </nav> 
        </Container>     
    )
    }
