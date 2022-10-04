import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import * as styles from "../styles/keskukset.module.css"


export default function NotFound() {
    return (
 
        <Layout>
            <Navbar />
        <div className={styles.resortPage}>
            <h1>Error 404</h1>
            <h2>Valitettavasti emme tiedä mitä etsit</h2>
            <h2>Unfortunately we are not sure what you are looking for</h2>
        </div>
        </Layout>

    )
}
