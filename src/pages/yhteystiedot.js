import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/keskukset.module.css'

export default function Yhteystiedot() {
    return (
        <div>
        <Layout>
        <div className={styles.keskus}>
            <h1>MitäTehdä.fi</h1>
            <h3>Olemme päättäneet kehittää nettisivun joka tukee pohjois-Suomen aktiviteetti yrittäjiä</h3>
            <p>Näille sivuille olemme päättäneet kerätä kaikki pohjois-Suomen aktiviteetit</p>
            <p>Idea kehittyi vuoden 2021 lopulla kun huomasimme että on paljon kyselijöitä mistä mitäkin saa hankittua</p>
        </div>
        </Layout>
        </div>
    )
}
