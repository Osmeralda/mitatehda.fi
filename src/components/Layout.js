import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import * as styles from '../styles/global.css'
import { Container } from 'reactstrap'



export default function Layout({ children }) {
    return (
        <div className="layout">
        <Navbar />
        <Container lg={{ span:4, offset:4 }}>
        <div className="content">
            { children }    
        </div>
        </Container>
        <div>
            
        </div>
        <Footer />
        </div>
    )
}
