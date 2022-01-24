import React from 'react'
import Layout from '../../components/Layout'
import {Card, CardBody, CardTitle} from 'reactstrap'
import * as styles from '../../styles/keskukset.module.css'
import { Link } from 'gatsby'

export default function Levi() {
    return (
        <Layout>
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
    
        <div className={ styles.keskus}>
            <h1>Tervetuloa Leville</h1>
            <h2>Täältä löydät kaikki Levin aktiviteetit</h2>
        </div>
        </Layout>
    )
}
