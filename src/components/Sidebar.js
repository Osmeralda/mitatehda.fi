import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/global.css'

export default function Sidebar() {
    return (
        <nav>
            <div className='sidebar'>
                <Link to="/">Laskettelu</Link>
                <Link />
                <Link to="/">Hiihto</Link>
                <Link to="/">Kävelyreitit</Link>
                <Link to="/">Kaupat</Link>
                <Link to="/">Elämykset</Link>
                <Link to="/">Paljut</Link>
            </div>
        </nav>
    )
}

