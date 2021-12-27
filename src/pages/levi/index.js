import React from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import * as styles from '../../styles/keskukset.module.css'

export default function Levi() {
    return (
        <Layout>
            <Sidebar className={styles.Sidebar} /> 
        <div className={ styles.keskus}>
            <h1>Tervetuloa Leville</h1>
            <h2>Täältä löydät kaikki Levin aktiviteetit</h2>
        </div>
        </Layout>
    )
}
