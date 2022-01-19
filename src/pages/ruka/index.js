import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'
import * as styles from '../../styles/keskukset.module.css'
import { Helmet } from "react-helmet"

export default function Ruka() {
    return (
        <div>
            <Helmet>
                <title>Kaikki Rukalta</title>
                <meta name="Mitä tehdä rukalla" content="Täältä löydät kaikki Rukan aktiviteetit ja vuokraamot" />
            </Helmet>
            <Layout>
                <Sidebar className={styles.Sidebar} />
                <div className={styles.keskus}>
                    <h1>Tervetuloa Rukalle</h1>
                    <h2>Täältä löydät kaikki aktiviteetit Rukalta</h2>
                </div>
            </Layout>
            </div>
    )
}
