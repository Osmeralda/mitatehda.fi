import { Link, graphql } from 'gatsby'
import React from 'react'
import * as styles from '../styles/global.css'
import { Card, CardTitle, CardBody, Container } from 'reactstrap'


export default function Sidebar() {
    return (
        <Container >
        <nav>
            <div className={'adBanner'}>
                <Card >
                    <CardBody>
                        <CardTitle className='text-center text-uppercase'>
                        Advertisement
                        </CardTitle>
                        <img
                        src="https://via.placeholder.com/200x400"
                        alt="advert"
                        style={{ width: '100%'}}
                        />
                    </CardBody>
                </Card>           
            </div>
        </nav>
        </Container>
    )
}

