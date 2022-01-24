import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/global.css'
import reactDom from 'react-dom'
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
                <Link to="/levi" activeClassName={"active"}>Levi</Link>
                <Link to="/yllas" activeClassName={"active"}>Ylläs</Link>
                <Link to="/syote" activeClassName={"active"}>Syöte</Link>
                <Link to="/pyha" activeClassName={"active"}>Pyhä</Link>
                <Link to="/saariselka" activeClassName={"active"}>Saariselkä</Link>
                
                <Link to="/yhteystiedot" activeClassName={"active"}>Yhteystiedot</Link>
            </div>           
        </nav> 
        </Container>     
    )
    }
