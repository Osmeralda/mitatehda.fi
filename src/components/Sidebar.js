import { Link, graphql } from 'gatsby'
import React from 'react'
import * as styles from '../styles/global.css'
import { Card, CardTitle, CardBody } from 'reactstrap'


export default function Sidebar() {
    return (
        <nav>
            

            <div className='sidebar'>


                <Link to="/ruka/laskettelu">Laskettelu</Link>
                <Link to="/ruka/kelkkailu">Kelkkailu</Link>
                <Link to="/ruka/hiihto">Hiihto</Link>
                <Link to="/ruka/vaellus">Vaellusreitit</Link>
                <Link to="/ruka/kaupat">Kaupat</Link>
                <Link to="/ruka/elamys">Elämykset</Link>
                <Link to="/ruka/paljut">Paljut</Link>
                <Card>
                    <CardBody>
                        <CardTitle className='text-center text-uppercase'>
                        Advertisement
                        </CardTitle>
                        <img
                        src="https://via.placeholder.com/200x400"
                        alt="advert"
                        style={{ width: '100%'}}
                        />
                    </CardBody>
                </Card>


           
            </div>
        </nav>
    )
}

/*const sidebarQuery = graphql`
query sidebarQuery {
    allMarkdownRemark(
        sort:
    )
}
`
*/