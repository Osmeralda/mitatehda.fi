import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import * as styles from '../../styles/keskukset.module.css'


export default function Ruka() {

    return (
        <Layout>
        <Sidebar className={styles.Sidebar} /> 
        <div className={styles.keskus}>
            <h1>Tervetuloa Rukalle</h1>
            <h2>Täältä löydät kaikki aktiviteetit Rukaklta</h2>
        </div>
        </Layout>
    )
}