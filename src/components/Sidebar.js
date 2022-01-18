import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/global.css'


export default function Sidebar() {
    return (
        <nav>
            

            <div className='sidebar' >
                <Link to="laskettelu" activeClassName={"active"}>Laskettelu</Link>
                <Link to="kelkkailu" activeClassName={"active"}>Kelkkailu</Link>
                <Link to="hiihto" activeClassName={"active"}>Hiihto</Link>
                <Link to="vaellus" activeClassName={"active"}>Vaellusreitit</Link>
                <Link to="kaupat" activeClassName={"active"}>Kaupat</Link>
                <Link to="elamys" activeClassName={"active"}>Elämykset</Link>
                <Link to="paljut" activeClassName={"active"}>Paljut</Link>
            

           
            </div>
        </nav>
    )
}

