import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import * as styles from '../styles/global.css'
import { Container, Row, Col } from 'reactstrap'



export default function Layout({ children }) {
    return (
        
        <div className="layout">
        <Navbar />
        <Container >
        <Row>
            <Col></Col>
            <Col>
        <div className="content">
            { children }                
        </div>
        </Col>
        <Col></Col>
        </Row>
        </Container>
        <Footer />
        </div>
    )
}
