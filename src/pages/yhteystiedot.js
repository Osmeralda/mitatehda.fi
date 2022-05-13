import React from 'react'
import * as styles from '../styles/keskukset.module.css'
import { Link } from 'gatsby'

export default function Yhteystiedot() {
    return (
        <div>
        <div>
        <div className={styles.keskus}>
            <h1>MitäTehdä.fi</h1>
            <p>Näille sivuille olemme päättäneet kerätä kaikki Rukan aktiviteetit ja yrittäjät</p>
            <p>Idea kehittyi vuoden 2021 lopulla kun huomasimme että on paljon kyselijöitä mistä mitäkin saa hankittua</p>
            <a href="https://www.facebook.com/Mit%C3%A4Tehd%C3%A4fi-104893475469082" className={styles.btn} target="_blank">Ole meihin yhteydessä Facebookissa</a>
            
        </div>
        </div>   
        </div>
    )
}
