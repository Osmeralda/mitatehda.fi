import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/global.css'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            copyright
            description
            title
          }
        }
      }
      
    `)

    const {title} = data.site.siteMetadata

    return (
        <nav>
            <h1 className='header'>{title}</h1>
            <div className="links">
                <Link to="/">Koti</Link>
                <Link to="/ruka">Ruka</Link>
                <Link to="/levi">Levi</Link>
                <Link to="/yllas">Ylläs</Link>
                <Link to="/syote">Syöte</Link>
                <Link to="/pyha">Pyhä</Link>
                <Link to="/saariselka">Saariselkä</Link>
                <Link to="/">Hetta/Pallas</Link>
                <Link to="/yhteystiedot">Yhteystiedot</Link>
            </div>           
        </nav>            
    )
}
