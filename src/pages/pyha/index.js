import React from 'react'
import Layout from '../../components/Layout'

import * as styles from '../../styles/keskukset.module.css'
import { Container, Row, Col } from 'reactstrap'

export default function Pyha() {
    return (
        
        <Layout>
            <nav>
           
            </nav>
        
        <div className={styles.keskus}>
            <Container>
            <h1>Tervetuloa Pyhälle!</h1>
            </Container>    
        </div>
        </Layout>
       
    )
}
