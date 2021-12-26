import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import {Link} from "gatsby"

export default function Home() {

  return <section className={styles.Home} >
    <Layout>
    <div>
      
      <h2></h2>
      <Link className={styles.btn} to="/ruka">Ruka</Link>
    </div>
    </Layout>
  </section>
}